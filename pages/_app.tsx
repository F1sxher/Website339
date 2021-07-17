import Head from 'next/head';
import Layout from '../Components/Layout.component';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kilroy 339</title>
        <meta name="description" content="Who's here? Kilroy is here!! We are FIRST Robotics Team 339, located at North Stafford High School, and organized throught the Commonwealth Governor’s School."/>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/3a5e0f4177.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;