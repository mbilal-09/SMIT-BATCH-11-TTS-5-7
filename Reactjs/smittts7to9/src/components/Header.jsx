import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact");
  };
  return (
    <header
      className={`${
        theme == "dark" ? "bg-black text-white" : "text-gray-600 bg-white"
      }  body-font`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Headers</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/material" className="mr-5 hover:text-gray-900">
            Material UI
          </Link>
          <Link to="/useState" className="mr-5 hover:text-gray-900">
            Use State
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to="/profile" className="mr-5 hover:text-gray-900">
            Profile
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <div onClick={goToContactUs} className="mr-5 hover:text-gray-900">
            Contact Us
          </div>
        </nav>
        <Button 
        onClick={()=> setTheme(theme == 'light' ? "dark" : "light" )}
        text={theme === "light" ? "Make it Dark" : "Make it LIGHT"} />
      </div>
    </header>
  );
}

export default Header;
