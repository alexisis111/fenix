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
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 rounded-l-md hover:bg-gray-700 opacity-50 md:opacity-100"
                    style={{left: "20px"}}
                >
                    Назад
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 rounded-r-md hover:bg-gray-700 opacity-50 md:opacity-100"
                    style={{right: "20px"}}
                >
                    Вперёд
                </button>
            </div>
        </>

    );
};

export default Slider;
