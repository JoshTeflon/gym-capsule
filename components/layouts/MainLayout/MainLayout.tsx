import React from 'react'
import { Navbar, Footer } from '../../global'

interface MainLayoutProps {
    children?: React.ReactNode
}
  
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout