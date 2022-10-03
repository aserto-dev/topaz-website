import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type BenefitItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const BenefitList: BenefitItem[] = [
  {
    Svg: require("@site/static/img/icons/benefits/sidecar.svg").default,
    description: (
      <>
        The Authorizer lives close to your application. Deploy the authorizer
        either as a sidecar or a microservice and maintain low latency and high
        availability.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/benefits/localized.svg").default,
    description: (
      <>
        Bring user and resource data to the authorizer using easy-to-use APIs
        and a counterpart CLI. This ensures data used by the authorizer is also
        localized - which is critical for decisions to be made as quickly as
        possible.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/benefits/combine.svg").default,
    description: (
      <>
        Combine “Policy-as-Code” and “Policy-as-Data” to build fine grained
        authorization models.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/benefits/decision-logs.svg").default,
    description: (
      <>
        Consume decision logs produced by your edge authorizer and process them
        with your favorite analytics platform.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/icons/benefits/library-and-service.svg")
      .default,
    description: (
      <>
        Brings the best of library and a service - ensure highly performant
        authorization while keeping your authorization logic separate from your
        code.
      </>
    ),
  },
];

const Benefit = ({ Svg, description }: BenefitItem) => {
  return (
    <div className={styles.benefitListItem}>
      <div className={styles.benefitListItemIconContainer}>
        <Svg className={styles.benefitListItemIcon} role="img" />
      </div>
      <div className={styles.benefitListItemText}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageBenefits(): JSX.Element {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsTitle}>Benefits</div>
      <div className={styles.benefitsListContainer}>
        {BenefitList.map((props, idx) => (
          <Benefit key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
