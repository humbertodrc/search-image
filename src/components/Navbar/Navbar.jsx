import React, { useContext, useEffect, useState } from 'react'
import {onAuthStateChanged} from 'firebase/auth'


import styles from './Navbar.module.css'

import avatar from '../../assets/images/avatar.jpg'
import LoginContext from '../../context/LoginContext'

const Navbar = () => {

 const {user, photo} = useContext(LoginContext)



  return (
    <div className={styles.navbar_container}>
        <ul className={styles.navbar}>
            <li className={styles.navbar_item}>{user}</li>
            <div className={styles.Profile_image_contain}>
              <img src={photo} width={34} alt="" className={styles.profile_image}/>
            </div>
        </ul>
    </div>
  )
}

export default Navbar