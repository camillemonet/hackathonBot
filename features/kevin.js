module.exports = function (controller) {

  controller.hears("kevin", ["message"], async (bot, message) => {
    controller._config.currentSpeaker = "kevin";
    await bot.reply(message,{
                text: 'What would you like to know about?',
                quick_replies: [
                    {
                        title: 'Work History',
                        payload: 'work history',
                    },
                    {
                        title: 'Coding Projects',
                        payload: 'coding projects',
                    },
                    {
                        title: 'proficiencies',
                        payload: 'proficiencies'
                    }
                ]
            });
  })

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'work history' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `Boys & Girls Clubs of Sonoma-Marin: Sept 2013 - April 2020\nCamp Galileo: May 2013 - Aug 2013\nCascade Medical Transport: Oct 2012 - April 2013`)
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'coding projects' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `My three projects are a fullstack Splitwise clone using Ruby on Rails, JavaScript, React, and Redux...`)
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'proficiencies' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `I am proficient in Ruby, Rails, JavaScript, Node.js, React, Redux, PostgresSQL, MongoDB, CSS3, and HTML5`)
  });

}