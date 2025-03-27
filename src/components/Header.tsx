import MainDarkLogo from "../../public/images/logo-dark.svg";
import MainLogo from "../../public/images/logo.svg";
import ThemeDarkLogo from "../../public/images/icon-moon.svg";
import ThemeLightLogo from "../../public/images/icon-sun.svg";

const Header = ({
  isDarkTheme,
  setIsDarkThem,
}: {
  isDarkTheme: boolean;
  setIsDarkThem: (value: boolean) => void;
}) => {
  return (
    <header className="bg-neutral-0 dark:bg-neutral-800  flex justify-between items-center border rounded-2xl border-neutral-200 dark:border-none px-3 py-3">
      <div>
        {isDarkTheme ? (
          <img src={MainDarkLogo} alt="Extensions Logo" />
        ) : (
          <img src={MainLogo} alt="Extensions Logo" />
        )}
      </div>

      <div
        className="bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 flex items-center px-3 py-3 rounded-xl cursor-pointer"
        onClick={() => setIsDarkThem(!isDarkTheme)}
      >
        {isDarkTheme ? (
          <img src={ThemeLightLogo} alt="Theme Light Logo" className="w-5" />
        ) : (
          <img src={ThemeDarkLogo} alt="Theme Dark Logo" className="w-5" />
        )}
      </div>
    </header>
  );
};

export default Header;
