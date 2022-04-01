import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Planet.module.css'

const Planet = ({ title, url, date, description, media}) => {
    
  return (
    <div>
        <li className={styles.planet}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
        <div>
        <ReactPlayer url={url} loop={true} width='510px' height='230px'/>
        <img src={url}/>
        </div>
        </li>
    </div>

    
  )
}

export default Planet