import React from 'react'
import logo from '../images/hotsnatch-logo.jpg'

import styles from './hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Hero