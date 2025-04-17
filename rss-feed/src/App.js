import './App.css';
import axios from "axios";
import { useState, useEffect} from 'react';
import Feed from './Feed';

{/*NOTES:
  Axios is a library that lets you easily make HTTP requests (like GET or POST) from your frontend or backend code — kind of like fetch, but with extra features like:
・Automatic JSON handling
・Request/response interceptors
・Better error handling
You use it to talk to APIs or your backend server. */}


function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  {/*in case something goes wrong. also can relay a message back to user in here*/}
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    }catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getArticles();
  }, [])


  return (
    <>
    <h1>RSS Feed</h1>

    <div>
      <img src="	https://cdn.animenewsnetwork.com/stylesheets/img/logo.name.no-dot.png"/>
    </div>

    {/*the two "item"s that appear is 1: the argument and 2: the object name from the feed itself, found in the console. what comes after that is also from the feed console*/}
    {articles.map((item, i) => 
      <Feed
        key={i}
        title={item.item.title}
        link={item.item.link}
        date={item.item.pubDate}        
        />
    )}
    </>
  );
}

export default App;
