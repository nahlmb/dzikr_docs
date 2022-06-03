import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main style={{}}>
        {/* <HomepageFeatures /> */}
        <div className='' style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"80vh",alignItems:"center", marginLeft:"16px", marginRight:"16px"}}>
          <img src='/img/logo.svg'/>
          <h1 style={{textAlign : "center", marginTop:"42px"}}>Islamic Feature Tools Package for Flutter</h1>
          <p style={{textAlign : "center", maxWidth:"800px"}}>Dzikr is a collection of islamic features tools for Flutter app development, Dzikr collect many dependecy and APIS, organize and process it to be ready used feature in your app.</p>
          <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Dzikr Introduction - 5min ⏱️
          </Link>
        </div>
        </div>
      </main>
    </Layout>
  );
}

