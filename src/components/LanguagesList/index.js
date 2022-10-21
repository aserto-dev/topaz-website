import React from 'react'
import language from '../../languages'
import Language from './Language'
import styles from './LanguageList.module.css';

const LanguagesList = () => {
  return (
    <div>
      {/* <p className={styles.languagePageTitle}>Get up and running fast with Aserto SDKs.</p> */}

      <div className={styles.languagesDiv}>
        {language.map((s) =>
          <Language
            key={s.title}
            title={s.title}
            icon={s.icon}
            link={s.link}
          />
        )}
      </div>
    </div>
  )
}

export default LanguagesList
