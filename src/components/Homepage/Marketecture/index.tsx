import React from "react";
import styles from "./styles.module.css";

export default function Marketecture(): JSX.Element {
  const Svg = require("@site/static/img/topaz-marketecture.svg").default
  return (
    <section className={styles.marketecture}>
      <div className={styles.marketectureTitle}>
        Architecture
      </div>
      <div className={styles.marketectureSubtitle}>
        Deployed in your cloud, connected to your data sources.
      </div>
      <Svg className={styles.marketectureSvg} role="img" />
    </section>
  );
}
