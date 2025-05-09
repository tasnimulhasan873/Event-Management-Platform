import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />

            {/* Page Content */}
            <main className="min-h-screen p-4">
                <Outlet />
            </main>

            {/* Toast Notifications */}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;
