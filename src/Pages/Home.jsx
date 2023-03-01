import React from 'react'
import Header from '../Components/Header'
import { Link } from "react-router-dom";
import '../styles/Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <section className='showcase'>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h1 className=' hm'>Find the <span>best</span> opportunities with <span>us</span></h1>
                    <p className='paramd'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur fugiat architecto nostrum deleniti qui in modi sit eaque illo unde magnam sed similique rem placeat, totam itaque alias sunt.</p>
                    <div className="btns d-flex  gap-3">
                        <Link to="/registar"><button className='btn btn-danger'>Registar</button></Link>
                        <Link to='/login'><button className='btn btn-outline-danger'>Login</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
