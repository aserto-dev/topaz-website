import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import HomepageLanguages from "@site/src/components/Homepage/Languages";

import styles from "./index.module.css";
import Highlight from "@site/src/components/common/Highlight";
import HomepagePolicies from "../components/Homepage/Policies";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx("hero hero--primary", styles.header)}>
        <div className={styles.topGradient}></div>
        <div className={styles.container}>
          <div className={styles.text}>
            <div className={styles.topTextContainer}>
              <h1 className={styles.title}>Cloud-native authorization</h1>
              <h1 className={styles.subtitle}>
                Combining the best of{" "}
                <span className={styles.highlight}>OPA</span> and{" "}
                <span className={styles.highlight}>Zanzibar</span>
              </h1>
              <h4 className={styles.topBody}>
                Topaz is an open source authorization service providing fine
                grained, real-time, policy based access control for applications
                and APIs
              </h4>
              <div className={styles.buttonContainer}>
                <Link
                  className={clsx(
                    "button button--primary button--lg",
                    styles.primaryButton
                  )}
                  to="/docs/intro"
                >
                  Get started with Topaz
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.mainLogo}></div>
        </div>
        <div className={styles.codeSnippet}>
          <Highlight language="bash">
            brew install topaz-cli && topaz run
          </Highlight>
        </div>
      </header>
    </>
  );
}

function HomepageBottomSection() {
  return (
    <>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLogoAndButton}>
          <div className={styles.bottomLogo}></div>
          <div className={styles.buttonContainer}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.primaryButton
              )}
              to="/docs/intro"
            >
              Get started with Topaz
            </Link>
          </div>
        </div>
        <div className={styles.bottomGradient}></div>
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An open-source, self-hosted, fine-grained access control service for Cloud Native applications"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageLanguages />
        <HomepagePolicies />
      </main>
      <HomepageBottomSection />
    </Layout>
  );
}
