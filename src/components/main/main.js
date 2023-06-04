import React, { useState} from 'react';
import Modal from "../modal/modal";
import door from '../../assets/img/door.mp4';
import FormComponent from "../formComponent/formComponent";

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    function closeModal() {
        setIsFormSubmitted(false);
    }




    return (
        <div className="relative">
            {isFormSubmitted ? (
                <Modal isOpen={true} onClose={closeModal}>
                    <div className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                        </svg>
                        <h1 className="text-white">Сообщение отправлено!</h1>
                    </div>
                </Modal>
            ) : (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="w-full">
                        <h2 className="text-white text-2xl font-extrabold text-center">Проконсультируем бесплатно</h2>
                        <p className=" leading-relaxed mb-5 text-white text-center">
                            Оставьте заявку и мы свяжемся с вами.
                        </p>
                        <FormComponent />
                    </div>
                </Modal>
            )}
            <video className="w-full h-[400px] object-cover" autoPlay loop muted>
                <source src={door} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
                    <h3
                        className="text-4xl text-white font-extrabold mx-auto md:text-5xl animate__animated animate__infinite animate__zoomIn animate__slower"
                    >
                        Новая жизнь для исторически<br />значимых вещей
                    </h3>
                <div className="mt-6 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <button
                        className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-black active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;

