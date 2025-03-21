import MainLogo from "../assets/images/logo.svg";
import ThemeLogo from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <header className="bg-neutral-0 flex justify-between items-center border rounded-2xl border-neutral-200 px-3 py-3">
      <div>
        <img src={MainLogo} alt="Extensions Logo" />
      </div>

      <div className="bg-neutral-100 flex items-center px-3 py-3 rounded-xl cursor-pointer">
        <img src={ThemeLogo} alt="Theme Logo" className="w-5" />
      </div>
    </header>
  );
};

export default Header;
