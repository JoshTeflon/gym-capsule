import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components/global'
import { Landing } from '../components/home'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Gym Capsule</title>
        <meta name="description" content="Gym Capsule static website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </div>
  )
}
