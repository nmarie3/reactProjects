import './App.css';
import { useReducer, useState } from 'react';

/*useReducer is a react hook that is an alternative to useState and helps to dtore/update/manage complex state logic in react apps:
-when state has multiple sub-values
-next state depends on previous one

this app in particular is not recommended to do in real life but is just a good example to show how this feature is used*/

const logInReducer = (state, action) => {
  switch (action.type) {
    
  }
}

function App() {
  //don't need the below when using useReducer anymore:
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [error, setError] = useState("");
  /*useReducer returns an array of 2 values. dispatch means it dispatches a function*/
  const [state, dispatch] = useReducer(logInReducer, {
    username: "",
    password: "",
    loggedIn: false,
    error:"", 
    })

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    try {
      if (username === "Jerry" && password === "Tom") {
        setLoggedIn(true);
      } else {
        throw Error;
      }
      setPassword("");
    }catch (error) {
      setError("Wrong password or username");
      setUsername("");
      setPassword("");
    }
  }

  return (
    <>
    <h1>how to use useReducer</h1>
    <div>
      {loggedIn ? (
        <>
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </div></>
      ) : (
        <form className="formContainer" onSubmit={handleSubmit}>
      <input 
        type="username"
        autoComplete="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <input 
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={username}
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Log In</button>
        <p className="errorTxt">{error}</p>
    </form>
      )}
    </div>
    </>
  );
}

export default App;
