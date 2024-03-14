import { create } from 'zustand'
import { Movie } from '../types/Movie'

export type MovieStoreType = {
    movies:Movie[]
    setMovies:(movies:Movie[])=>void
    adventureMovies:Movie[]
    setAdventureMovies:(adventureMovies:Movie[])=>void
    horrorMovies:Movie[]
    setHorrorMovies:(adventureMovies:Movie[])=>void
  }
  export const useMovieStore = create<MovieStoreType>()(
    (set) => ({
        movies:[],
        adventureMovies:[],
        horrorMovies:[],
        setMovies: (movies) => set({movies}),
        setAdventureMovies: (adventureMovies) => set({adventureMovies}),
        setHorrorMovies: (horrorMovies) => set({horrorMovies}),
      }),)
export default MovieStoreType