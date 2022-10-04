import React from "react";
import styles from "./styles.module.css";
import Highlight from "@site/src/components/common/Highlight";

type PolicyItem = {
  title: string;
  content: string;
};

const PolicyList: PolicyItem[] = [
  {
    title: "RBAC Policy example",
    content: `
allowed {
  ds.check_relation({
    "sub_id": input.user.id,
    "obj_id": input.resource.team.id,
    "type": "team",
    "relation": "admin"
  })
}
    `,
  },
  {
    title: "ABAC Policy example",
    content: `
allowed {
  input.user.department == "Sales"
}
    `,
  },
  {
    title: "ReBAC Policy example",
    content: `
allowed {
  input.user.department == "Sales"
}
    `,
  },
];

const PolicyExample = ({ title, content }: PolicyItem) => {
  return (
    <div className={styles.policyExample}>
      <div className={styles.policyExampleTitle}>{title}</div>
      <div className={styles.policyExampleContent}>
        <Highlight language="rego">{content}</Highlight>
      </div>
    </div>
  );
};

export default function HomepagePolicies(): JSX.Element {
  return (
    <section className={styles.policyExamples}>
      <div className={styles.policyExamplesTitle}>How to use Topaz</div>
      <div className={styles.policyExamplesContainer}>
        {PolicyList.map((props, idx) => (
          <PolicyExample key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
