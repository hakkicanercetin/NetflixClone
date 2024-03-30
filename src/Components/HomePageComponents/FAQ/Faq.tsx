import { useState } from "react";

type AccordionContent = {
  title: string;
  text: string;
};

const accordionText = [
  {
    title:"What is Netflix?",
    text:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    title:"How much does Netflix cost?",
    text:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 229.99 TL to 119.99 TL a month. No extra costs, no contracts."
  },
  {
    title:"Where can I watch?",
    text:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
  },
  {
    title:"How do I cancel?",
    text:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    title:"What can I watch on Netflix?",
    text:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    title:"Is Netflix good for kids?",
    text:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
  },
]

function AccordionItem({content}:{content:AccordionContent}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false); 
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };
  return (
    <>
    <li className="list-none m-0 p-0 indent-0 mb-2">
      <h3
        className={`bg-[rgb(65,65,65)] m-0 flex mb-[0.625rem] relative text-white ${
          isOpen ? "open" : ""
        }`}
      >
        <button
          onClick={handleToggle}
          className="p-6 bg-none rounded-none box-content m-0 no-underline w-full border-0 cursor-pointer flex justify-between items-center text-left"
        >
          {content.title}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={rotate ? '-rotate-45' : ''}
            data-name="Plus"
            aria-labelledby=":ra:"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </h3>
      </li>
      {isOpen ? (
        <div className="bg-[rgb(45,45,45)] text-white px-6 overflow-hidden py-6 max-h-[75rem] block">
          <span className="whitespace-pre-line">
          {content.text}
          </span>
        </div>
      ):
      <div className="bg-[rgb(45,45,45)] text-white px-6 overflow-hidden py-6 max-h-[75rem] hidden">
          <span className="whitespace-pre-line">
          {content.text}
          </span>
        </div>
      }
    </>
  );
}
function Accordion({ children }: { children: JSX.Element[] }) {
  return <ul className="list-none m-0 p-0 text-[1.5rem] font-normal w-full">{children}</ul>;
}
const FAQ = () => {
  return (
    <>
      <div className="w-full mb-[3.5rem] min-[960px]:mb-[4rem]">
        <div className="w-full h-auto">
          <div className="inline-flex flex-wrap h-[inherit] p-0 -mt-4 ml-0 w-full flex-col min-[960px]:pr-[20%]">
            <div className="inline-flex flex-wrap p-0 mt-4 ml-0 w-fit">
              <h2 className="m-0 p-0 text-white font-medium text-[1.125rem] min-[960px]:text-[1.25rem]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="inline-flex flex-wrap p-0 mt-4 ml-0 w-full">
                <Accordion>
                  {accordionText.map((content,index)=>(
                    <AccordionItem key={index} content={content}></AccordionItem>
                  ))}
                </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
