import type { NextPage } from 'next';

import styles from '../styles/components/test.module.scss';

const Home: NextPage = () => {
  return <div className={styles.test}>Helloworld</div>;
};

export default Home;
