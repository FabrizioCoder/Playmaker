import { LavalinkManager } from 'lavalink-client';
import { Client, type ParseClient, type ClientOptions } from 'seyfert';

export default class PlayMakerClient extends Client<true> {
  constructor(config?: ClientOptions) {
    super(config);
    this.setServices({
      cache: {
        disabledCache: [
          'channels',
          'roles',
          'emojis',
          'members',
          'messages',
          'presences',
        ],
      },
    });

    this.lavalink = new LavalinkManager({
      nodes: [
        {
          host: 'localhost',
          port: 2333,
          authorization: 'youshallnotpass',
        },
      ],
      sendToShard: (guildId, payload) => {
        this.gateway.send(this.gateway.calculateShardId(guildId), payload);
      },
      playerOptions: {
        onDisconnect: {
          autoReconnect: true,
          destroyPlayer: false,
        },
        onEmptyQueue: {
          destroyAfterMs: 60000,
        },
      },
    });
  }
}

declare module 'seyfert' {
  interface UsingClient extends ParseClient<PlayMakerClient> {}

  // client.lavalink
  interface Client {
    lavalink: LavalinkManager;
  }
}
