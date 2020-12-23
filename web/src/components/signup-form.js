import React, {useState} from 'react'
import Layout from '../containers/layout'

import styles from './signup-form.module.css'

const SignupForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    let body = {
      email: {
        name: name,
        email: email
      }
    }
    const postData = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Basic bWJyaWVuOmhvdHNuYXRjaGZvcmV2ZXI='},
      body: JSON.stringify(body)
    }
    fetch('https://api.sheety.co/281417d597acde420a2bed669e1e7dd5/signupForm/emails', postData)
      .then(response => response.json())
      .then(setSubmit(true))
  }

  const SubmittedMessage = () => (
    <div>
      <h1>Thanks! We'll be in touch soon</h1>
    </div>
  )

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.formHeadings}>
          <h1>Supporter Scarves coming soon</h1>
          <p className={styles.subheading}>Be the first to hear when they're available to order for £10</p>
        </div>
        { !submitted
          ? <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input placeholder='Your name' value={name} type='text' id='name' onChange={(e) => setName(e.target.value)} />
              <input placeholder='Email address' value={email} type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type='submit' value='Register interest' />
          </form>
          : <SubmittedMessage />}
      </div>
    </Layout>
  )
}

export default SignupForm
