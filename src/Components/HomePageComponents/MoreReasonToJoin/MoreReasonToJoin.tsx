import { Card } from "./Card";
import ConfettiIcon from "./Icons/ConfettiIcon";
import DownloadIcon from "./Icons/DownloadIcon";
import PcIcon from "./Icons/PcIcon";
import ProfileIcon from "./Icons/ProfileIcon";

const obj =[
    {
        title:"Enjoy on your TV",
        text:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        icon:PcIcon
    },
    {
        title:"Download your shows to watch offline",
        text:"Save your favorites easily and always have something to watch.",
        icon:DownloadIcon
    },
    {
        title:"Watch everywhere",
        text:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        icon:ConfettiIcon
    },
    {
        title:"Create profiles for kids",
        text:"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        icon:ProfileIcon
    },
]

const MoreReasonToJoin = () => {
  return (
    <div className="w-full mb-[3.5rem] min-[960px]:mb-[4rem]">
      <div className="w-full h-auto">
        <div className="inline-flex flex-wrap w-full ml-0 flex-col p-0 mt-[0.75rem] min-[960px]:mt-[1rem]">
          <div className="inline-flex flex-wrap w-full p-0 ml-0 mt-[-0.75rem] min-[960px]:mt-[-1rem]">
            <h2 className="text-white p-0 m-0 text-[1.125rem] font-medium min-[960px]:text-[1.5rem]">
              More Reasons to Join
            </h2>
          </div>
          <div className="w-full h-auto mt-[0.75rem] min-[960px]:mt-[1rem]">
            <div className="inline-flex flex-row flex-wrap p-0 h-[inherit] -mt-2 -ml-3 w-[calc(100%+0.75rem)] min-[1280px]:w-[calc(100%+1rem)] min-[960px]:-mt-3 min-[1280px]:-ml-4">
                {obj.map((elem,index)=>(
                    <Card key={index} elem={elem}></Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreReasonToJoin;
