import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useClickedMovieStore from '../../../store/ClickedMovieStore';
import { Movie } from '../../../types/Movie';

const MySwiper = ({movies}:{movies:Movie[]}) => {
  const { setClickedMovies } = useClickedMovieStore();
  const handleClick = (movie:Movie) => {
    setClickedMovies(movie);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
        1369: {
            slidesPerView: 10,
          },
      }}
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index} className='posters flex py-5 overflow-hidden'>
          <img
            onClick={() => handleClick(movie)}
            className="mr-[10px] max-h-[500px] object-contain opacity-80 transition-all w-full cursor-pointer hover:relative hover:scale-125"
            src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + movie.poster_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MySwiper;
