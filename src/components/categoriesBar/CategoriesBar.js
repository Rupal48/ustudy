import React, { useState } from 'react'
import "./_categoriesBar.scss"
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/actions/videos.action'


const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Algorithm Art ',
  'Coding',
  'Poor Coder'
]

const CategoriesBar = () => {

  // This state variable will keep track of the active element
  const [activeElement,setActiveElement] = useState('All')


  const dispatch = useDispatch()


  const handleClick = (value) => {
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }

  return (
    <div className='categoriesBar'>

      {
        keywords.map((value) => 
          <span
            onClick={() => handleClick(value)}
            className={activeElement === value ? 'active' : ''}>
            {value}
          </span>)
      }

    </div>
  )
}

export default CategoriesBar
