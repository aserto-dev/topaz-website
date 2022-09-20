import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "The best of a library and a service",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Brings the best of library and a service - ensure highly performant
        authorization while keeping your authorization logic separate from your
        code.
      </>
    ),
  },
  {
    title: "Lives close to the app",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The Authorize lives close to your application - bring user and resource
        data to the authorizer for low latency and high availability. Deploy the
        authorizer either as a sidecar or a microservice.
      </>
    ),
  },
  {
    title: `ReBAC, ABAC and RBAC combined`,
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Combine “Policy-as-Code” and “Policy-as-Data” to build fine-grained
        authorization models. Start with either ReBAC, ABAC or RBAC and then mix
        and match them as needed.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
