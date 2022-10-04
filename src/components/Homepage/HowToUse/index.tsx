import React from "react";
import styles from "./styles.module.css";

type HowToItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const HowToList: HowToItem[] = [
  {
    Svg: require("@site/static/img/icons/howto/1.svg").default,
    description: <>Define your domain model.</>,
  },
  {
    Svg: require("@site/static/img/icons/howto/2.svg").default,
    description: <>Load your data.</>,
  },
  {
    Svg: require("@site/static/img/icons/howto/3.svg").default,
    description: <>Write your policy.</>,
  },
  {
    Svg: require("@site/static/img/icons/howto/4.svg").default,
    description: <>Deploy the authorizer.</>,
  },
  {
    Svg: require("@site/static/img/icons/howto/5.svg").default,
    description: (
      <>
        Use the Topaz SDKs in your application to make authorization decisions.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/howto/6.svg").default,
    description: <>Keep the policy and data up to date.</>,
  },
];

const HowTo = ({ Svg, description }: HowToItem) => {
  return (
    <div className={styles.howtoListItem}>
      <div className="text--center">
        <Svg className={styles.howtoListItemIcon} role="img" />
      </div>
      <div className={styles.howtoListItemText}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageHowTo(): JSX.Element {
  return (
    <section className={styles.howto}>
      <div className={styles.howtoTitle}>How to use Topaz</div>
      <div className={styles.howtoListContainer}>
        {HowToList.map((props, idx) => (
          <HowTo key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
