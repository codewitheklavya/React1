import React from 'react'
import styles from './button.module.css'

const button = () => {
  return (
    <div className={styles.btn}>button
    <button className={styles.clickBtn}>click</button></div>
  )
}

export default button