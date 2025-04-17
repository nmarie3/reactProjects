import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";

const feedURL = "https://www.animenewsnetwork.com/all/rss.xml?ann-edition=w";
const parser = new RSSParser();
{/*now to push the feed into our frontend*/}
let articles = [];

const parse = async url => {
    const feed = await parser.parseURL(url);

    console.log(feed.title);

    {/*when you do view page source on the link, you'll be show a bunch of objects that this code will loop through. the "title" and "link" is the html code from that link. the console.log below is only for checking in the terminal if it's working. after this is confirmed, create the array above and proceed with the .push below*/}
    {/*feed.items.forEach(item => {
        console.log(`${item.title}\n${item.link}\n\n`);*/}

        feed.items.forEach(item => {
            articles.push({item})
        })
}

parse(feedURL);

let app = express();
app.use(cors());

{/*get request comes from our frontend to the server, then our server responds. it responds by sending back an array of articles*/}
app.get('/', (req, res) => {
    res.send(articles);
})


const server = app.listen("4000", () => {
    console.log("App is listening");
});


export default server;


{/*NOTES:
🟦 Express
Express is a popular web framework for Node.js. It helps you:

Create servers and APIs easily

Handle routes (like /home, /about)

Manage requests and responses (GET, POST, etc.)

Think of it as a lightweight tool that lets you build web apps and REST APIs quickly without needing to write everything from scratch.

🟨 CORS (Cross-Origin Resource Sharing)
CORS is a browser security feature that controls which domains are allowed to access your server.

By default, browsers block frontend code (like React apps) from making requests to a server on a different domain or port.

The cors package in Node/Express helps you:

Enable or configure CORS rules

Allow certain frontend apps to talk to your server */}