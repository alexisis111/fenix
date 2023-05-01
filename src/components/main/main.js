import React from 'react';

function Main() {
    return (
        <div className="relative">
            <img className="w-full" src="https://www.sofimeb.ru/images/banners/rem-meb.jpg" alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                <h1 className="text-white font-bold text-2xl md:text-5xl" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: "10px"}}>
                    Реставрируем, Восстанавливаем, Ремонтируем
                </h1>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="items-center justify-center gap-3 sm:flex"
                    >
                        <button
                            className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto"
                        >
                            Подробнее
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
