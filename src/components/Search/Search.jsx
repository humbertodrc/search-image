import React from 'react'
import { useContext } from 'react'
import ImagesContext from '../../context/ImagesContext'


import styles from './Search.module.css'

const Search = () => {

    const {setValueInput} = useContext(ImagesContext)
// const {handleChange} = useFunctions()

//   const [valueInput, setValueInput] =useState('')

//   const handleChange = (e)=>{
//     setValueInput(e.target.value)
//   }
//   console.log(valueInput)

//   const {handleChange} = useHandle()

 const handleChange = (e) => {
    setValueInput(e.target.value)
 }


  return (
    <div className={styles.search_container}>
        <form className={styles.search_form}>
            <input type="text" placeholder='Search here' className={styles.search_input} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Search