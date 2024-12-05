import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface InputTextInterface {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type?: string;
  icon: ReactNode | null;
}
const InputText = ({
  value,
  setValue,
  placeholder = "Enter text",
  type = "text",
  icon = null,
}: InputTextInterface) => {
  return (
    <div className="form-control">
      <label
        style={{
          outline: "none",
          boxShadow: "none",
        }}
        className="input input-bordered flex items-center gap-2"
      >
        {icon}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          className="grow"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default InputText;
