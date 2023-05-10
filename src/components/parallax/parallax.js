import React from 'react';
import { Parallax } from 'react-parallax';
import door from "../../assets/img/svg/door.svg";
import window from "../../assets/img/svg/window.svg";
import chair from "../../assets/img/svg/chair.svg";
import stairs from "../../assets/img/svg/stairs.svg";
import brush from "../../assets/img/svg/brush.svg";

function MyComponent() {
    return (
        <>
            <Parallax bgImage="https://life.akbars.ru/upload/iblock/71e/skpaawor8vsk17a36mf9fhd3me5feww4.png"  blur={{ min: -15, max: 15 }}>
                <div className="m-4 sm:text-center sm:max-w-md sm:mx-auto ">
                    {/*<h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: "10px"}} className="text-white text-3xl font-extrabold sm:text-4xl text-center ">Берем в работу</h1>*/}
                </div>
                <div className='sm:flex justify-evenly m-8'>
                    <div className='bg-gray-800 rounded-lg shadow-2xl m-4 p-4'>
                        <img src={door}  className='w-20 h-20 mx-auto' alt=""/>
                        <div className='text-center text-white text-xl'>Двери</div>
                    </div>
                    <div className='bg-gray-800 rounded-lg shadow-2xl m-4 p-4'>
                        <img src={window} className='w-20 h-20 mx-auto' alt=""/>
                        <div className='text-center text-white text-xl'>Окна</div>
                    </div>
                    <div className='bg-gray-800 rounded-lg shadow-2xl m-4 p-4'>
                        <img src={chair} className='w-20 h-20 mx-auto' alt=""/>
                        <div className='text-center text-white text-xl'>Мебель</div>
                    </div>
                    <div className='bg-gray-800 rounded-lg shadow-2xl m-4 p-4'>
                        <img src={stairs} className='w-20 h-20 mx-auto' alt=""/>
                        <div className='text-center text-white text-xl'>Лестницы</div>
                    </div>
                    <div className='bg-gray-800 rounded-lg shadow-2xl m-4 p-4'>
                        <img src={brush} className='w-20 h-20 mx-auto' alt=""/>
                        <div className='text-center text-white text-xl'>Покраска</div>
                    </div>
                </div>
            </Parallax>
        </>


    );
}

export default MyComponent;
