import { PasswordIcon } from "@/icon";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface InputPasswordInterface {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  showPasswordIcon: ReactNode;
  hidePasswordIcon: ReactNode;
  links?: { createAccount?: string; forgotPassword?: string };
}

const InputPassword = ({
  value,
  setValue,
  placeholder = "Enter password",
  showPasswordIcon,
  hidePasswordIcon,
  links,
}: InputPasswordInterface) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className="form-control">
      <label
        className="input input-bordered flex items-center gap-2"
        style={{
          outline: "none",

          boxShadow: "none",
        }}
      >
        <PasswordIcon />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          type={isShowPassword ? "text" : "password"}
          className="grow"
        />
        <div
          className="tooltip flex justify-center items-center tooltip-left"
          data-tip={isShowPassword ? "Hide Password" : "Show Password"}
        >
          <button
            type="button"
            className="btn-sm btn btn-ghost btn-circle"
            onClick={togglePasswordVisibility}
          >
            {isShowPassword ? showPasswordIcon : hidePasswordIcon}
          </button>
        </div>
      </label>
      <div className="flex justify-between px-4 text-xs">
        {links?.createAccount && (
          <a href={links.createAccount}>Create a new Account?</a>
        )}
        {links?.forgotPassword && (
          <a href={links.forgotPassword}>Forgot Password?</a>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
