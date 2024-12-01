import {
  DarkModeIcon,
  FeedBackIcon,
  LeaderBoardIcon,
  LoginIcon,
  MemberIcon,
  MenuIcon,
  NotificationIcon,
  SearchIcon,
} from "@/icon";
import BrandLogo from "../../../public/images/Logo.png";
import Image from "next/image";
const Header = () => {
  const gradientText = {
    background: "radial-gradient(circle at center, #E805D1, #0B0C7E)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="navbar bg-base-100 p-5 md:p-8 lg:px-20 lg:py-10 shadow-lg">
      <div className="flex-1">
        <a className="hover:cursor-pointer">
          <div className="flex-col justify-center items-center">
            <Image
              className="m-auto md:w-32 w-20"
              alt="Brand Logo"
              src={BrandLogo}
            />
            <h3
              className="md:text-sm text-xs font-extrabold text-center gradient-text"
              style={gradientText}
            >
              We Play Together
            </h3>
          </div>
        </a>
      </div>
      {/* For Large Screens */}
      <div className="hidden lg:flex flex-none gap-3">
        <div className="tooltip" data-tip="Search">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <SearchIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Dark Mode">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <DarkModeIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Members">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <MemberIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Feed Back">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <FeedBackIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Leader Board">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <LeaderBoardIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Notification">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <NotificationIcon />
          </button>
        </div>
        <div className="tooltip" data-tip="Login or Resiter">
          <button className="btn btn-ghost btn-circle shadow-lg">
            <LoginIcon />
          </button>
        </div>
      </div>
      {/* For Small Screens */}
      <div className="flex lg:hidden flex-none gap-3">
        <div className="tooltip" data-tip="Menu">
            <button className="btn btn-ghost btn-circle shadow-lg">
              <MenuIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
