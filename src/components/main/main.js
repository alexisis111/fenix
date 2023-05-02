import React from 'react';
import logo from "../../assets/img/logo.png";


function Main() {

    return (
        <div className="relative">
            <img className="w-full h-64 md:h-full object-cover" src="https://www.sofimeb.ru/images/banners/rem-meb.jpg"
                 alt=""/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white font-bold text-2xl md:text-5xl"
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: "10px"}}>
                    Реставрация, Восстанавление, Ремонт <br/> <img className='w-40 mx-auto mt-4' src={logo} alt=""/>
                </h1>
                <div className="mt-6 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <button
                        className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-black active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto"
                    >
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;
