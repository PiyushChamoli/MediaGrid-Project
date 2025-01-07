import { signOut } from "firebase/auth";
import user_icon from "../utils/user-icon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };
  return (
    <header className="absolute top-0 left-0 w-full p-4 bg-transparent shadow-lg z-10">
      <div className="flex justify-between items-center">
        <button className="font-bold text-3xl text-red-500">MediaGrid</button>
        {user && (
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              alt="user-icon"
              className="max-w-12 inline-block"
            />
            <button
              onClick={handleSignOut}
              className="inline-block ml-2 px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
