import { SearchIcon } from "@/icon";
import ToolTipButton from "./ToolTipButton";
import { useState } from "react";

const SearchBox = () => {
  const [isSearchOpen, setisSearchOpen] = useState<boolean>(false);
  const handleSearchOpen = () => {
    setisSearchOpen((prev) => !prev);
  };
  return (
    <div
      className={`flex h-12 shadow-lg ${
        isSearchOpen ? "w-80" : "w-12"
      } transition-all rounded-full`}
    >
      <ToolTipButton
        tooltipText="Search"
        icon={SearchIcon}
        onClick={handleSearchOpen}
      />
      <input
        className={`${isSearchOpen ? "visible" : "hidden"} input pl-2 w-64`}
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
