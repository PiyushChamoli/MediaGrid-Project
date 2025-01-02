import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 py-20 px-10 rounded-md max-w-[28rem] w-full shadow-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
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
          className="block mb-5 px-4 py-3 w-full bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="block mb-5 px-4 py-3 w-full bg-gray-800 text-white placeholder-gray-500 rounded-md border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
        />
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300 ease-in-out">
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
