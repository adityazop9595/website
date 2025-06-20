import React from 'react'
import AnimatedPage from './PageAnimation'
import { Outlet } from 'react-router-dom'

export default function PageWrapper() {
  return (
    <>
    <AnimatedPage>
        <Outlet/>
    </AnimatedPage>
    </>
  )
}
