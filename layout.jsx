import React from 'react';
import Header from './src/component/header/header';
import Footer from './src/component/footer/footer';
import { Outlet } from 'react-router-dom';
export default function Layout(){
    return(
       <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>
    )
}