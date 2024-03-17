import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.75)] mt-0 text-[#757575] text-[1em] min-w-[190px] pb-[20px] relative w-full'>
        <div className='text-[#737373] smm:my-0 mx-auto py-[30px] px-0 w-[90%] smm:max-w-[1000px] '>
          <p className='mb-[30px] p-0'><Link to={"/"}>Questions? Contact us.</Link></p>
          <ul className='box-border text-[13px] max-w-[1000px] m-0 p-0'>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>FAQ</span>
              </a>
            </li>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>Help Center</span>
              </a>
            </li>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>Terms of Use</span>
              </a>
            </li>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>Privacy</span>
              </a>
            </li>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>Cookie Preferences</span>
              </a>
            </li>
            <li className='list-none ml-0 box-border inline-block mb-4 min-w-[100px] pr-[22px] align-top w-[25%] max-[740px]:w-[%33] max-[500px]:w-[50%]'>
              <a href="">
                <span>Corporate Information</span>
              </a>
            </li>
          </ul>
          <div className='mt-5'>
            <div className='border-none w-auto inline-block relative smm:max-w-[600px] m-0 p-0'>
              <label className='border-0 block h-[1px] m-[-1px] overflow-hidden absolute whitespace-nowrap w-[1px]'>
                <span className='text-[#333]'>Select Language</span>
              </label>
              <div className="relative inline-block w-full  before:content-['🌐'] before:text-[#999] before:top-[9px] before:text-[1rem] before:absolute before:left-[15px]">
                <select className="pr-[26px] indent-0 leading-[1.7] pl-[50px] border border-solid border-[#333] text-[13px] p-3 w-full rounded-sm bg-none bg-black " id="">
                  <option>English</option>
                  <option>Turkish</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>  
  )
}

export default Footer