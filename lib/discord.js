/**
 * Cryptonote Node.JS Pool
 * https://github.com/funkypenguin/cryptonote-nodejs-pool
 *
 * Discord notifications 
 *
 * Author: Bencey (bencey@bencey.co.nz)
 * Improver: David Young (davidy@funkypenguin.co.nz)
 **/

// Load required modules
var webhook = require("webhook-discord");

# const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/520379655467827211/EEVkWL5yZnHcTGk_SAMj_W9dn7GGzg5RPqIqUOo-PvHAC8f2Z2YPkKYmCkgufd5rVvfQ");

// Initialize log system
var logSystem = 'discord';
require('./exceptionWriter.js')(logSystem);

/**
 * Sends out an email
 **/
exports.sendDiscord = function(title,color,id) {
    // Return error if no webhook configured 
    if (!config.discord.webhook) {
        log('warn', logSystem, 'Unable to call webhook - no webhook defined!');
    	return ;
    }

    // Check webhook system configuration
    if (!config.discord) {
        log('error', logSystem, 'Discord notifications not configured!');
    	return ;
    }
	
    // Do nothing if email system is disabled
    if (!config.discord.enabled) return ;

    // Setup hook
    var webhook = new webhook.Webhook(config.discord.webhook);

    // Send that webhook
    const msg = new webhook.MessageBuilder()
                  .setName(title)
                  .setColor(color)
                  .addField(id)
                  .setTime();
     webhook.send(msg);

     log('info', logSystem, 'Discord webhook executed');
    
};
