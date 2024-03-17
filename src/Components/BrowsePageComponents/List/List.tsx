import { useMovieStore } from "../../../store/MovieStore";
import Footer from "../../CommonComponents/Footer";
import MySwiper from "../MySwiper/MySwiper";

const List = () => {
  const { movies,adventureMovies,horrorMovies } = useMovieStore();
  return(
    <>
    <div className="list">
      <div className="row">
        <h2 className="text-white title m-[30px] mb-0 text-[2rem]">Trends</h2>
        <div className="col">
            <MySwiper movies={movies}></MySwiper>
        </div>
        <h2 className="text-white title m-[30px] mb-0 text-[2rem]">Adventure</h2>
        <div className="col">
            <MySwiper movies={adventureMovies}></MySwiper>
        </div>
        <h2 className="text-white title m-[30px] mb-0 text-[2rem]">Horror</h2>
        <div className="col">
            <MySwiper movies={horrorMovies}></MySwiper>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default List;