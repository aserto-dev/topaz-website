import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  title: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: require("@site/static/img/icons/features/fine-grained.svg").default,
    title: <>Fine Grained</>,
    description: (
      <>
        Desing a fine grained authorization model that grows with your
        application. Evolve from a multi-tenant RBAC model to ABAC, ReBAC or a
        combination of models.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/policy-based.svg").default,
    title: <>Policy Based</>,
    description: (
      <>
        Extract authorization policy from application code and into its own
        artifact, implement a “policy-as-code” workflow for your organization,
        where you. Build authorization policies into immutable, signed OCI
        images for a secure software supply chain.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/real-time.svg").default,
    title: <>Real-time</>,
    description: (
      <>
        Deploy Topaz right next to your application for lightning-fast
        authorization decisions with local data. Topaz stores your users,
        groups, objects, and relationships in an embedded database, so the data
        used is local.
      </>
    ),
  },
];

const Feature = ({ Svg, title, description }: FeatureItem) => {
  return (
    <div className={styles.featureListItem}>
      <div className={styles.featureListItemTitle}>{title}</div>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureListItemIcon} role="img" /> : ""}
      </div>
      <div className={styles.featureListItemText}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.featuresTitle}>Cloud-native authorization</div>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresListContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
