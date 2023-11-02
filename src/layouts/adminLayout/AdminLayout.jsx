import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../../components/sideBar/SideBar'
import { useState } from 'react'

export const AdminLayout = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClickSideBarButton = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='flex flex-col min-h-screen'>
      <Header
        onClickSidebarButton={handleClickSideBarButton}
        showMenu={showMenu}
      />
      <SideBar showMenu={showMenu} />
      <main
        className='flex-1 px-6 md:px-14'
        onClick={() => {
          setShowMenu(false)
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
