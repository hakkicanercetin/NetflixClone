/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../CommonComponents/Logo";
import SelectBox from "../../CommonComponents/SelectBox";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState<any>(null);
  const navigate = useNavigate()
  useEffect(()=>{
    const userDataString = sessionStorage.getItem("userData");
    const user = userDataString ? JSON.parse(userDataString) : null;
    console.log(user)
    setIsLogin(user)
  },[])
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLogin(false)
    navigate("/")
  };
  const handleButton = () => {
    navigate("/login")
  };
  return (
    <div className="py-0 min-[600px]:px-[2rem] min-[960px]:px-[5rem] min-[1280px]:px-[9.25rem] px-[1.5rem] w-full max-w-[120rem] h-[7.5rem] mx-auto mt-0 mb-[-7.5rem] relative z-[2] bg-gradient-to-b from-black to-transparent border-box">
      <div className="h-[5rem] min-[1280px]:h-[5.5rem] border-box w-full text-white">
        <div className="h-[inherit] inline-flex flex-wrap mt-0 -ml-4 w-[calc(100%+1rem)] flex-row items-center justify-between p-0">
          <div className="w-auto inline-flex flex-wrap p-0 items-center ml-4 max-[370px]:ml-[0.6rem] mt-0 flex-grow-0 flex-shrink basis-auto min-[600px]:flex-shrink-0 min-[600px]:basis-[calc(50%-1rem)] min-[960px]:basis-[33.33%-1rem]">
            <Link to={"/"} reloadDocument className="border-box">
              <Logo></Logo>
            </Link>
          </div>
          <div className="w-auto inline-flex flex-wrap p-0 justify-end">
            <div className="w-full border-box h-auto">
              <div className="inline-flex flex-wrap mt-0 -ml-3 w-[calc(100%)+12px] flex-row items-center justify-end p-[3px]">
                <div className="w-auto inline-flex flex-wrap p-0 mt-0 ml-3">
                  <span className="m-0">
                    <div className="relative inline-flex flex-wrap align-text-top ">
                      <SelectBox></SelectBox>
                    </div>
                  </span>
                </div>
                <div className="w-auto inline-flex flex-wrap p-0 mt-0 ml-3">
                {isLogin && isLogin.currentUser ? (
                  <button
                    className="m-0 no-underline items-center inline-flex justify-center leading-[1] border-0 rounded cursor-pointer relative align-text-top w-auto text-[14px] font-medium min-h-[2rem] py-1 px-4 bg-[rgb(229,9,20)] text-white after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button onClick={handleButton} className="m-0 no-underline items-center inline-flex justify-center leading-[1] border-0 rounded cursor-pointer relative align-text-top w-auto text-[14px] font-medium min-h-[2rem] py-1 px-4 bg-[rgb(229,9,20)] text-white after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0">
                    Sign In
                  </button>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
