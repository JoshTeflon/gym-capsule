import React from 'react'
import Head from 'next/head'
import {
  Landing,
  ReferFriends,
  HowToRefer,
  WhatYouGet
} from '../components/refer-friend'

export default function ReferFriend() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | Refer Friend</title>
        <meta name="description" content="Gym Capsule page for friend referral" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <ReferFriends />
      <HowToRefer />
      <WhatYouGet />
    </div>
  )
}
