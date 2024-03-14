import { create } from 'zustand'
import { Movie } from '../types/Movie'

export type MovieStoreType = {
    clickedMovies:Movie
    setClickedMovies:(clickedMovies:Movie)=>void
  }
  export const useClickedMovieStore = create<MovieStoreType>()(
    (set) => ({
        clickedMovies: {
            // Initialize with appropriate values for Movie
            adult: false,
            backdrop_path: "",
            belongs_to_collection: {}, // Initialize with appropriate values for BelongsToCollection
            budget: 0,
            genres: [], // Initialize with appropriate values for Genre[]
            homepage: "",
            id: 0,
            imdb_id: "",
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            production_companies: [], // Initialize with appropriate values for ProductionCompany[]
            production_countries: [], // Initialize with appropriate values for ProductionCountry[]
            release_date: "",
            revenue: 0,
            runtime: 0,
            spoken_languages: [], // Initialize with appropriate values for SpokenLanguage[]
            status: "",
            tagline: "",
            title: "",
            video: false,
            vote_average: 0,
            vote_count: 0,
          },
        setClickedMovies: (clickedMovies) => set({clickedMovies}),
      }),)
export default useClickedMovieStore