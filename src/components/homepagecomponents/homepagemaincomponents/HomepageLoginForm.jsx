// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomepageLoginForm({ user, currentAccount, setCurrentAccount }) {
  const [isValid, setIsValid] = useState(false);
  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");
  const checkId = function (e) {
    // setId(e.target.value);
    setCurrentAccount(user.find((acc) => acc.username === e.target.value));
  };
  const checkPassword = function (e) {
    // setPassword(e.target.value);
    if (currentAccount.psw === e.target.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div>
      <form className="login-form">
        <label htmlFor="username">
          {" "}
          <b>Username</b>{" "}
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          id="username"
          required
          onChange={checkId}
        />
        <label htmlFor="psw" style={{ marginTop: "1.4rem" }}>
          {" "}
          <b>Password</b>{" "}
        </label>
        <input
          type="password"
          name="psw"
          id="psw"
          placeholder="Enter your password"
          onChange={checkPassword}
        />
        <label
          htmlFor="checkbox"
          style={{ marginTop: "1.4rem", fontSize: "medium" }}
        >
          <input type="checkbox" name="checkbox" id="checkbox" /> Remember me
        </label>
        <Link to={isValid ? "customization" : ""}>
          <input type="submit" value="Log In" className="login-button" />
        </Link>
      </form>
    </div>
  );
}

export default HomepageLoginForm;
