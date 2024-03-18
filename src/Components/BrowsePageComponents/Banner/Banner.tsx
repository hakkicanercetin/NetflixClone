import useClickedMovieStore from "../../../store/ClickedMovieStore";
import { useMovieStore } from "../../../store/MovieStore";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Movie } from "../../../types/Movie";
import { Trailer } from "../../../types/Trailer";
import MYAPI_KEY from "./APIKEY";
const getTrailer = async (movie:Movie) => {
  const apiKey = MYAPI_KEY.TMDB_API_KEY;
  const response = await fetch("https://api.themoviedb.org/3/movie/"+movie.id+"/videos?language=en-US&api_key="+apiKey)
  const data:Trailer = await response.json()
  const trailer = data.results.find((video) => video.type === "Trailer");
  return trailer ? trailer.key : null;
}

const Banner = () => {
  const { movies } = useMovieStore();
  const { clickedMovies } = useClickedMovieStore();
  const [trailerKey,setTrailerKey] = useState<string>()
  const movie = clickedMovies.backdrop_path !== "" ? clickedMovies : (movies.length > 0 ? movies[0] : null);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    if(movie){
    ( async () => {
      const key = await getTrailer(movie)
      if(key)
      setTrailerKey(key)
    })()
  }
  },[movie])
    return(
      <>
      
      {
        movie &&

      <div
      className="bg-cover text-white relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "100%",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="mx-[30px] items-start flex flex-col justify-between h-full">
        <h1 className="min-[600px]:text-[3rem] text-[2rem] font-extrabold pb-[0.3rem]">{movie.title}</h1>
      <button onClick={() => setOpen(true)} className="min-[600px]:text-[3rem] text-[2rem] font-extrabold pb-[0.3rem] self-end text-decoration-none text-white">Fragmanı İzle</button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        width={1000}
        closable={false}
      >
        <iframe style={{marginRight:"1%",marginLeft:"1%"}} width="98%" height="600" src={"https://www.youtube.com/embed/"+trailerKey+"?si"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Modal>
      </div>
    </div>
      }
      </>
    )
    }
  
  export default Banner;