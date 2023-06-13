import React from 'react'
import styles from './Header.module.css'
const Header: React.FC = () => {
  return (
      <div>
          <h2 className={styles.header}>Once A Day Nasa Update{}🛸</h2>
      </div>
  )
}

export default Header