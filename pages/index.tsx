import React from 'react'
import Head from 'next/head'
import {
  Landing,
  FavouriteActivities,
  FavouritePlaces,
  TalkTo,
  GetStarted,
  WhatWorks,
  WhatAreCapsules,
  CapsuleEverywhere,
  Locations
} from '../components/home'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule | Home</title>
        <meta name="description" content="Gym Capsule home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <FavouriteActivities />
      <FavouritePlaces />
      <TalkTo />
      <GetStarted />
      <WhatWorks />
      <WhatAreCapsules />
      <CapsuleEverywhere />
      <Locations />
    </div>
  )
}
