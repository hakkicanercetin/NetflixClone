interface CardProps {
      title: string;
      text: string;
      icon: React.ElementType;
  }

export const Card = ({elem}:{elem:CardProps}) => {
    const Icon = elem.icon
  return (
    <div className="inline-flex flex-wrap w-[inherit] p-0 mt-2 ml-3 min-[960px]:mt-3 min-[1280px]:ml-4 flex-grow-0 flex-shrink-0 basis-[calc(100%-0.75rem)] min-[960px]:basis-[calc(50%-0.75rem)] min-[1280px]:basis-[calc(25%-1rem)]">
      <div className="flex flex-grow flex-shrink basis-0 backdrop-blur-[30%] relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#192247] to-[#210e17]">
        <div className="w-full h-full relative">
          <div className="w-full h-auto">
            <div className="inline-flex flex-wrap h-[inherit] w-full flex-col  mt-[-0.75rem] min-[1280px]:mt-[-1rem] pt-6 px-4 pb-20 min-[600px]:pb-24 min-[1280px]:pb-32">
              <div className="inline-flex flex-wrap p-0 w-full ml-0 mt-3">
                <h3 className="text-white p-0 m-0 text-[1.125rem] font-medium min-[1280px]:text-[1.5rem]">
                {elem.title}
                </h3>
              </div>
              <div className="inline-flex flex-wrap p-0 w-full ml-0 mt-3">
                <p className="text-[1rem] m-0 p-0 font-normal text-[rgba(255,255,255,0.7)]">
                {elem.text}
                </p>
              </div>
              <div className="mt-3 absolute bottom-1 right-1 scale-90 min-[960px]:scale-100 min-[960px]:bottom-2 min-[960px]:right-2 min-[1280px]:bottom-3 min-[1280px]:right-3">
                <Icon></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
