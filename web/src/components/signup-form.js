import React, {useState} from 'react'
import Layout from '../containers/layout'

import styles from './hero.module.css'

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
      headers: {'Content-Type': 'application/json'},
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
        <h1>Supporter Scarves coming soon</h1>
        { !submitted
          ? <form onSubmit={handleSubmit}>
            <div>
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
