import React from 'react';
import Navbar from "../components/navbar/navbar";

function NotFoundPage(props) {
    return (
        <>
            < Navbar/>
            <main className='bg-gray-200'>
                <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                    <div className="max-w-lg mx-auto space-y-3 text-center">
                        <h1 className='text-7xl text-black'>404</h1>
                        <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                            Страница не найдена
                        </h3>
                        <p className="text-gray-600">
                            Пожалуйста, вернитесь назад.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default NotFoundPage;