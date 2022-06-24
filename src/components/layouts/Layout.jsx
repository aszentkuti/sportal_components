import React from 'react'
import { footerData } from '../../data/footer'
import { headerData } from '../../data/header'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout({children}) {
  return (
    <>
    <Header headerData={headerData}/>
    <main className="max-w-contentWithPadding mx-auto pt-28 px-4">
        {children}
    </main>
    <Footer footerData={footerData}/>
    </>
  )
}

export default Layout