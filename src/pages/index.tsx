import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Logo from "@site/static/img/favicon.svg";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Logo className={clsx(styles.logo, "")} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={"button button--lg button--outline button--primary"}
            to="/docs"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Homepage"}
      description="Bootstrap your discord bot with blazingly fast speeds."
    >
      <HomepageHeader />
      <main>
        <figure className={styles.adder}>
          <div>
            <h2>Get started in seconds</h2>
            <p>
              Create-discord-bot lets you create a Discord bot faster than you
              can read this page. It enables you to{" "}
              <strong>
                focus on development and not tooling or scaffolding.
              </strong>
              <br />
              <br />
              To get started run the following command:
            </p>
            <CodeBlock language="bash">
              npm init @flzyy/discord-bot@latest
            </CodeBlock>
          </div>
          <img
            alt="Gif of installation"
            className={styles.gifFeature}
            src={
              "https://raw.githubusercontent.com/FLzyy/create-discord-bot/8b8ca6ba9b5e7dfa682fd2fbb9847814bc15cf71/assets/main.gif"
            }
          />
        </figure>
      </main>
    </Layout>
  );
}
