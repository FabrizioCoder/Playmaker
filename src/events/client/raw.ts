import { createEvent } from 'seyfert';

export default createEvent({
  data: { once: false, name: 'raw' },
  async run(payload, client) {
    // {
    //     t: 'VOICE_SERVER_UPDATE',
    //     s: 5,
    //     op: 0,
    //     d: {
    //       token: '46c2de6b5bb8b7f0',
    //       guild_id: '684551832793776128',
    //       endpoint: 'us-south1387.discord.media:443'
    //     }
    //   }

    //@ts-ignore
    client.lavalink.sendRawData(payload);
  },
});
