const { config } = require('seyfert');

module.exports = config.bot({
  token: process.env.TOKEN,
  intents: ['Guilds', 'GuildVoiceStates'],
  locations: {
    base: 'src',
    output: 'dist',
    commands: 'commands',
    events: 'events/client',
  },
  applicationId: '1269705237955084381',
});
