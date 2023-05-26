import React, {useState} from 'react';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Modal from "../components/modal/modal";
import img from '../assets/img/photo/photo1.jpg'
import FormComponent from "../formComponent";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    function closeModal() {
        setIsFormSubmitted(false);
    }

    return (
        <div className='bg-gray-200 w-full h-full'>
            <Navbar/>
            <section className="body-font">
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
                <div className="container mx-auto flex px-4 py-4 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed text-base text-gray-600">Компания Феникс специализируется на реставрации, восстановлении и ремонте дверей, окон и лестниц. Была основана в ответ на растущий спрос на высококачественные услуги по ремонту и восстановлению древних исторических конструкций.

                            Команда состоит из профессионалов с многолетним опытом работы в отрасли реставрации. Используем только высококачественные материалы и современное оборудование, чтобы обеспечить максимальную долговечность и качество наших работ.

                            Предлагаем широкий спектр услуг, включая реставрацию и восстановление старинных деревянных окон и дверей, ремонт лестниц и создание новых дизайнерских решений для дверей и окон.

                            Гарантируем высокое качество работы, индивидуальный подход и соблюдение сроков выполнения заказов. Если вам нужна профессиональная помощь в реставрации и ремонте дверей, окон и лестниц, обратитесь к нам в компанию Феникс - мы будем рады помочь вам!</p>
                        <div className="flex mx-auto">
                            <button
                                className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-black active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto"
                                onClick={() => setIsModalOpen(true)}>Подробнее
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center rounded " alt="hero"
                             src={img}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}


export default About;