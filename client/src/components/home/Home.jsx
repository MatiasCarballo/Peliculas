import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMostPopulars, getMostTvPopulars } from '../../redux/actions/actions.index'

const Home = () => {

  const dispatch = useDispatch()
  const populars = useSelector(state => state.mostPopulars)
  const popularsTv = useSelector(state => state.mostPopularsTv)
  // console.log(popularsTv);

  useEffect(()=>{
    dispatch(getMostPopulars(1))
    dispatch(getMostTvPopulars(1))
  },[dispatch, getMostPopulars,getMostTvPopulars])

  return (
    <div>
      {
        populars?.map(el =>(
          <div key={el.id}>
            <h4>{el.title}</h4>
            <img src={el.image} alt={el.image}/>
          </div>
        ))
      }

      <h1>TV SHOWS</h1>
      {
        popularsTv?.map(el=> (
          <div key={el.id}>
            <h4>{el.name}</h4>
            <img src={el.image} alt={el.image}/>
          </div>
        ))
      }


    </div>
  )
}

export default Home