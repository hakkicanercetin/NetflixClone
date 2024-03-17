const GetStarted = () => {
  return (
    <div className="w-full mb-6">
        <div className="w-full rounded-lg">
          <div className="max-w-[61.5rem] p-0">
            <form className="flex flex-col">
              <h3 className="m-0 text-white text-[1rem] text-left leading-[1.5] font-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="flex w-full relative text-left pt-4 m-0 mx-auto items-start flex-row max-w-none max-[600px]:flex-col">
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
                <button className="min-[600px]:mt-0 min-[600px]:ml-2 min-[600px]:w-[270px] min-[1280px]:w-[300px] min-[1280px]:text-[1.5rem] mt-4 text-[18px] no-underline inline-flex items-center justify-center leading-[1] border-0 rounded cursor-pointer relative self-start font-medium min-h-[3.25rem] py-3 px-6 text-white bg-[rgb(229,9,20)] after:absolute after:inset-0">
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
                        fillRule="evenodd"
                        clipRule="evenodd"
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
  )
}

export default GetStarted