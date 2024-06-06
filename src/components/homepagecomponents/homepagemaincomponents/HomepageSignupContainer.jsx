// import { useState } from "react";

import { useState } from "react";

function HomepageSignupContainer({
  setIsSignUpContainerOpen,
  isSignUpContainerOpen,
  itemList,
  exp,
  level,
  setUser,
  user,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords don't match.");
      return;
    }

    const newUser = {
      username: userName,
      psw: password,
      hp: 5,
      end: 5,
      str: 5,
      int: 5,
      agi: 5,
      name: "",
      img: "",
      equippedItem: "",
      equippedArmor: "",
      ap: 0,
      magP: 0,
      physDef: 0,
      magDef: 0,
      health: 0,
      stamina: 0,
      inventory: Object.entries(itemList).map(([key, value]) => ({
        type: key,
        ...value,
      })),
      criticalChance: 0,
      criticalDamage: 0,
      coin: 1900,
      exp: exp,
      level: level,
      remainHealth: 0,
      remainStamina: 0,
      race: "",
    };
    setUser([...user, newUser]);
    setIsSignedUp(true);
    setTimeout(() => {
      setIsSignUpContainerOpen(false);
      setIsSignedUp(false);
    }, 2000);
  };
  return (
    <div
      className={`support-container ${isSignUpContainerOpen ? "" : "hidden"}`}
      id="signup-container"
    >
      <button
        className="close-support-btn"
        id="close-signup-button"
        onClick={() => setIsSignUpContainerOpen(false)}
      >
        &times;
      </button>
      <h3>⚔ Start Your Journey</h3>
      <form
        action=""
        className="support-form"
        style={{ paddingTop: "1rem" }}
        onSubmit={handleSubmit}
      >
        <div className="first-name-container">
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            name="uname"
            placeholder="Enter new username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="email-container">
          <label htmlFor="signuppsw">Password</label>
          <input
            type="password"
            name="signuppsw"
            id="signuppsw"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="message-container">
          <label htmlFor="repsw">Re-password</label>
          <input
            type="password"
            name="repsw"
            id="repsw"
            placeholder="Enter password again"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="submit-btn"
          style={{ marginTop: "2rem", cursor: "pointer" }}
        />
      </form>
      {isSignedUp && (
        <>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "var(--color-text)" }}>
              Succesfully Signed Up ✔
            </p>
            <div className="level-up-timer-container">
              <div className="level-up-timer animation-timer-level-up"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomepageSignupContainer;
