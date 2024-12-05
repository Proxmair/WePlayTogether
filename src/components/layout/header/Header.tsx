"use client"

import {
  LoginIcon,
  MemberIcon,
  MenuIcon,
  NotificationIcon,
} from "@/icon";
import BrandLogo from "../../../public/images/Logo.png";
import Image from "next/image";
import ToolTipButton from '../../ui/ToolTipButton'
import SearchBox from "@/components/ui/SearchBox";
import ThemeChanger from './ThemeChanger'
import FeedBackButton from './FeedBackButton'
import LeaderBoardButton from './LeaderBoardButton'
import { useRouter } from "next/navigation";

import AuthModal from "./authModal/AuthModal";
import ProfileDrawer from "./profileDrawer/ProfileDrawer"
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "@/services/authService";
import { setUser } from "@/redux/slice/userSlice";
import { useEffect } from "react";

const Header = () => {

  const isLoggedIn = useSelector((state: any)=>state.user.isLoggedIn)
  const dispatch = useDispatch();

  const handleLoadUser = async() => {
    if(!isLoggedIn){
      const response: any = await loadUser();
      if (response.success) {
        const user = response.data.data;
        if(user) dispatch(setUser({ user }));
      }
    }
  }
  

  useEffect(() => {
    handleLoadUser();
  }, [])
  
  const gradientText = {
    background: "radial-gradient(circle at center, #E805D1, #8008AA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const navigate = useRouter();

  const navigateToHome = () => {
    navigate.push("/");
  };

  
  return (
    <div className="navbar bg-base-100 p-5 md:p-8 lg:px-20 lg:py-10 shadow-lg">
      <div className="flex-1">
        <a className="hover:cursor-pointer ">
          <div onClick={navigateToHome} className="flex-col justify-center items-center">
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
        <SearchBox />
        <ThemeChanger />
        {isLoggedIn && <ToolTipButton className="shadow-lg" tooltipText="Members" icon={MemberIcon} onClick={()=>{}}/>}
        <FeedBackButton />
        <LeaderBoardButton />
        {isLoggedIn && <ToolTipButton className="shadow-lg" tooltipText="Notification" icon={NotificationIcon} onClick={()=>{}}/>}
        {isLoggedIn?<ProfileDrawer />:<AuthModal/>}
      </div>
      {/* For Small Screens */}
      <div className="flex lg:hidden flex-none gap-2">
        <SearchBox />
        <ToolTipButton className="shadow-lg" tooltipText="Menu" icon={MenuIcon} onClick={()=>{}}/>
      </div>
    </div>
  );
};

export default Header;
