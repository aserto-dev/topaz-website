import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type LanguageItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  title: JSX.Element;
  link: string;
};

const LanguageList: LanguageItem[] = [
  {
    Svg: require("@site/static/img/icons/languages/nodejs-logo.svg").default,
    title: <>Node.js</>,
    link: "/docs/software-development-kits/javascript/express",
  },
  {
    Svg: require("@site/static/img/icons/languages/go-logo.svg").default,
    title: <>Go</>,
    link: "/docs/software-development-kits/go/install",
  },
  {
    Svg: require("@site/static/img/icons/languages/python-logo.svg").default,
    title: <>Python</>,
    link: "/docs/software-development-kits/python/api-client",
  },
  {
    Svg: require("@site/static/img/icons/languages/java-logo.svg").default,
    title: <>Java</>,
    link: "/docs/software-development-kits/java/authorizer",
  },
  {
    Svg: require("@site/static/img/icons/languages/dotnet-logo.svg").default,
    title: <>ASP.NET</>,
    link: "/docs/software-development-kits/dotnet/dotnetcore",
  },
  {
    Svg: require("@site/static/img/icons/languages/ruby-logo.svg").default,
    title: <>Ruby</>,
    link: "/docs/software-development-kits/ruby/middleware",
  },
];

const Language = ({ Svg, title, link }: LanguageItem) => {
  return (
    <Link to={link} className={styles.languageLink}>

    <div className={styles.languageListItem}>
        <div className="text--center">
          {Svg ? (
            <Svg className={styles.languageListItemIcon} role="img" />
          ) : (
            ""
          )}
        </div>
      <div className={styles.languageListItemText}>
        <div>{title}</div>
      </div>
    </div>
    </Link>

  );
};

export default function HomepageLanguages(): JSX.Element {
  return (
    <section className={styles.languages}>
      <div className={styles.languagesTitle}>
        Supported languages and frameworks
      </div>
      <div className={styles.languagesSubtitle}>
        Get started quickly with docs and resources for popular languages.
      </div>
      <div className={styles.languagesContainer}>
        <div className={styles.languagesListContainer}>
          {LanguageList.map((props, idx) => (
            <Language key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
