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
                        title: 'Proficiencies',
                        payload: 'proficiencies'
                    },
                    {
                        title: 'Speak to Someone Else',
                        payload: 'speak to someone else'
                    }
                ]
            });
  })

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'work history' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `Boys & Girls Clubs of Sonoma-Marin: Sept 2013 - April 2020\nCamp Galileo: May 2013 - Aug 2013\nCascade Medical Transport: Oct 2012 - April 2013`)
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'coding projects' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, {
      text: 'I have been involved in three major projects. SplitCash: A fullstack expense sharing app using Rubyr, Rails, React, Redux, & PostgresSQL. Volunteerist: A group project using the MERN stack where I was the lead frontend engineer and developed the React components. MazeR: A 2-d maze platformer created using JavaScript, canvas, HTML5, and CSS3. Which one would you like to hear about?',
      quick_replies: [
        {
          title: 'SplitCash',
          payload: 'SplitCash'
        },
        {
          title: 'Vlunteerist',
          payload: 'Volunteerist'
        },
        {
          title: 'MazeR',
          payload: 'MazeR'
        },
        {
          title: 'Back to my Overview',
          payload: 'kevin'
        }
      ]
    })
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'proficiencies' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `I am proficient in Ruby, Rails, JavaScript, Node.js, React, Redux, PostgresSQL, MongoDB, CSS3, and HTML5`)
  });


  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'speak to someone else' && controller._config.currentSpeaker === "kevin", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, {
      text: 'Who would you like to speak with?',
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

}