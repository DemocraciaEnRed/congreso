import React from 'react'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import Hero from '../containers/hero/component'
import Projects from '../containers/projects/component'
import Participate from '../containers/participate/component'
import About from '../containers/about/component'
import Footer from '../containers/footer/component'
import DashboardDrafts from '../containers/dashboard-drafts/component'

export default () => (
  <div>
    <NavBar />
    <SecondaryNavbar />
    <Hero />
    <Projects />
    <Participate />
    <About />
    <Footer />
    <DashboardDrafts />
  </div>
)
