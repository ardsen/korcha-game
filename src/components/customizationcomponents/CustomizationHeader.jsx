import { Link } from "react-router-dom";

function CustomizationHeader() {
  return (
    <header className="customization-header">
      <h2>
        <Link to={"/"}>Korcha</Link>{" "}
      </h2>
    </header>
  );
}

export default CustomizationHeader;
