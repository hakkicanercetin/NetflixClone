import { useLoaderData, useNavigate } from "react-router-dom"
import Banner from "../Components/BrowsePageComponents/Banner/Banner"
import List from "../Components/BrowsePageComponents/List/List"
import { useMovieStore } from "../store/MovieStore"
import { Movie } from "../types/Movie"
import { useEffect } from "react"

export async function getMovies(){
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1`)
  const adventureResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=12&page=2`)
  const horrorResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=27&page=2`)
  const jsonResponse = await response.json()
  const adventureJson = await adventureResponse.json()
  const horrorJson = await horrorResponse.json()
  const movies:Movie[] = jsonResponse.results;
  const adventureMovies:Movie[] = adventureJson.results;
  const horrorMovies:Movie[] = horrorJson.results;
  return { data: movies,adventureMovies,horrorMovies };
}

const Browse = () => {
  const { data,adventureMovies,horrorMovies } = useLoaderData() as Awaited<ReturnType<typeof getMovies>>
  const { setMovies,setAdventureMovies,setHorrorMovies } = useMovieStore();
  const navigate = useNavigate()
  useEffect(()=>{
    const userDataString = sessionStorage.getItem("userData");
    const user = userDataString ? JSON.parse(userDataString) : null;
    if(!user)
    {
      navigate("/login")
    }
  })
  useEffect(() => {
      setMovies(data)
      setAdventureMovies(adventureMovies)
      setHorrorMovies(horrorMovies)
  },[]);
  return (
    <>
    <div className="bg-black z-0 relative text-white min-h-full p-0 m-0">
    <Banner></Banner>
    <List></List>
    </div>
    </>
  )
}

export default Browse