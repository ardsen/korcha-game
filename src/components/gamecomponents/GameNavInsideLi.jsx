function GameNavInsideLi({ children, isLiActive, setIsLiActive, number }) {
  return (
    <li
      onClick={setIsLiActive}
      className={`${isLiActive ? "inside-nav-li-active" : ""}`}
      data-number={number}
    >
      {children}
    </li>
  );
}

export default GameNavInsideLi;
