import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: require("@site/static/img/icons/features/empty.svg").default,
    description: <h1>Purpose-built fine-grained access control </h1>,
  },
  {
    Svg: require("@site/static/img/icons/features/fine-grained.svg").default,
    description: (
      <>
        Fine-grained acces control is a critical part of every production-ready
        application. Topaz is a purpose-built fine-grained access control
        service that's easy to integrate with.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/rbac-to-rebac.svg").default,
    description: (
      <>
        Start with a fine grained authorization model that grows with your
        application: use RBAC, ABAC and ReBAC interchangeably.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/combine-pac-and-pad.svg")
      .default,
    description: (
      <>
        Combine “Policy-as-Code” and “Policy-as-Data” to enjoy the best of both
        worlds.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/separation-of-duties.svg")
      .default,
    description: (
      <>
        Maintain a clear separation of duties - Keep your policy separate from
        your code.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/pac-as-oci.svg").default,
    description: (
      <>
        Define authorization policy-as-code, and build it into an immutable,
        signed OCI image.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/features/brings-data-to-authorizer.svg")
      .default,
    description: (
      <>
        Topaz makes it easy to bring user and resource data close to your
        authorizer.
      </>
    ),
  },
];

const Feature = ({ Svg, description }: FeatureItem) => {
  return (
    <div className={styles.featureListItem}>
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
      <div className={styles.featuresContainer}>
        <div className={styles.featuresIconContainer}>
          <div className={styles.featuresIcon}></div>
        </div>
        <div className={styles.featuresListContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
