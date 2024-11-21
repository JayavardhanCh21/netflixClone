import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Top rated' fetchURL={requests.requestToprated} />
      <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
    

    </div>
  )
}

export default Home
