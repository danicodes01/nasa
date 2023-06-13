import React from 'react'
import Planet from './Planet'
import styles from './SpaceList.module.css'

const SpaceList = ({planets}) => {
    const year = new Date().getFullYear()

    return (
        <ul className={styles['space-list']}>
          {planets.map(p => (
              <Planet 
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