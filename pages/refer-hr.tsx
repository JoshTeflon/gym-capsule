import React from 'react'
import Head from 'next/head'
import { Landing, ReferHr } from '../components/refer-hr'

export default function ReferHrPage() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | Refer HR</title>
        <meta name="description" content="Gym Capsule page for hr referral" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <ReferHr />
    </div>
  )
}
