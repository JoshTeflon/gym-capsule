import React from 'react'
import Head from 'next/head'
import {
  Landing,
  JobOffers,
  NetPromoter
} from '../components/companies'

export default function ForCompanies() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | For Companies</title>
        <meta name="description" content="Gym Capsule page for companies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <JobOffers />
      <NetPromoter />
    </div>
  )
}
