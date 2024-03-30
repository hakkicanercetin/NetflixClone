import GetStarted from "../../CommonComponents/GetStarted";

const Header = () => {
  return (
    <>
      <div className="absolute w-full h-full overflow-hidden">
        <div className="w-[calc(100%+4rem)] my-0 -mx-[2rem] min-[1280px]:w-[calc(100%+6rem)] min-[1280px]:-mx-[3rem] absolute h-full">
          <div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[2] homepage-background-gradient"></div>
            <img
              className="w-full h-full object-cover object-center absolute"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c06f9417-bf37-4b6f-a997-0e9ce16c2b29/TR-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col z-[3] w-full">
        <div className="min-[960px]:min-h-[37rem] min-[1280px]:min-h-[80vh] min-h-[31rem] pt-0 pr-6 pb-8 pl-6 mx-auto -mt-8 mb-0 flex flex-col w-full max-w-[120rem] justify-center min-[600px]:px-8 min-[600px]:pb-11 min-[960px]:px-20 min-[960px]:pb-12 min-[1280px]:px-[9.25rem] min-[1280px]:pb-16">
          <div className="min-[1280px]:max-w-[36.75rem] min-[960px]:max-w-[31.75rem] min-[600px]:max-w-[27rem] max-w-full flex flex-col w-full text-center mx-auto self-center">
            <div className="relative">
              <div className="w-full">
                <div>
                  <h1 className="mb-2 min-[960px]:text-[4rem] min-[600px]:text-[3rem] text-[2rem] font-bold m-0 p-0 text-white leading-[125%]">
                    Unlimited movies, TV shows, and more
                  </h1>
                  <p className="min-[1280px]:mb-[2rem] min-[1280px]:text-[1.25rem] min-[960px]:mb-[1.5rem] text-[1rem] font-normal mb-[1rem] m-0 p-0 text-white">
                    Starts at 119.99 TL. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg">
              <div className="m-0 p-0 max-w-[61.5rem]">
                <GetStarted></GetStarted>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden h-[6.25rem] relative z-[1]">
          <div>
            <div className="min-[1280px]:w-[130%] min-[1280px]:left-[-15%] min-[960px]:w-[150%] min-[960px]:left-[-25%] min-[600px]:w-[180%] min-[600px]:left-[-40%] w-[200%] left-[-50%] absolute h-full top-0 m-auto flex items-center border-4 border-solid border-transparent border-arad before:absolute before:inset-0 before:z-[-20] before:-mt-1"></div>
          </div>
          <div className="min-[1280px]:mt-[1.375rem] min-[960px]:mt-[1.25rem] min-[600px]:mt-[1.875rem] mt-[1.375em] relative text-center z-[2]"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
