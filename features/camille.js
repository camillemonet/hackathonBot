module.exports = function (controller) {

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'work history' && controller._config.currentSpeaker === "camille", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `Qualifai (June 2019-Jan 2020)`)
  });

}