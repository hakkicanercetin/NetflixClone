import { Link } from "react-router-dom";
import Logo from "../../CommonComponents/Logo";

const Header = () => {
  return (
    <div className="py-0 min-[600px]:px-[2rem] min-[960px]:px-[5rem] min-[1280px]:px-[9.25rem] px-[1.5rem] w-full max-w-[120rem] h-[7.5rem] mx-auto mt-0 mb-[-7.5rem] relative z-[2] bg-gradient-to-b from-black to-transparent border-box">
      <div className="h-[5rem] min-[1280px]:h-[5.5rem] border-box w-full ">
        <div className="h-[inherit] inline-flex flex-wrap mt-0 -ml-4 w-[calc(100%+1rem)] flex-row items-center justify-between p-0">
          <div className="w-auto inline-flex flex-wrap p-0 items-center ml-4 mt-0 flex-grow-0 flex-shrink basis-auto min-[600px]:flex-shrink-0 min-[600px]:basis-[calc(50%-1rem)] min-[960px]:basis-[33.33%-1rem]">
            <Link to={"/"} className="border-box">
              <Logo></Logo>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
