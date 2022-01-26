import "./Header.css";

const Header = () => {
  return (
  <span onClick={()=>window.scroll(0,0)} className="Header">
    🎬 Movies World 🎥
  </span>
  );
};

export default Header;