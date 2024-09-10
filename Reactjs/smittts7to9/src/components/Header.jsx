import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact");
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/useState" className="mr-5 hover:text-gray-900">
            Use State
          </Link>
          <Link to="/useEffect" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <div onClick={goToContactUs} className="mr-5 hover:text-gray-900">
            Contact Us
          </div>
        </nav>

        {user.isLogin ? (
          <div className="flex items-center">
            <h1 className="mx-3">{user.email}</h1>
            <button onClick={handleSignOut}>Signout</button>
          </div>
        ) : (
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
