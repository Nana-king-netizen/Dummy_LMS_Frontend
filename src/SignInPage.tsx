
import { useState } from "react";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsHuman(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    
    <div className="body">
      <img src="images/ug logo.png" alt="Ug logo"style={{height:"150px"}} />
      <h1 style={{paddingLeft:"380px"}}>Missing Grade Report Form< /h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <legend>SignIn</legend>
          <div>
            <label htmlFor="username">Student ID:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Passcode:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <div>
            <label>
              <input
                type="checkbox"
                checked={isHuman}
                onChange={handleCheckboxChange}
              />
              I am human
            </label>
          </div>
          <button type="submit">
            <a href="HomePage.tsx">SignIn</a>
          </button>{" "}
          <br /> <br />
          <button type="submit">Forgot pin</button>
          
          <button type="submit">Forgot Student Id</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignInPage;
