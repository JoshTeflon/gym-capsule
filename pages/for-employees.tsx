import React from 'react'
import Head from 'next/head'
import {
  Landing,
  GetStarted,
  Flavour,
  HowItWorks,
  Faqs
} from '../components/employees'

export default function ForEmployees() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | For Employees</title>
        <meta name="description" content="Gym Capsule page for employees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <GetStarted />
      <Flavour />
      <HowItWorks />
      <Faqs />
    </div>
  )
}
