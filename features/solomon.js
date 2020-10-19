module.exports = function (controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'work history' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `Manager - Flatiron Wines and Spirits
                    Server/Sommelier - Delfina Restaurant Group`,
                quick_replies: [
                    {
                        title: 'Flatiron Wines and Spirits',
                        payload: 'Flatiron Wines and Spirits'
                    },
                    {
                        title: 'Delfina Resturant Group',
                        payload: 'Delfina Resturant Group'
                    }
                ]
            })
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'education' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
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
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'tech stack' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, `Qualifai (June 2019-Jan 2020)`)
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'contact information' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, `Qualifai (June 2019-Jan 2020)`)
        }
    );
}