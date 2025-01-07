import { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import user_icon from "../utils/user-icon.png";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log("email", email.current.value);
    // console.log("password", password.current.value);
    const errorMessage = checkValidation(email, password);
    setMessage(errorMessage);
    if (errorMessage) return;

    // sign in or sign up logic
    if (!isSignIn) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              // Profile updated by dispatching action to store
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="background-image"
          className="w-full h-screen object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50 z-0"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 py-20 px-10 rounded-md max-w-[28rem] w-full shadow-md"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Name"
            className="block mb-5 px-4 py-3 w-full bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email or phone number"
          ref={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="block mb-5 px-4 py-3 w-full bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="block mb-5 px-4 py-3 w-full bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
        />
        <p className="text-red-700 pb-3">{message}</p>
        <button
          onClick={handleButtonClick}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300 ease-in-out"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="mt-6 text-gray-400 text-sm text-center">
            New to MediaGrid?{" "}
            <a
              href="#"
              onClick={toggleSignInForm}
              className="text-white hover:underline"
            >
              Sign up now
            </a>
            .
          </p>
        ) : (
          <p className="mt-6 text-gray-400 text-sm text-center">
            Already Signed Up?{" "}
            <a
              href="#"
              onClick={toggleSignInForm}
              className="text-white hover:underline"
            >
              Sign in now
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
