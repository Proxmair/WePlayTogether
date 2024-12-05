import { DarkModeIcon, LightModeIcon } from "@/icon";
import React, { useState } from "react";

const ThemeChanger = () => {
  const [isDark, setisDark] = useState(false)
  return (
    <div className="tooltip" data-tip={`${isDark?'Dark Mode':'Light Mode'}`}>
      <label className="swap swap-rotate btn btn-ghost btn-circle shadow-lg">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="theme-controller "
          value="customdark"
          onClick={()=>setisDark((prev)=>!prev)}
        />

        {/* sun icon */}
        <LightModeIcon />
        {/* moon icon */}
        <DarkModeIcon />
      </label>
    </div>
  );
};

export default ThemeChanger;