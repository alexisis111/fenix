import React from 'react';
import FormComponent from "../../formComponent";

function Map() {

    return (
        <section className="text-gray-600 body-font relative bg-gray-200">
            <div className="container py-4 mx-auto flex sm:flex-nowrap flex-wrap">
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.608219128416!2d30.248576999999997!3d59.955233899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696375f230bf46d%3A0x4422ba5d78212cd7!2z0KPRgNCw0LvRjNGB0LrQsNGPINGD0LsuLCAxOCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5OTE1NQ!5e0!3m2!1sru!2sru!4v1683574766315!5m2!1sru!2sru"
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Адрес</h2>
                            <p className="mt-1">
                                г. Санкт-Петербург
                                Уральская ул. д.18
                                <br/>
                                г. Москва, Московская область
                                работаем на выезде
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Емаил</h2>
                            <a href="mailto:fenixRestSpb@yandex.ru" className="text-indigo-500 leading-relaxed">
                                fenixRestSpb@yandex.ru
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Телефон</h2>
                            <p className="leading-relaxed">+7 (950) 028 - 80 - 89 Олег.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-md lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 ">
                    <h2 className="text-white text-2xl font-extrabold text-center">Остались вопросы?</h2>
                    <p className="leading-relaxed text-white text-center">
                        Оставьте заявку и мы свяжемся с вами.
                    </p>
                    <p className="leading-relaxed text-white text-center mb-5">
                        Консультация - бесплатно.
                    </p>
                    <FormComponent/>
                </div>
            </div>
        </section>
    );
}

export default Map;