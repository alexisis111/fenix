import React, {useState} from 'react';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Modal from "../components/modal/modal";
import FormComponent from "../components/formComponent/formComponent";
import Product from "../components/product/product";
import about from "../assets/img/about.mp4";
import spb from "../assets/img/cities/spb.jpg";
import lo from "../assets/img/cities/lo.jpg";
import msk from "../assets/img/cities/msk.jpg";
import mo from "../assets/img/cities/mo.jpg";


function AboutPage() {
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
                            <h2 className="text-white text-2xl font-extrabold text-center">Проконсультируем
                                бесплатно</h2>
                            <p className=" leading-relaxed mb-5 text-white text-center">
                                Оставьте заявку и мы свяжемся с вами.
                            </p>
                            <FormComponent/>
                        </div>
                    </Modal>
                )}
                <section className="text-gray-600 body-font">
                    <video className="w-full h-[400px] object-cover" autoPlay loop muted>
                        <source src={about} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="container px-5 py-8 mx-auto">
                        <div className="text-center relative">
                            <h3 className="sm:text-3xl text-base text-gray-900 relative z-10 p-8">
                                Компания Феникс специализируется на реставрации, восстановлении и ремонте дверей, окон и лестниц. Была основана в ответ на
                                растущий спрос на высококачественные услуги по ремонту и восстановлению древних исторических конструкций. Команда состоит из профессионалов с многолетним опытом работы
                                в отрасли реставрации. Используем только высококачественные материалы и современное оборудование, чтобы обеспечить максимальную долговечность и качество наших работ.
                                Предлагаем широкий спектр услуг, включая реставрацию и восстановление старинных
                                деревянных окон и дверей, ремонт лестниц и создание новых дизайнерских решений для
                                дверей и окон. Гарантируем высокое качество работы, индивидуальный подход и соблюдение
                                сроков выполнения заказов. Если вам нужна профессиональная помощь в реставрации и
                                ремонте дверей, окон и лестниц, обратитесь к нам в компанию Феникс - мы будем рады
                                помочь вам!
                            </h3>
                            <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
                                <div className="w-full h-full border-2 border-blue-500 bg-gray-100 shadow-2xl rounded-lg p-8"></div>
                            </div>
                        </div>

                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                                <div
                                    className="w-80 h-80 inline-flex items-center justify-center text-indigo-500 mb-5 flex-shrink-0">
                                    <img className='rounded-lg object-cover' src={spb} alt=""/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Санкт-Петербург</h2>
                                    <p className="leading-relaxed text-base">Реставрируем двери, окна, лестницы уже
                                        много лет в Санкт-Петербурге. Многие наши работы из портфолио, это наша работа в
                                        городе на Неве.</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                                <div
                                    className="w-80 h-80 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                                    <img className='rounded-lg object-cover' src={lo} alt=""/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ленинградская
                                        область</h2>
                                    <p className="leading-relaxed text-base">Берем в работу объекты в ЛО. При
                                        необходимости везем ваши двери, окна или лестницы к себе в цех. Также работаем
                                        непосредственно на объекте.</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                                <div
                                    className="w-80 h-80 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                                    <img className='rounded-lg object-cover' src={msk} alt=""/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Москва</h2>
                                    <p className="leading-relaxed text-base">Реставрируем и даём новую жизнь вашим
                                        дверям, лестницам и окнам и в столице. Имеем штат высококлассных сотрудников.
                                        Открываем новый офис.</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                                <div
                                    className="w-80 h-80 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                                    <img className='rounded-lg object-cover' src={mo} alt=""/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Московская
                                        область</h2>
                                    <p className="leading-relaxed text-base">Работаем на всей территории области.
                                        Производим работы как на объектах, так и у нас в цеху. Многие наши клиенты
                                        довольны результатом нашей работы.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </div>
    )
}


export default AboutPage;