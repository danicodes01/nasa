import React from 'react'
import PlanetItem from './PlanetItem'
import styles from './Planets.module.css'
import Planet from '../models/planet'

const SpaceList: React.FC<{items: Planet[]}> = ({items}) => {
    const year = new Date().getFullYear()
    return (
        <ul className={styles['space-list']}>
          {items.map(p => (
              <PlanetItem 
              key={p.id}
              title={p.title}
              date={`${p.date.slice(5, )}-${year}`}
              description={p.description}
              media={p.media}
              url={p.url}
              />
          ))}
      </ul>
  ) 
}

export default SpaceList