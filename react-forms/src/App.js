import './App.css';
import {useState} from 'react';

function App() {
    const [userInfo, setUserInfo] = useState({
      firstName: "", 
      lastName: "", 
      email:"", 
      dob:"",
      gender: "",
  })


  {/*we need to break out the prompt and answer from the user info and move it to a new state. so in this new state we want to set the default to not just be an obj but an array of objs, because we want to keep pushing the prompts into the collection of prompts as the user keeps adding them. so those need to be added to our array.*/ }
  const [prompts, setPrompts] = useState([{
    prompt: "",
    answer: "",
    timestamp: new Date().getTime()
  }])

{/*the ...userInfo's "..." below is used as a rest syntax here to collect all remaining elements into an array in the format of name and value. "..." is also a spread operator which unpacks collected elements like an array into single elements. kinda like a suitcase, you're either packing things in or out*/}
  const handleInput = e => {
    const {name, value} = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handlePrompt = (e, i) => {
    const {name, value} = e.target;
    let newPrompts = [...prompts]; {/*current collection of prompts*/}
    newPrompts [i] [name] = value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt = () => {
    setPrompts([...prompts, {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime()
    }])
  }

  const handleDelete = (i) => {
    let deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompts(deletePrompts);
  }




  return (
    <>
    {/*fieldset is used for grouping related elements in a form. with fieldset, you can use legend which acts a a caption for the fieldset element*/}
      <form className="formContainer">
        <fieldset className="fieldsetContainer">
          <legend>About You</legend>
          <div>
            <label>What's your name?</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleInput}
            />
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>What's your email?</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>When's your birthday?</label>
            {/*type as date makes a calandar pop up*/}
            <input
              id="dob"
              name="dob"
              type="date" 
              max="2005-01-01"
              placeholder="Birthday"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>What's your gender?</label>
            <select id="gender" name="gender" onChange={handleInput}> {/*creates a dropdown*/}
              <option>Gender</option> {/*dropdown default*/}
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="fieldsetContainer">
          <legend>Prompts</legend>
          {prompts.map((prompt, i) => (
          <div key={prompt.timestamp}>
            <label>Select a Prompt</label>
            <div classname="deleteButton">
            <select id="prompt" name="prompt" onChange={e => handlePrompt(e, i)}>
              <option value="My favorite anime is...">My favorite anime is...</option>
              <option value="Guinea pigs are awesome because...">Guinea pigs are awesome because...</option>
              <option value="On my days off I like to...">On my days off I like to...</option>
              <option value="My absolute recommendation is...">My absolute recommendation is...</option>
              <option value="Something unique about me is...">Something unique about me is...</option>
            </select>
             {/*since we want to feed through the index number, it'll be easier if the delete is inside a map method*/ }
            <button type="button" onClick={() => handleDelete(i)}>Delete</button>
            </div>
            <textarea
              id="answer1"
              name="answer1"
              rows={5}
              placeholder="Be honest"
              onChange={e => handlePrompt(e, i)}/>
          </div>
          ))}
          <div className="addPrompt">
            <button
            type="button"
            onClick={handleAddPrompt}>
              Add Prompt</button>
          </div>
        </fieldset>

      </form>
    </>
  );
}

export default App;
