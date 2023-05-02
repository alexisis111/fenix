import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Modal from '../modal/modal';

function Map() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('template_6sv31da', 'template_6sv31da', e.target, '310Zf60UfF_qtF07n')
            .then(
                (result) => {
                    console.log(result.text);
                    setIsModalOpen(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    }

    return (
        <section className="text-gray-600 body-font relative bg-gray-200">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                    </svg>
                    <h1>Сообщение отправлено!</h1>
                </div>
            </Modal>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31969.88133201048!2d30.207033236936606!3d59.9467834109741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963127d6053ef3%3A0x84639b672f9cce0!2z0KTQtdC90LjQutGB!5e0!3m2!1sru!2sru!4v1683037835010!5m2!1sru!2sru"
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Адрес</h2>
                            <p className="mt-1">
                                г. Санкт-Петербург
                                16-я линия, Васильевский остров, д. 7
                                <br/>
                                г. Москва, Московская область
                                работаем на выезде
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Емаил</h2>
                            <a href="mailto:odofenix@yandex.ru" className="text-indigo-500 leading-relaxed">
                                odofenix@yandex.ru
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Телефон</h2>
                            <p className="leading-relaxed">+7 (950) 028 - 80 - 89 Олег.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-md lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-2xl font-extrabold text-center">Обратная связь</h2>
                    <p className="leading-relaxed mb-5 text-white text-center">
                        Оставьте заявку и мы свяжемся с вами.
                    </p>
                    <form onSubmit={sendEmail}>
                        <div className="relative p-4 ">
                            <label htmlFor="name" className="leading-7 text-sm text-white"></label>
                            <input type="text" id="name" name="name" required placeholder="Ваше имя"
                                   className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative p-4">
                            <label htmlFor="email" className="leading-7 text-sm text-white"></label>
                            <input type="email" id="email" name="email" required placeholder="Ваш Email"
                                   className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative p-4">
                            <label htmlFor="message" className="leading-7 text-sm text-white"></label>
                            <textarea id="message" name="message" required placeholder="Текст вашего сообщения"
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
            </div>
        </section>
    );
}

export default Map;