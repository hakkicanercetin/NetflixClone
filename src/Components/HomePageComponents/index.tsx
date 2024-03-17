import MoreReasonToJoin from "./MoreReasonToJoin/MoreReasonToJoin"
import Plan from "./Plan/Plan"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import FAQ from "./FAQ/Faq"
const HomePageComp = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden flex-col bg-black">
        <div className="relative w-full">
            <div className="w-full relative z-[1]">
                <div className="absolute top-[50%] left-[50%] h-full overflow-hidden w-full max-w-full z-[-1] -translate-x-2/4 -translate-y-2/4">
                    <div className="absolute z-[1] top-0 w-[165rem] left-1/2 bottom-[100px] homepage-header-gradient -translate-x-2/4"></div>
                    <div className="absolute z-[2] top-0 w-[120.5rem] left-[calc(50%-0.25rem)] bottom-[100px] homepage-header-gradient2 homepage-header-translate"></div>
                </div>
                <Navbar></Navbar>
                <div className="relative z-[1] w-full max-w-[120rem] mb-4 mx-auto">
                    <div className="overflow-hidden flex relative my-0 mx-auto pt-[100px] bg-cover bg-center items-end justify-center z-[3]">
                        <Header></Header>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-0 min-[1280px]:px-[9.25rem] min-[960px]:px-[5rem] min-[600px]:px-[2rem] min-[600px]:mt-[-2rem] px-6 -mt-12 w-full max-w-[120rem] z-[2] my-0 mx-auto ">
            <div className="flex flex-col items-center justify-center">
                <Plan></Plan>
                <MoreReasonToJoin></MoreReasonToJoin>
                <FAQ></FAQ>
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}

export default HomePageComp