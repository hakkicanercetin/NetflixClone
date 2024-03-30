const SelectBox = () => {
  return (
    <div className="w-auto text-[1rem] font-normal text-white p-0 items-center inline-flex gap-0.5 leading-[100%] relative text-left z-0 bg-[rgba(22,22,22,0.7)] rounded border divide-solid border-[rgba(128,128,128,0.7)]">
                        <div className="absolute pointer-events-none w-4 h-4 left-3 right-auto">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full block"
                            data-name="Languages"
                            aria-labelledby=":R135dajalalal9:"
                            aria-hidden="true"
                          >
                            <path
                              fill="white"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                            ></path>
                          </svg>
                        </div>
                        <select className="w-auto px-9 py-[6px] leading-5 min-h-4 bg-transparent border-0 bg-clip-padding m-0 text-white">
                          <option className="text-[initial] bg-[initial]">English</option>
                          <option className="text-[initial] bg-[initial]">Turkish</option>
                        </select>
                      </div>
  )
}

export default SelectBox