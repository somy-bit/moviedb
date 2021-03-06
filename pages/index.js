import Head from 'next/head'
import requests from '../Utils/requests.js'

import Header from './Header.js'
import Nav from './Nav.js'
import  Results  from './Results.js'



export default function Home({results}) {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Nav />
      <Results results={results} />
      
    </div>
  )
}

export async function getServerSideProps(context){

  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(response=>response.json());
  console.log('server',request)
  return {
    props: {
     
      results : request,
      
    }
  };
}