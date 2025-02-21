import React from "react";
import "./Login.css";
import Name from "../../base/Names/Name";
import Input from "../../base/FormInput/Input";
import google from "../../assets/icons/google_logo.png";
import apple from "../../assets/icons/apple_logo.png";

function Login() {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-full w-full fixed bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-1/2 h-fit bg-black flex justify-center items-center rounded-xl">
        <div className="w-1/2 h-full bg-red-500">Hi</div>
        <div className="w-1/2 h-full bg-gradient-to-t from-[#252525] to-[#000000] flex flex-col justify-start items-start rounded-r-xl p-10">
          <h1 className="font-inter text-white text-4xl tracking-wide mb-2">Create an account</h1>
          <p className="font-inter text-[#7D7D7D] text-sm">
            Already have an account? <span className="text-white underline cursor-pointer">Log in</span>
          </p>
          <form className=" w-full h-fit grid grid-rows-4 grid-cols-2 justify-items-stretch gap-3 items-center my-5">
            <Name placeholder={"First Name"} name={"First Name"} /> 
            <Name placeholder={"Last Name"} name={"Last Name"} />
            <Input type={"email"} placeholder={"Enter Email"} name={"Email"}/>
            <Input type={"password"} placeholder={"Enter Password"} name={"Password"}/>
            <div className="col-span-2 h-12 flex justify-start items-center">
            <input type="checkbox" className="h-4 w-4 accent-black" />
            <p className="font-inter text-white text-md ml-2">I agree to the terms and conditions</p>
          </div>
          <button type="submit" form="login_form" className="font-inter text-base font-semibold text-white h-12 text-center border-none bg-black rounded-[3px] cursor-pointer col-span-2">
            Create Account
          </button>
          </form>

          
          <div className="w-full h-fit flex justify-between items-center">
            <hr className="border-gray-500 w-1/3"/>
            <p className="font-inter text-sm text-[#7D7D7D]">Or register with</p>
            <hr className="border-gray-500 w-1/3"/>
          </div>
          <div className="w-full h-12 flex justify-between items-center mt-5">
            <button className="h-12 w-[45%] border border-white rounded-[3px] flex justify-center items-center">
              <div className="w-12 h-12">
                <img src={google} alt="Google Logo" className="h-full w-full object-contain"/>
              </div>
              <p className="font-inter text-md text-white">Google</p>
            </button>

            <button className="h-12 w-[45%] border border-white rounded-[3px] flex justify-center items-center">
              <div className="w-6 h-6 mx-3">
                <img src={apple} alt="Apple Logo" className="h-full w-full object-contain"/>
              </div>
              <p className="font-inter text-md text-white">Apple</p>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
