import { Link } from "react-router-dom";

function GamePlayEnemy() {
  return (
    <div>
      <Link to={"/game"}>
        <button>Turn</button>
      </Link>
    </div>
  );
}

export default GamePlayEnemy;
