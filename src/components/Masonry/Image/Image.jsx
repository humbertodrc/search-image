import React, { useContext, useEffect, useState } from 'react'
import ImagesContext from '../../../context/ImagesContext'

/**
 * 
 * @returns Import styles
 */

import styles from './Image.module.css'
import imgLoading from '../../../assets/images/loader.png'

/**
 *  
 * @returns HOOKS
 */



const Image = (img) => {
  
//   const {image} = img

  // console.log(img.img.urls.small, 'la img');

 const {loading, setLoading, modal, setModal, imgModal, setImgModal, id, setId} = useContext(ImagesContext)

//  const [id, setId] = useState('')
//  const [imgModal, setImgModal] = useState('')

//  const [modal, setModal] = useState(false)

 const handleClick =(value)=>{
  // setId(img.img.id)
  // console.log(img.img.urls.small, 'click')

  // setImgModal(img.img.urls.small)
  setModal(value)
  setId(img.img.id)
  console.log(img.img.id, 'la ide');

  if(imgModal){

    getImageModal(img.img.id)
  }

 }

//  const id = `ZMd5Yogcq_Q`
// console.log(id);

const getImageModal = async (id) => {
  setLoading(true);
  const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY`)
  const data = await res.json()
  
  // const dataFilter = data.urls.small? setImgModal(data): data.filter((photo)=> photo.id === id)

  // const dataFilter = data.urls.small? [data] : data.filter((photo)=> photo.id === id)

  const dataFilter = [data]
  const newData = dataFilter.filter((photo)=>photo.id === id)
  setLoading(false)
  setImgModal(newData)
}
// console.log(imgModal, 'imgModal')

//  useEffect(()=>{
//   getImageModal()
//  },[])

  return (
    <>
    {/* Card que tiene cada foto */}
      <div className={styles.Image} onClick={()=>handleClick(true)} id={img.img.id}>
          {
              loading ? <img src={imgLoading}/> : <img src={img.img.urls?.small} alt="None"/>
          }
      </div>

          {/*Modal que tiene el color negro con opacidad  */}
      <div className={modal? styles.modal_contain : styles.modal_containOff } onClick={()=>handleClick(false)}></div>

      {/* Card que contiene lla foto seleccionada */}
      <div className={modal ? styles.modal : styles.disable}>
          <button className={styles.close} onClick={()=>handleClick(false)}>X</button>
          {
            loading? <img src={imgLoading} width={54}/> : <img src={imgModal[0]?.urls.small} alt="" className={styles.imgModal} loading="lazy"/>
          }
      </div>
    </>
  )
}

export default Image