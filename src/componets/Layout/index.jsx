import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import About from '../about'
import Card from '../card'
import Footer from '../footer'
import Main from '../main'
import Navbar from '../navbar'
import Services from '../services'
import Technologies from '../technologies'
import { Container, Spiner } from './style'
import './style.css'
export default function Layout() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        load ?
          <Spiner><PulseLoader
            color='#2DCCBD'
          /></Spiner>
          :
          <Container>
            <div className='container'>
              <Navbar />
              <Main />
              <About />
              <Card />
              <Technologies />
              <Services />
              <Footer />
            </div>
          </Container>
      }
    </>
  )
}


