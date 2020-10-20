const { BotKitCMSHelper } = require('botkit-plugin-cms');

module.exports = function (controller) {


  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase() === 'work history' &&
    controller._config.currentSpeaker === "elijah", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `Well, let's see. I've worked most recently at Mission Cliffs, a local San Francisco climbing gym. Would you like to hear more about that?`)
    });

  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase() === 'coding' &&
    controller._config.currentSpeaker === "elijah", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `I've spent the last six months sharpening my skills in JavaScript and Ruby.
      I've built a clone of the expense sharing app, Splitwise. It is a full stack app called SplitPies built with a 
      Rails backend and React.JS and Redux.JS frontend. I've also built `)
    });

  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase() === 'education' &&
    controller._config.currentSpeaker === "elijah", ['message', 'direct_message'], async (bot, message) => {
    await bot.reply(message, `I graduated from App Academy, which is a rigorous 16 week, 1000+ hour coding course
      where students spend a majority of the time pair programming and working on projects. 
      The camp began with Ruby and Ruby on Rails, and also extensively covered JavaScript and various JavaScript libraries,
      including React.JS and Redux.JS.`)
    });
    // await bot.reply(message, `As for more traditional education, I graduated with a BA in English and History 
    //   from Vanguard University in Southern California in 2012.`)

    controller.hears(async (message) => 
      message.text && 
      message.text.toLowerCase() === 'contact' &&
      controller._config.currentSpeaker === "elijah", ['message', 'direct_message'], async (bot, message) => {
      await bot.reply(message, `If you'd like to contact me, I can be reached at eb.d@outlook.com. 
        If you'd like to reach me by phone, my number is 831-258-6840. My LinkedIn is 
        linkedin.com/elijahbowdove and my Github is github.com/birbmaaan. If you'd like to visit my 
        personal site, it can be found at elijahbowdove.com`)
      });
      
    controller.hears(async (message) => 
      message.text && 
      message.text.toLowerCase() === 'tech' &&
      controller._config.currentSpeaker === "elijah", ['message', 'direct_message'], async (bot, message) => {
      await bot.reply(message, `I am proficient in JavaScript, Ruby, Ruby on Rails, React.js, Redux.js, the MERN stack, HTML, webpack,
      Git, SQL, PostgreSQL, and CSS, among others.`)
      });

}