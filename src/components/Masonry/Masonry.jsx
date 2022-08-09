import React from 'react'
import { useEffect, useState } from 'react'

/**
 * 
 * @returns Import styles
 */

import styles from './Masonry.module.css'

/**
 * 
 * @returns Components
 */

import Image from './Image/Image'
import loaderGif from '../../assets/images/loader.gif'

import { useContext } from 'react'
import ImagesContext from '../../context/ImagesContext'

const Masonry = () => {

 const {images, loading, setModal} = useContext(ImagesContext)
 
//  const handleClick = (value) => {
//     setModal(value)
//  }


  return (
    <div className={styles.masonry}>
        {/* {
            loading? <h1>Loading</h1> : images.map((i)=>{
                return <Image img={i} key={i.id}/>
            })
        } */}

      {loading? <img src={loaderGif}/> : images.map((img) => (
          <Image key={img.id} img={img} />
        ))}
    </div>
  )
}

export default Masonry