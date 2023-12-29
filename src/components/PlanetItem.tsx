import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './PlanetItem.module.css'

const PlanetItem: React.FC<{title: string, url: string, date: string, description: string, media: string }> = ({ title, url, date, description}) => {
    
  return (
    <div>
        <li className={styles.planet}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
        <div>
        <ReactPlayer url={url} loop={false} width='75%' height='230px'/>
        {!url.includes('youtube') &&
        <img src={url}/>
        }
        </div>
        </li>
    </div>

    
  )
}

export default PlanetItem