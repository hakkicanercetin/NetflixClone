import Popcorn from "./Icons/Popcorn";

const Plan = () => {
  return (
    <div className="w-full mb-[3.5rem] min-[960px]:mb-[4rem]">
      <div>
        <div className="w-full h-auto relative">
          <div className="inline-flex flex-wrap w-full flex-row justify-center p-0">
            <div className="absolute left-0 min-[600px]:-top-[1.125rem] z-[2] -top-[3.9375rem] scale-75">
              <Popcorn></Popcorn>
            </div>
            <div className="relative rounded-2xl flex overflow-hidden flex-grow flex-shrink basis-[0%] z-[1] bg-gradient2 min-[600px]:ml-[6.25rem]">
              <div className="w-full h-auto">
                <div className="inline-flex flex-wrap h-auto flex-col items-start -mt-4 -ml-4 w-[calc(100%+1rem)] justify-between py-8 px-4 min-[600px]:flex-row min-[600px]:items-center min-[600px]:py-3 min-[600px]:px-6 min-[960px]:py-[0.88rem] min-[960px]:px-[1.5em] min-[1280px]:py-4 min-[1280px]:px-8">
                  <div className="w-fit min-[600px]:w-auto inline-flex flex-wrap p-0 mt-4 ml-4">
                    <div>
                      <h3 className="text-white m-0 p-0 text-[1.25rem] font-medium">
                        The Netflix you love for just USD 6.99.
                      </h3>
                      <p className="text-white m-0 p-0 text-[1.rem] font-normal">
                        Get our most affordable, ad-supported plan.
                      </p>
                    </div>
                  </div>
                  <div className="w-fit min-[600px]:w-auto inline-flex flex-wrap p-0 mt-4 ml-4">
                    <button className="text-white bg-[rgba(128,128,128,0.4)] py-[0.375rem] px-4 min-h-[2.5rem] text-[1rem] font-medium w-full align-text-top relative cursor-pointer rounded border-0 leading-[1] tracking-normal inline-flex items-center justify-center no-underline m-0">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
