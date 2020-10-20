module.exports = function (controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'work history' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `I was a manager at Flatiron Wines and Spirits. Before that I was a 
                    server and sommelier at Delfina Restaurant Group. Would you like to know more about either?`,
                quick_replies: [
                    {
                        title: 'Flatiron Wines and Spirits',
                        payload: 'Flatiron'
                    },
                    {
                        title: 'Delfina Resturant Group',
                        payload: 'Delfina'
                    }
                ]
            })
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'delfina' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `I worked at Deflina from May of 2016 to January of 2019. I built my wine knowledge through self directed 
                    pursuit of my wine related certifications, passing my level 1 sommelier in the summer of 2017 and continuing with
                    the WSET up to level 3 in summer of 2019. While working, I was responsible for maintaining and building customer relationships
                    to increase the number of regulars while pushing interest in fine wines from all over Italy and increase sales.
                    I was also tasked with cellar organization and hosting of regular staff tastings to increase wine knowledge of the 
                    servers. Would you like to hear about my managment experience at Flatiron Wines and Spirits?`,
                quick_replies: [
                    {
                        title: 'Flatiron Wines and Spirits',
                        payload: 'Flatiron'
                    },
                    {
                        title: 'Educational History',
                        payload: 'Education'
                    },
                ]
            })
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'flatiron' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `I managed Flatiron Wines and Spirits from February of 2018 to March of 2020. I was responsible for a team of 8 
                    with total revenue of over 4.5 million each year. While managing, I developed a new workflow for online order 
                    fullfillment and online customer retention, seeing segment growth of 47.5% from 2017 to 2018. At the same time, I 
                    was responsible for buying, merchandizing, ordering, and inventorying the selection of Beer, Sake, Cider, and Spanish 
                    wine resulting in segment growth of 32% each year. Between 2018 and 2019, I implemented a new staff scheduling protocol
                    to increase staffing effeciency, which saw an increase of 18%, and decreasing hours spent creating the schedule, which 
                    saw a decrease of about 60%. I left through the begining of 2020 to pursue my passion of code. Would you like to hear
                    about my education history or coding background?`,
                quick_replies: [
                    {
                        title: 'Educational History',
                        payload: 'Education'
                    },
                    {
                        title: 'Tech Stack',
                        payload: 'Tech Stack'
                    }
                ]
            })
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'education' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `I attended the University of California at Davis, graduating in 2010 with a B.S. in Clinical Nutrition. Although my 
                degree was clinical in nature, I spent many hours as an intern in an Analytical Chemistsry laboratory researching ways to 
                increase the isolation effeciency of certain types of sugar from raw cows milk and pursued higher level metabolism classes.
                Most recently, I attended App Academy in 2020, completing a 1000 hour, 16 week Software Engineering bootcamp in order to 
                delve deeper into my more techincal interests. Can I tell you about my current tech stack or share contact information? `,
                quick_replies: [
                    {
                        title: 'Tech Stack',
                        payload: 'Tech Stack'
                    },
                    {
                        title: 'Contact Information',
                        payload: 'Contact Infromation'
                    },
                ]
            })
        }
    );

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'tech stack' &&
        controller._config.currentSpeaker === "solomon", ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, {
                text: `I am proffecient in Ruby/Rails, having built fullstack applications within the framework utilizing JavaScript (React/Redux)
                for the frontend. I've worked on MERN stack (Mongo DB, Express, React, Node.js) applicaitons as part of group projects, I'm 
                comfortable with HTML, CSS, SQL databases, and have deployed utilizing Heroku. Recently have started to teach myself TypeScript. 
                Can I give you my contact information?`,
                quick_replies: [
                    {
                        title: 'Contact Information',
                        payload: 'Contact Infromation'
                    },
                ]
            })
        }
    );

}