import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import thumbnail from '../public/thumbnail.png';

function scrollIntoView(id: string){  
  let element = document.getElementById(id);

  element.scrollIntoView(true);
}

export default function Home() {
  return (
    <>
      <Head>

      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Who's Here? <a role="button" onClick={() => scrollIntoView('description')}>Kilroy is here!</a>
          </h1>
          <br></br>
          <br></br>
          <Image src={thumbnail} alt="Kilroy" className={styles.image} width="1013" height="582"/>
          <div className={styles.description} id="description">
            <h1><a> About Kilroy </a></h1>
            <br></br>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada fringilla dapibus. Fusce purus diam, vestibulum non dui sit amet, sollicitudin ultricies dolor. Mauris tempus, odio finibus placerat porttitor, leo arcu tristique mi, id dictum lacus lorem sit amet metus. Aliquam vel felis nulla. Aliquam erat volutpat. Phasellus accumsan accumsan mi, sed vehicula quam fermentum pretium. Mauris ex metus, placerat ac consequat non, venenatis condimentum odio. Vivamus semper odio ut dictum consequat. Phasellus ullamcorper, nulla in semper suscipit, ligula mauris tempor augue, eget dignissim quam enim non quam. Pellentesque at vulputate mi. Nulla pellentesque massa eget ipsum commodo, ut aliquam justo accumsan. Suspendisse potenti. Maecenas in sagittis nunc, nec dictum enim. Nam ante felis, ultricies ac magna quis, dictum scelerisque purus.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada fringilla dapibus. Fusce purus diam, vestibulum non dui sit amet, sollicitudin ultricies dolor. Mauris tempus, odio finibus placerat porttitor, leo arcu tristique mi, id dictum lacus lorem sit amet metus. Aliquam vel felis nulla. Aliquam erat volutpat. Phasellus accumsan accumsan mi, sed vehicula quam fermentum pretium. Mauris ex metus, placerat ac consequat non, venenatis condimentum odio. Vivamus semper odio ut dictum consequat. Phasellus ullamcorper, nulla in semper suscipit, ligula mauris tempor augue, eget dignissim quam enim non quam. Pellentesque at vulputate mi. Nulla pellentesque massa eget ipsum commodo, ut aliquam justo accumsan. Suspendisse potenti. Maecenas in sagittis nunc, nec dictum enim. Nam ante felis, ultricies ac magna quis, dictum scelerisque purus.</p>
            </div>
          </div>
          <br></br>
          <div className={styles.involved}>
            <h1><a> Get Involved </a></h1>
            <br></br>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada fringilla dapibus. Fusce purus diam, vestibulum non dui sit amet, sollicitudin ultricies dolor. Mauris tempus, odio finibus placerat porttitor, leo arcu tristique mi, id dictum lacus lorem sit amet metus. Aliquam vel felis nulla. Aliquam erat volutpat. Phasellus accumsan accumsan mi, sed vehicula quam fermentum pretium. Mauris ex metus, placerat ac consequat non, venenatis condimentum odio. Vivamus semper odio ut dictum consequat. Phasellus ullamcorper, nulla in semper suscipit, ligula mauris tempor augue, eget dignissim quam enim non quam. Pellentesque at vulputate mi. Nulla pellentesque massa eget ipsum commodo, ut aliquam justo accumsan. Suspendisse potenti. Maecenas in sagittis nunc, nec dictum enim. Nam ante felis, ultricies ac magna quis, dictum scelerisque purus.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
