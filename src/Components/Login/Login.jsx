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
        <div className="w-[45%] h-full bg-red-500">asdsd</div>
        <div className="w-[55%] h-full bg-gradient-to-t from-[#252525] to-[#000000] flex flex-col justify-start items-start rounded-r-xl p-10">
          <h1 className="font-inter text-white text-4xl tracking-wide mb-2">Create an account</h1>
          <p className="font-inter text-[#7D7D7D] text-sm">
            Already have an account? <span className="text-white underline cursor-pointer">Log in</span>
          </p>
          <form action="" className="w-full h-40 flex flex-col justify-between items-center my-5">
            <div className="h-12 w-full flex justify-between items-center">
              <Name placeholder={"First Name"} name={"First Name"} />
              <Name placeholder={"Last Name"} name={"Last Name"} />
            </div>
            <Input type={"email"} placeholder={"Enter Email"} name={"Email"} />
            <Input
              type={"password"}
              placeholder={"Enter Password"}
              name={"Password"}
            />
          </form>

          <div className="terms_conditions">
            <input type="checkbox" id="terms_checkbox" />
            <p>I agree to the terms and conditions</p>
          </div>
          <button type="submit" form="login_form" id="create_account_btn">
            Create Account
          </button>
          <div className="other_methods">
            <div></div>
            <p>Or register with</p>
            <div></div>
          </div>
          <div className="social_media">
            <div className="google">
              <div className="google_logo">
                <img src={google} alt="Google Logo" />
              </div>
              <p>Google</p>
            </div>

            <div className="apple">
              <div className="apple_logo">
                <img src={apple} alt="Apple Logo" />
              </div>
              <p>Apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
