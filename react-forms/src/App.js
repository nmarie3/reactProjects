import './App.css';
import {useState} from 'react';

function App() {
    const [userInfo, setUserInfo] = useState({
      firstName: "", 
      lastName: "", 
      email:"", 
      dob:"",
      gender: "",
      prompt1: "",
      answer1: "",
  })

{/*the ...userInfo's "..." below is used as a rest syntax here to collect all remaining elements into an array in the format of name and value. "..." is also a spread operator which unpacks collected elements like an array into single elements. kinda like a suitcase, you're either packing things in or out*/}
  const handleInput = e => {
    const {name, value} = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
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
          <div>
            <label>Select a Prompt</label>
            <select>
              <option value="My favorite anime is...">My favorite anime is...</option>
              <option value="Guinea pigs are awesome because...">Guinea pigs are awesome because...</option>
              <option value="On my days off I like to...">On my days off I like to...</option>
              <option value="My absolute recommendation is...">My absolute recommendation is...</option>
              <option value="Something unique about me is...">Something unique about me is...</option>
            </select>
            <textarea
              id="answer1"
              name="answer1"
              rows={5}
              placeholder="Be honest"
              onChange={handleInput}/>
          </div>
          <div>
            <button>Add Prompt</button>
          </div>
        </fieldset>

      </form>
    </>
  );
}

export default App;
