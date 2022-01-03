import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function scrollToElement(id: string, page: string | boolean)
{  
  if(!page)
  {
    let element = document.getElementById(id);

    return element.scrollIntoView(true);
  }
  else
  {
    window.location.href = `${page}#${id}`;
  }
}

export default function History() {
  return (
    <>
      <Head>

      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Who's Here? <a role="button" onClick={() => scrollToElement('description', '/')}>Kilroy is here!</a>
          </h1>
          <br></br>
          <div className={styles.description} id="description">
            <h1><a> Kilroy History </a></h1>
            <br></br>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada fringilla dapibus. Fusce purus diam, vestibulum non dui sit amet, sollicitudin ultricies dolor. Mauris tempus, odio finibus placerat porttitor, leo arcu tristique mi, id dictum lacus lorem sit amet metus. Aliquam vel felis nulla. Aliquam erat volutpat. Phasellus accumsan accumsan mi, sed vehicula quam fermentum pretium. Mauris ex metus, placerat ac consequat non, venenatis condimentum odio. Vivamus semper odio ut dictum consequat. Phasellus ullamcorper, nulla in semper suscipit, ligula mauris tempor augue, eget dignissim quam enim non quam. Pellentesque at vulputate mi. Nulla pellentesque massa eget ipsum commodo, ut aliquam justo accumsan. Suspendisse potenti. Maecenas in sagittis nunc, nec dictum enim. Nam ante felis, ultricies ac magna quis, dictum scelerisque purus.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada fringilla dapibus. Fusce purus diam, vestibulum non dui sit amet, sollicitudin ultricies dolor. Mauris tempus, odio finibus placerat porttitor, leo arcu tristique mi, id dictum lacus lorem sit amet metus. Aliquam vel felis nulla. Aliquam erat volutpat. Phasellus accumsan accumsan mi, sed vehicula quam fermentum pretium. Mauris ex metus, placerat ac consequat non, venenatis condimentum odio. Vivamus semper odio ut dictum consequat. Phasellus ullamcorper, nulla in semper suscipit, ligula mauris tempor augue, eget dignissim quam enim non quam. Pellentesque at vulputate mi. Nulla pellentesque massa eget ipsum commodo, ut aliquam justo accumsan. Suspendisse potenti. Maecenas in sagittis nunc, nec dictum enim. Nam ante felis, ultricies ac magna quis, dictum scelerisque purus.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
