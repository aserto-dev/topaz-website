import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Language.module.css'

const Language = ({ title, link, icon, github, docs }) => {
  return (
    <a href={link}>
      <div className={styles.languageCard}>
        <img className={styles.languageImage} src={`/img/icons/${icon}`} alt={title} />
        <p className={styles.languageTitle}>{title}</p>
      </div>
    </a>
  )
}

export default Language
