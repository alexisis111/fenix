import React, {useState} from 'react';
import logo from "../../assets/img/logo.png";
import Modal from "../modal/modal";
import emailjs from 'emailjs-com';

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('template_6sv31da', 'template_6sv31da', e.target, '310Zf60UfF_qtF07n')
            .then(
                (result) => {
                    setIsModalOpen(false);
                    setIsFormSubmitted(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    }

    return (
        <div className="relative">
            {isFormSubmitted ? (
                <Modal isOpen={true} onClose={() => setIsFormSubmitted(false)}>
                    <div className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-white" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                        </svg>
                        <h1 className='text-white'>Сообщение отправлено!</h1>
                    </div>
                </Modal>
            ) : (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="w-full">
                        <h2 className="text-white text-2xl font-extrabold text-center">Проконсультируем бесплатно</h2>
                        <p className="leading-relaxed mb-5 text-white text-center">
                            Оставьте заявку и мы свяжемся с вами.
                        </p>
                        <form onSubmit={sendEmail}>
                            <div className="relative p-4 ">
                                <label htmlFor="name" className="leading-7 text-sm text-white"></label>
                                <input type="text" id="name" name="name" required placeholder="Имя"
                                       className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative p-4">
                                <label htmlFor="email" className="leading-7 text-sm text-white"></label>
                                <input type="tel" id="phone" name="phone" required placeholder="Телефон"
                                       className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative p-4">
                                <label htmlFor="message" className="leading-7 text-sm text-white"></label>
                                <textarea id="message" name="message" required placeholder="Текст сообщения"
                                          className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type="submit"
                                    className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex mx-auto ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
            {/*< img className="w-full h-64 md:h-full object-cover" src="https://www.sofimeb.ru/images/banners/rem-meb.jpg"*/}
            {/*      alt=""/>*/}
            <iframe className="w-full h-[600px] object-cover" src="https://gifer.com/embed/1o" allowFullScreen></iframe>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white font-bold text-2xl md:text-5xl"
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: "10px"}}>
                    Реставрация, Восстанавление и Ремонт: <br/> Дверей, Окон, Лестниц <br/> <img
                    className='w-40 mx-auto mt-4' src={logo} alt=""/>
                </h1>
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
    )
        ;
}

export default Main;
