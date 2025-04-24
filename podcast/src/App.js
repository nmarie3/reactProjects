/*<<npm i jwt-decode>> is needed to decode user information from the google token like name and profile picture. then must add beelow:*/
import {jwtDecode} from "jwt-decode";
/*useRef allows values to stay the same between renders, can store a new value that doesn't cause a rerender when updated, and can access a DOM element directly*/
import {useEffect, useState, userContext, useRef} from 'react';
import {UserContext} from "./contexts/UserContext";
import './App.css';
import Header from "./components/Header";
import Episode from "./components/Episode";

function App() {
  const [user, setUser] = useState({}); /*obj because the data inside is an obj*/
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const signInButton = useRef();

  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true)
  };

  useEffect (() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "181752228402-lqoesqic1n90afeelrp9nj2bsokbggfo.apps.googleusercontent.com",
      callback: handleCallBack /*what happens when someone logs in*/
    });
    google.accounts.id.renderButton(
      signInButton.current, // document.getElementById("SignIn"), <<old code>>
      {theme: "outline", size:"large"}
    )
  }, [loggedIn]) /*adding loggedIn here means we need it to rerender every time our loggedIn status changes because it's in a useEffect*/

  /*this is how we can get feeds without importing that rss package liek we deed for rss-feed project*/
  const rssFeed = "http://cdn.atp.fm/rss/public?m2swoudx";
  useEffect(() => {
    fetch(rssFeed).then(res => res.text()).then(str => {
      const parser = new window.DOMParser();
      const data = parser.parseFromString(str, "text/xml"); /*rss feeds are always xml format*/
      const itemList = data.querySelectorAll("item"); /*itemList is all item tags in the data*/
      const items = []; /*then those items get pushed into this array*/
      itemList.forEach(el => {
        items.push({
          title: el.querySelector("title").innerHTML,
          pubDate: new Date(el.querySelector("pubDate").textContext).toLocaleDateString("ja-JP", {day: "numeric", month: "long", year: "numeric"}),
          mp3: el.querySelector("enclosure").getAttribute("url"),
          link: el.querySelector("link").innerHTML
        })
      })
      setData(items)
    }, [rssFeed]) /*rssFeed is the dependency*/
  })

  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} signInButton={signInButton}/>
      {/*only want the audio to show after signing in*/}
      {loggedIn ? (
          <div>
          {data.map((ep, i) => /*mapping data into episode component*/
          <Episode 
          key={i}
          title={ep.title}
          pubDate={ep.pubDate}
          link={ep.link}
          mp3={ep.mp3}
          /> 
          )}
          </div>
      ):null}
    </UserContext.Provider>
    </>
  );
}

export default App;