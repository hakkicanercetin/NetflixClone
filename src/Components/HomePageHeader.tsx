import { Link } from "react-router-dom"
import Logo from "./Logo"
import "./style.css"
const HomePageHeader = () => {
  return (
    <div className="flex items-center justify-center overflow-x-hidden flex-col">
        <div className="relative w-full">
            <div className="w-full relative z-[1]">
                <div className="absolute top-[50%] left-[50%] h-full overflow-hidden w-full max-w-full z-[-1] translate-x-2/4 translate-y-2/4"></div>
                <div className="py-0 min-[600px]:px-[2rem] px-[1.5rem] w-full max-w-[120rem] h-[7.5rem] mx-auto mt-0 mb-[-7.5rem] relative z-[2] bg-gradient-to-b from-black to-transparent border-box">
                    <div className="h-[5rem] border-box w-full ">
                        <div className="header h-full inline-flex flex-wrap mt-0 -ml-4 w-full flex-row items-center justify-between p-0">
                            <div className="w-auto inline-flex flex-wrap p-0 items-center ml-4">
                                <span className="border-box">
                                    <Logo></Logo>
                                </span>
                            </div>
                            <div className="w-auto inline-flex flex-wrap p-0 justify-end">
                                <div className="w-full border-box h-auto">
                                    <div className="inline-flex flex-wrap mt-0 -ml-3 w-[calc(100%)+12px] flex-row items-center justify-end p-[3px]">
                                        <div className="w-auto inline-flex flex-wrap p-0 mt-0 ml-3">
                                            <span className="m-0">
                                                <div className="relative inline-flex flex-wrap align-text-top ">
                                                    <div className="w-auto text-[1rem] font-normal text-white p-0 items-center inline-flex gap-0.5 leading-[100%] relative text-left z-0">
                                                        <div className="absolute pointer-events-none w-4 h-4 left-3 right-auto">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block" data-name="Languages" aria-labelledby=":R135dajalalal9:" aria-hidden="true"><path fill="red" fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"></path></svg>
                                                        </div>
                                                        <select className="w-auto px-9 py-[6px] leading-5 min-h-4 bg-transparent border-0 bg-clip-padding m-0">
                                                            <option className="">English</option>
                                                            <option>Turkish</option>
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="w-auto inline-flex flex-wrap p-0 mt-0 ml-3">
                                            <Link to={"/login"} className="m-0 no-underline items-center inline-flex justify-center leading-[1] border-0 rounded cursor-pointer relative align-text-top w-auto text-[14px] font-medium min-h-[2rem] py-1 px-4 bg-[rgb(229,9,20)] text-white after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0">Sign In</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-[1] w-full max-w-[120rem] mb-4 mx-auto">
                    <div className="overflow-hidden flex relative my-0 mx-auto pt-[100px] bg-cover bg-center items-end justify-center z-[3]">
                        <div className="absolute w-full h-full overflow-hidden">
                            <div className="w-[calc(100%+4rem)] my-0 -mx-[2rem] absolute h-full">
                                <div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 z-[2] bg-gradient-to-b from-black to-transparent"></div>
                                    <img className="w-full h-full object-cover object-center absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c06f9417-bf37-4b6f-a997-0e9ce16c2b29/TR-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col z-[3] w-full">
                            <div className="min-[960px]:min-h-[37rem] min-[1280px]:min-h-[80vh] min-h-[31rem] pt-0 pr-4 pb-4 pl-4 mx-auto -mt-8 mb-0 flex flex-col w-full max-w-[120rem] justify-center">
                                <div className="min-[1280px]:max-w-[36.75rem] min-[960px]:max-w-[31.75rem] min-[600px]:max-w-[27rem] max-w-full flex flex-col w-full mx-auto text-center self-center">
                                    <div className="relative">
                                        <div className="w-full">
                                            <div>
                                                <h1 className="mb-2 min-[960px]:text-[4rem] min-[600px]:text-[3rem] text-[2rem] font-bold m-0 p-0 text-white leading-[125%]">Unlimited movies, TV shows, and more</h1>
                                                <p className="min-[960px]:mb-[1.5rem] text-[1rem] font-normal mb-[1.5rem] m-0 p-0 text-white">Starts at 119.99 TL. Cancel anytime.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-lg self-center">
                                        <div className="m-0 p-0 max-w-[61.5rem] text-center">
                                            <form className="flex flex-col">
                                                    <h3 className="m-0 text-white text-center text-[.98rem] leading-[1.5] font-normal">Ready to watch? Enter your email to create or restart your membership.</h3>
                                                    <div className="flex w-full relative text-left pt-4 m-0 items-start flex-row max-w-none max-[600px]:flex-col">
                                                        <div className="w-full relative inline-flex flex-wrap align-text-top flex-grow-[1] flex-shrink-[1] basis-auto">
                                                            <label className="text-[1rem] font-normal leading-[1.5] text-[rgba(255,255,255,0.7)] absolute z-[1] whitespace-nowrap overflow-hidden overflow-ellipsis pointer-events-none left-4 right-4 top-4 block">Email address</label>
                                                            <div className="text-[1rem] font-normal text-white min-w-[12.5rem] p-0 w-full inline-flex items-center gap-[2px] leading-[100%] relative text-left z-0">
                                                                <input minLength={5} maxLength={50} className="leading[1.5] text-[1rem] w-full px-4 pt-6 pb-2 min-h-[1rem] min-w-[1rem] bg-transparent" type="email" />
                                                                <div className="bg-[rgba(22,22,22,0.7)] border-[rgba(128,128,128,0.7)] border-[1px] border-solid rounded text-transparent flex absolute items-center justify-center top-0 left-0 right-0 bottom-0 z-[-1]"></div>
                                                            </div>
                                                        </div>
                                                        <button className="min-[600px]:mt-0 min-[600px]:ml-2 min-[600px]:w-[300px] min-[1280px]:text-[1.5rem] mt-4 text-[18px] no-underline inline-flex items-center justify-center leading-[1] border-0 rounded cursor-pointer relative self-center font-medium min-h-[3.25rem] py-3 px-6 text-white bg-[rgb(229,9,20)] after:absolute after:inset-0">Get Started
                                                    <div className="inline-block h-[1.5rem] border-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="w-[1.5rem] mr-0 ml-2" data-name="ChevronRight" aria-labelledby=":r3:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="white"></path></svg></div>
                                                    </button>
                                                    </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-hidden h-[6.25rem] relative z-[1]">
                            <div>
                                <div className="min-[1280px]:w-[130%] min-[1280px]:left-[-15%] min-[960px]:w-[150%] min-[960px]:left-[-25%] min-[600px]:w-[180%] min-[600px]:left-[-40%] w-[200%] left-[-50%] absolute h-full top-0 m-auto flex items-center border-4 border-solid border-transparent border-arad before:absolute before:inset-0 before:z-[-20] before:-mt-1">

                                </div>
                            </div>
                            <div className="min-[1280px]:mt-[1.375rem] min-[960px]:mt-[1.25rem] min-[600px]:mt-[1.875rem] mt-[1.375em] relative text-center z-[2]"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* asd */}
    </div>
  )
}

export default HomePageHeader