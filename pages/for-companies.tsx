import React from 'react'
import Head from 'next/head'
import {
  Landing,
  JobOffers,
  NetPromoter,
  PartnerUs,
  EmployeePlan,
  Team
} from '../components/companies'
import { FavouritePlaces } from '../components/home'

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
      <PartnerUs />
      <FavouritePlaces theme='grey' />
      <EmployeePlan />
      <Team />
    </div>
  )
}
