import { Link } from "react-router-dom";
import GetStarted from "../../CommonComponents/GetStarted";
import SelectBox from "../../CommonComponents/SelectBox";

const Footer = () => {
  
const footerItems = [
  {
    text:"FAQ",
    link:"https://help.netflix.com/support/412"
  },
  {
    text:"Help Center",
    link:"https://help.netflix.com"
  },
  {
    text:"Account",
    link:"/youraccount"
  },
  {
    text:"Media Center",
    link:"https://media.netflix.com/"
  },
  {
    text:"Investor Relations",
    link:"http://ir.netflix.com/"
  },
  {
    text:"Jobs",
    link:"https://jobs.netflix.com/jobs"
  },
  {
    text:"Redeem Gift Cards",
    link:"/redeem"
  },
  {
    text:"Ways to Watch",
    link:"/browse"
  },
  {
    text:"Terms of Use",
    link:"https://help.netflix.com/legal/termsofuse"
  },
  {
    text:"Privacy",
    link:"https://help.netflix.com/legal/privacy"
  },
  {
    text:"Cookie Preferences",
    link:"#"
  },
  {
    text:"Corporate Information",
    link:"https://help.netflix.com/legal/corpinfo"
  },
  {
    text:"Contact Us",
    link:"https://help.netflix.com/tr/contactus"
  },
  {
    text:"Speed Test",
    link:"https://fast.com/tr/"
  },
  {
    text:"Logical Notices",
    link:"https://help.netflix.com/legal/notices"
  },
  {
    text:"Only on Netflix",
    link:"https://www.netflix.com/tr-en/browse/genre/839338"
  },
]
  return (
    <>
      <GetStarted></GetStarted>
      <div className="w-full">
        <div className="w-full h-auto text-[rgba(255,255,255,0.7)] pt-0 pr-6 pb-24 pl-6 min-[600px]:pl-10 min-[1280px]:pl-6">
          <footer className="inline-flex flex-wrap h-[inherit] -mt-9 ml-0 w-full flex-col p-0">
            <div className="inline-flex flex-wrap w-fit p-[3px] mt-9 ml-0">
              <p className="m-0 p-0 text-[1rem] font-normal text-[rgba(255,255,255,0.7)]">
                <Link to={"/"} className="text-[rgba(255,255,255,0.7)] decoration-[rgba(255,255,255,0.7)]">Questions? Contact us.</Link>
              </p>
            </div>
            <div className="inline-flex flex-wrap w-fit p-[3px] mt-9 ml-0">
              <div className="w-full h-auto p-1 leading-[1.5] text-[0.875rem] font-normal">
                <ul className="inline-flex flex-wrap w-full h-[inherit] ml-0 -mt-3 flex-row items-start justify-start p-0">
                  {footerItems.map((item,index)=>(
                    <li key={index} className="mt-3 ml-0 inline-flex flex-wrap w-[inherit] p-0 flex-grow-0 flex-shrink-0 basis-full min-[600px]:basis-1/2 min-[960px]:basis-1/3 min-[1280px]:basis-1/4">
                    <Link to={item.link} target="_blank" className="text-[rgba(255,255,255,0.7)] decoration-[rgba(255,255,255,0.7)] box-content border-0 cursor-pointer inline m-0 p-0 underline">{item.text}</Link>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="inline-flex flex-wrap p-[3px] mt-9 ml-0 w-fit">
              <div className="relative inline-flex flex-wrap align-text-top">
                <SelectBox></SelectBox>
              </div>
            </div>
            <div className="inline-flex flex-wrap p-0 w-fit mt-9 ml-0">
              <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.7)] m-0 p-0">Netflix Türkiye</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
