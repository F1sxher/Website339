import { useState } from 'react'
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import thumbnail from '../public/thumbnail.png';

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

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ip, setIp] = useState(false)

  function handleSubmit (e) { 
    e.preventDefault()
    console.log('Sending')

    /*fetch('https://api.ipify.org/?format=json').then((results: any) => 
    {
      setIp(results.json().ip)
      console.log(ip)
    })*/

    let data = {
        name,
        email,
        message,
        ip
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
          setIp(false)
        }
      })
  }
  return (
    <>
      <Head>

      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Who's Here? <a role="button" onClick={() => scrollToElement('description', false)}>Kilroy is here!</a>
          </h1>
          <br></br>
          <div className={styles.description} id="contact">
            <h1>Contact Kilroy</h1>
            <form className={styles.main}>
              <p className={styles.inputGroup}>
                <label htmlFor='name' className={styles.inputLabel}>Name</label>
                <input type='text' name='name' onChange={(e)=>{setName(e.target.value)}} className={styles.inputField}/>  
              </p>
              <p className={styles.inputGroup}>
                <label htmlFor='email' className={styles.inputLabel}>Email</label>
                <input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} className={styles.inputField}/>
              </p>
              <p className={styles.inputGroup}>
                <label htmlFor='message' className={styles.inputLabel}>Message</label>
                <input type='text' name='message' onChange={(e)=>{setMessage(e.target.value)}} className={styles.inputField} id={styles.inputFieldMsg}/>
              </p>
              <input type='submit' className={styles.submitButton} onClick={(e)=>{handleSubmit(e);alert("Successfully submitted contact, we will respond as quick as we can.")}}/>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
