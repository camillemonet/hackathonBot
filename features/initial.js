module.exports = function (controller) {
  
  let currentSpeaker = controller._config.currentSpeaker;

  controller.on('initial_message', async (bot, message) => {
    await bot.reply(message, {
      text: "Welcome! Who would you like to speak with?", 
      quick_replies: [
        {
          title: 'Kevin',
          payload: 'kevin'
        },
        {
          title: 'Camille',
          payload: 'camille'
        },
        {
          title: 'Solomon',
          payload: 'solomon'
        },
        {
          title: 'Elijah',
          payload: 'elijah'
        },
      ]
    })
  });



  controller.hears("camille", ["message"], async (bot, message) => {
    controller._config.currentSpeaker = "camille";
    await bot.reply(message, "Hi! You're talking to Camille. How can I help you?")
    console.log(controller._config.currentSpeaker);
  })

  controller.hears("solomon", ["message"], async (bot, message) => {
    controller._config.currentSpeaker = "solomon";
    console.log(controller._config.currentSpeaker);
  })

  controller.hears("elijah", ["message"], async (bot, message) => {
    controller._config.currentSpeaker = "elijah";
    console.log(controller._config.currentSpeaker);
  })

}