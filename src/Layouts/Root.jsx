import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
           
            <NavBar />
            <main className="min-h-screen p-4">
                <Outlet />
            </main>
            <Footer />

            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;
