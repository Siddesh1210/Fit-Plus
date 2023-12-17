import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import About from './components/About';
import Democard from './components/Democard';
import Carousel from './Carousel';
import Footer from './components/Footer';
import ExerciseList from './components/ExerciseList';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import ParticularExercise from './components/ParticularExercise';
import DetailExercise from './components/DetailExercise';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const root=ReactDOM.createRoot(document.getElementById("root"));

function App()
{
    return(
        <>
            <Provider store={appStore}>
                <Navbar/>
                <Outlet/>
                <ScrollToTop/>
                <Footer/>
            </Provider>
        </>
    )
}

function Home()
{
    return(
        <>
            <Hero/>
            <Hero2/>
            <About/>
            <Democard/>
            <Carousel/>
        </>
    )
}

const appLayout=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/workout",
                element:<ExerciseList/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/bodyPart/:name",
                element:<ParticularExercise/>
            },
            {
                path:"/exercise/:id",
                element:<DetailExercise/>
            }
        ]
    }
])

root.render(<RouterProvider router={appLayout}></RouterProvider>)