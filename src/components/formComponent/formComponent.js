import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Modal from "../modal/modal";

function FormComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isMessageSent, setIsMessageSent] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;

        // Проверка имени на наличие только букв
        const nameRegex = /^[а-яА-Яa-zA-Z]+$/;
        if (!nameRegex.test(name)) {
            setModalContent('Пожалуйста, введите только буквы в поле имени.');
            setIsModalOpen(true);
            return;
        }

        // Проверка номера телефона на формат X-XXX-XXX-XX-XX
        const phoneRegex = /^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phone)) {
            setModalContent('Пожалуйста, введите номер телефона в формате X-XXX-XXX-XX-XX.');
            setIsModalOpen(true);
            return;
        }

        // Отправка данных
        emailjs
            .sendForm('service_ecqilk7', 'template_3uv7yc9', e.target, 'P1pkeoxdL-6HQu4ci')
            .then(
                (result) => {
                    setModalContent('Сообщение отправлено!');
                    setIsModalOpen(true);
                    setIsMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    }

    function closeModal() {
        setIsModalOpen(false);
        setModalContent('');
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="relative p-4 ">
                    <label htmlFor="name" className="leading-7 text-sm text-white"></label>
                    <input type="text" id="name" name="name" required placeholder="Имя"
                           className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative p-4">
                    <label htmlFor="phone" className="leading-7 text-sm text-white"></label>
                    <input type="tel" id="phone" name="phone" required placeholder="Телефон"
                           className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative p-4">
                    <label htmlFor="message" className="leading-7 text-sm text-white"></label>
                    <textarea id="message" name="message" required placeholder="Текст сообщения"
                              className="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button type="submit"
                        className={`text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex mx-auto ${isMessageSent ? 'bg-green-500' : ''}`}>
                    {isMessageSent ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-. 76"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                        </svg>
                    )}
                </button>
            </form>

            {/* Модальное окно */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className={isMessageSent ? 'text-green-500' : 'text-red-500'}>{modalContent}</div>
                </Modal>
            )}
        </div>
    );
}

export default FormComponent;
