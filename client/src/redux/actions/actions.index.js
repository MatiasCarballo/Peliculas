import { GET_MOST_POPLARS_TV, GET_MOST_POPULARS } from "../actionsType/actions.index"

export function getMostPopulars(page){
  return (dispatch)=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}
    `)
        .then(response => response.json())
        .then(datos => {
         let maps = datos.results.map(el => {
            return{
              adult: el.adult,
              backdrop_path: el.backdrop_path,
              id: el.id,
              originalLanguaje: el.original_language,
              originalTitle: el.original_title,
              sinopsis: el.overview,
              poster_path: el.poster_path,
              fechaLanzamiento: el.release_date,
              title:el.title,
              video: el.video,
              genre_ids: el.genre_ids,
              vote_average: el.vote_average,
              vote_count: el.vote_count,
              image: `https://image.tmdb.org/t/p/w200${el.poster_path}`
            }
          })
          dispatch({
            type: GET_MOST_POPULARS,
            payload: maps
          })
    })
    .catch(err => console.error(err))

  }
}

export function getMostTvPopulars(page){
  return(dispatch)=>{
    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(datos1 => {
      let result = datos1.results?.map(el => {
        return{
              adult: el.adult,
              backdrop_path: el.backdrop_path,
              fechaLanzamiento: el.first_air_date,
              genre_ids: el.genre_ids,
              id: el.id,
              media_type: el.media_type,
              name: el.name,
              origin_country: el.origin_country,
              originalLanguaje: el.original_language,
              originalName: el.original_name,
              sinopsis: el.overview,
              popularity: el.popularity,
              image: `https://image.tmdb.org/t/p/w200${el.poster_path}`,
              vote_average: el.vote_average,
              vote_count: el.vote_count,
        }
      })
      dispatch({
        type: GET_MOST_POPLARS_TV,
        payload: result
      })
    })
  }
}


