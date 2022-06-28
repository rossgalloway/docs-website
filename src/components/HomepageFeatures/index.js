import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'All Docs in One Place',
    Svg: require('@site/static/img/file-cabinet-emoji.svg').default,
    description: (
      <>
        Everything that YAM token holders need to make informed governance decisions
        and vet proposals. Think of it as the DAO's governance filing cabinet.
      </>
    ),
  },
  {
    title: 'Fully Open Source',
    Svg: require('@site/static/img/robot-emoji.svg').default,
    description: (
      <>
        Built to allow anyone to contribute using open source software and simple
        developer workflows (Markdown and GitHub). Fork the repository to make sure 
        you always have a copy.
      </>
    ),
  },
  {
    title: 'Built by YAM for YAM',
    Svg: require('@site/static/img/hammers-emoji.svg').default,
    description: (
      <>
        We are building tools to coordinate and fund projects that will move
        YAM forward. This is a small start, but we are looking for "Do-ers" who 
        are looking to tinker and build open source magic, and get paid to do it!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
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
