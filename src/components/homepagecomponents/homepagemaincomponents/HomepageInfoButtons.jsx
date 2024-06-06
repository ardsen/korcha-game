function HomepageInfoButtons({ children, scroll }) {
  return (
    <a href={`#section-${scroll}`}>
      <button className="btn-scroll" href={`#section-${scroll}`}>
        {children}
      </button>
    </a>
  );
}

export default HomepageInfoButtons;
