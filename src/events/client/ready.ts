import { createEvent } from 'seyfert';
import { join } from 'path';
import { cwd } from 'node:process';

export default createEvent({
  data: { once: true, name: 'ready' },
  async run(user, client, shard) {
    await client
      .uploadCommands({
        cachePath: join(cwd(), 'cache.json'),
      })
      .catch(client.logger.error);

    await client.lavalink
      .init({
        id: user.id,
        username: user.username,
        shard: 'auto',
      })
      .catch(client.logger.error);
    client.logger.info(`Start "${user.tag}" on shard #${shard}`);
  },
});
