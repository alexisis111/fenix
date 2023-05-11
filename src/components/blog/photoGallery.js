import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PhotoGallery() {
    const sliderRef = useRef(null);

    const photos = [...Array(39)].map((_, i) => ({
        src: require(`../../assets/img/photo/photo${i + 1}.jpg`),
        alt: `Image ${i + 1}`
    }));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="py-8 bg-gray-200">
            <h1 className="text-gray-800 font-extrabold text-center mb-8 text-xl md:text-5xl">Фотогалерея</h1>
            <div className="slider-wrapper relative">
                <Slider {...settings} ref={sliderRef}>
                    {photos.map((photo, index) => (
                        <div className="px-2" key={index}>
                            <img
                                data-fancybox="gallery"
                                className="w-full h-96 rounded-lg shadow-md cursor-zoom-in"
                                src={photo.src}
                                alt={photo.alt}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="slider-controls flex flex-col justify-between h-full">
                    <button
                        onClick={prevSlide}
                        className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 opacity-50 md:opacity-100 absolute top-1/2 transform -translate-y-1/2"
                        style={{left: "20px"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 opacity-50 md:opacity-100 absolute top-1/2 transform -translate-y-1/2"
                        style={{right: "20px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;
