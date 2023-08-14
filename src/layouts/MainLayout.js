import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../elements/header/Header'
import Sidebar from '../elements/sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div className='page-wrapper'>
        <div className='page-inner'>
            <Sidebar/>
            <div className='page-content-wrapper'>
                <Header/>
                <main className='page-content' id="js-page-content" role="main">
                    <Outlet/>
                </main>
            </div>
        </div>
    </div>
  )
}

export default MainLayout