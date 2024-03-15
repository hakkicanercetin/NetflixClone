const Header = () => {
  return (
    <>
      <div className="absolute w-full h-full overflow-hidden">
        <div className="w-[calc(100%+4rem)] my-0 -mx-[2rem] absolute h-full">
          <div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[2] bg-gradient-to-b from-black to-transparent"></div>
            <img
              className="w-full h-full object-cover object-center absolute"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c06f9417-bf37-4b6f-a997-0e9ce16c2b29/TR-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col z-[3] w-full">
        <div className="min-[960px]:min-h-[37rem] min-[1280px]:min-h-[80vh] min-h-[31rem] pt-0 pr-4 pb-4 pl-4 mx-auto -mt-8 mb-0 flex flex-col w-full max-w-[120rem] justify-center">
          <div className="min-[1280px]:max-w-[36.75rem] min-[960px]:max-w-[31.75rem] min-[600px]:max-w-[27rem] max-w-full flex flex-col w-full mx-auto text-center self-center">
            <div className="relative">
              <div className="w-full">
                <div>
                  <h1 className="mb-2 min-[960px]:text-[4rem] min-[600px]:text-[3rem] text-[2rem] font-bold m-0 p-0 text-white leading-[125%]">
                    Unlimited movies, TV shows, and more
                  </h1>
                  <p className="min-[1280px]:mb-[2rem] min-[1280px]:text-[1.25rem] min-[960px]:mb-[1.5rem] text-[1rem] font-normal mb-[1rem] m-0 p-0 text-white">
                    Starts at USD 6.99. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg self-center">
              <div className="m-0 p-0 max-w-[61.5rem] text-center">
                <form className="flex flex-col">
                  <h3 className="m-0 text-white text-center text-[.98rem] leading-[1.5] font-normal">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="flex w-full relative text-left pt-4 m-0 items-start flex-row max-w-none max-[600px]:flex-col">
                    <div className="w-full relative inline-flex flex-wrap align-text-top flex-grow-[1] flex-shrink-[1] basis-auto">
                      <label className="text-[1rem] font-normal leading-[1.5] text-[rgba(255,255,255,0.7)] absolute z-[1] whitespace-nowrap overflow-hidden overflow-ellipsis pointer-events-none left-4 right-4 top-4 block">
                        Email address
                      </label>
                      <div className="text-[1rem] font-normal text-white min-w-[12.5rem] p-0 w-full inline-flex items-center gap-[2px] leading-[100%] relative text-left z-0">
                        <input
                          minLength={5}
                          maxLength={50}
                          className="leading[1.5] text-[1rem] w-full px-4 pt-6 pb-2 min-h-[1rem] min-w-[1rem] bg-transparent"
                          type="email"
                        />
                        <div className="bg-[rgba(22,22,22,0.7)] border-[rgba(128,128,128,0.7)] border-[1px] border-solid rounded text-transparent flex absolute items-center justify-center top-0 left-0 right-0 bottom-0 z-[-1]"></div>
                      </div>
                    </div>
                    <button className="min-[600px]:mt-0 min-[600px]:ml-2 min-[600px]:w-[300px] min-[1280px]:text-[1.5rem] mt-4 text-[18px] no-underline inline-flex items-center justify-center leading-[1] border-0 rounded cursor-pointer relative self-center font-medium min-h-[3.25rem] py-3 px-6 text-white bg-[rgb(229,9,20)] after:absolute after:inset-0">
                      Get Started
                      <div className="inline-block h-[1.5rem] border-box">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-mirrorinrtl="true"
                          className="w-[1.5rem] mr-0 ml-2"
                          data-name="ChevronRight"
                          aria-labelledby=":r3:"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
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
