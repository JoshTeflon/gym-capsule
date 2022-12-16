import React from 'react'
import Head from 'next/head'
import {
  CapsulesWork,
  Landing,
  UseCapsules
} from '../components/capsuleswork'

export default function HowCapsulesWork() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | How Capsules Work</title>
        <meta name="description" content="Gym Capsule page for how capsules work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <UseCapsules />
      <CapsulesWork />
    </div>
  )
}
