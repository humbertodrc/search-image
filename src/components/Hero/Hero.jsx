import React from 'react'
import { useContext } from 'react'
import { useEffect, useState } from 'react'

// import loader from '../../assets/images/loader.png'
import loader_gif from '../../assets/images/heroLoader.gif'
import ImagesContext from '../../context/ImagesContext'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

import styles from './Hero.module.css'

const Hero = () => {

  const {loading,image} = useContext(ImagesContext)

  return (
    <div className={styles.Hero}>
      <Navbar/>
        {
            loading? <img src={loader_gif} alt="" className={styles.hero_image}/> :  <img loading='lazy' src={image.urls?.regular} alt="" className={styles.hero_image} />
        }
        <Search/>
    </div>
  )
}

export default Hero