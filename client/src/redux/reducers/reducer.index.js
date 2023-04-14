import { GET_MOST_POPLARS_TV, GET_MOST_POPULARS } from "../actionsType/actions.index"

const initialState = {
  mostPopulars: [],
  mostPopularsTv: []
}


export function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_MOST_POPULARS:
      return{
        ...state,
        mostPopulars: action.payload
      }

      case GET_MOST_POPLARS_TV:
        return{
          ...state,
          mostPopularsTv: action.payload
        }
    default:
      return state
  }
}
