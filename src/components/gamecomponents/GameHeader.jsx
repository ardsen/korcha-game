import { Link } from "react-router-dom";

function GameHeader() {
  return (
    <header
      style={{
        width: "100%",
        backgroundImage: "url(/header-bg-3.png)",
        height: "3.3rem",
        backgroundSize: "cover",
      }}
    >
      <h2>
        <Link to={"/"}>Korcha</Link>
      </h2>
    </header>
  );
}

export default GameHeader;
