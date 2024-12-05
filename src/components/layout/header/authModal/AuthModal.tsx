import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Modal from "@/components/ui/Modal";
import {
  DiscordIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  HideIcon,
  LoginIcon,
  ShowIcon,
  TwitchIcon,
} from "@/icon";
import { setUser } from "@/redux/slice/userSlice";
import { loginUser } from "@/services/authService";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  
  const handleSocialAuth = (e: any) => {
    e.preventDefault();
    // Handle social auth logic here
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await loginUser({ email, password });
    if (response.success) {
      const user = response.data.data;
      dispatch(setUser({ user }));
    } else {
      alert(response.error);
    }
    setIsLoading(false);
  };

  return (
    <Modal id="auth_modal" title="Login" triggerIcon={<LoginIcon />}>
      <form className="space-y-4  ">
        <h2 className=" text-xl text-center font-bold">Login</h2>
        {/* Email Input */}
        <InputText
          value={email}
          setValue={setEmail}
          placeholder="Email"
          icon={<EmailIcon />}
        />
        {/* Password Input */}
        <InputPassword
          value={password}
          setValue={setPassword}
          placeholder="Password"
          showPasswordIcon={<ShowIcon />} // Replace with <ShowIcon />
          hidePasswordIcon={<HideIcon />} // Replace with <HideIcon />
          links={{
            createAccount: "/register",
            forgotPassword: "/reset-password",
          }}
        />

        {/* Login Button */}
        <div className="modal-action">
          <button onClick={handleLogin} className="btn btn-primary w-full">
            {" "}
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>

        <div className=" divider">
          {" "}
          <p className="text-sm text-primary-content">OR </p>{" "}
        </div>

        <div className="grid grid-cols-2 gap-1">
          <button onClick={handleSocialAuth} className="btn">
            <GoogleIcon /> <p className="text-xs">Continue With Google</p>
          </button>
          <button onClick={handleSocialAuth} className="btn">
            <FacebookIcon /> <p className="text-xs">Continue With Facebook</p>
          </button>
          <button onClick={handleSocialAuth} className="btn">
            <DiscordIcon /> <p className="text-xs">Continue With Discord</p>
          </button>
          <button onClick={handleSocialAuth} className="btn">
            <TwitchIcon /> <p className="text-xs">Continue With Twitch</p>
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AuthModal;
