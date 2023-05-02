import React, { useState, useEffect } from "react";
import otz1 from '../../assets/img/otzyv/otz1.png';
import otz2 from '../../assets/img/otzyv/otz2.png';
import otz3 from '../../assets/img/otzyv/otz3.png';
import otz4 from '../../assets/img/otzyv/otz4.png';
import otz5 from '../../assets/img/otzyv/otz5.png';
import otz6 from '../../assets/img/otzyv/otz6.png';

const slides = [
    {
        id: 1,
        src: otz1,
        alt: "Slide 1",
    },
    {
        id: 2,
        src: otz2,
        alt: "Slide 2",
    },
    {
        id: 3,
        src: otz3,
        alt: "Slide 3",
    },
    {
        id: 4,
        src: otz4,
        alt: "Slide 4",
    },
    {
        id: 5,
        src: otz5,
        alt: "Slide 5",
    },
    {
        id: 6,
        src: otz6,
        alt: "Slide 6",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Функция, которая будет вызываться каждые 5 секунд
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) =>
                currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            );
        }, 5000);

        // Функция, которая будет вызвана при размонтировании компонента
        return () => clearInterval(interval);
    }, [currentSlide]);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
    };

    return (
        <>
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl text-center bg-gray-200 py-8">Отзывы наших клиентов</h1>
            <div className="relative w-full h-64  md:h-screen  bg-gray-200">
                <div className="absolute top-0 left-0 w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                                index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img
                                data-fancybox="gallery"
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 opacity-50 md:opacity-100"
                    style={{left: "20px"}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>

                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 opacity-50 md:opacity-100"
                    style={{right: "20px"}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>

                </button>
            </div>
        </>

    );
};

export default Slider;
