import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/hotsnatch-logo.jpg'

import styles from './hero.module.css'

function Hero () {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2>Supporter Scarves coming soon</h2>
      <Link to='/signup/'>Reserve yours here</Link>
    </div>
  )
}

export default Hero
