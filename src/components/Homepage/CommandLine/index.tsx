import React from "react";
import styles from "./styles.module.css";
import Highlight from "@site/src/components/common/Highlight";

type CommandLineItem = {
  title: string;
  content: string;
};

const CommandLineList: CommandLineItem[] = [
  {
    title: "Create a new policy from a template",
    content: `policy template apply <template>`,
  },
  {
    title: "Build and sign a policy",
    content: `policy build <path>`,
  },
  {
    title: "Push a policy to the registry",
    content: `policy push`,
  },
  {
    title: "Create a domain model",
    content: `tbd`,
  },
  {
    title: "Push data to the directory",
    content: `tbd`,
  },
];

const CommandLineExample = ({ title, content }: CommandLineItem) => {
  return (
    <div className={styles.cliExample}>
      <div className={styles.cliExampleTitle}>{title}</div>
      <div className={styles.cliExampleContent}>
        <Highlight language="bash">{content}</Highlight>
      </div>
    </div>
  );
};

export default function HomepagePolicies(): JSX.Element {
  return (
    <section className={styles.cliExamples}>
      <div className={styles.cliExamplesTitle}>How to use Topaz</div>
      <div className={styles.cliExamplesContainer}>
        {CommandLineList.map((props, idx) => (
          <CommandLineExample key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
