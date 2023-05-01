import React from 'react';

function About() {
    return (
        <section className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
                                “Тут что то типа приветствия: <br/> Здравстуйте ,меня зовут .... я занимаюсь .... итд“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                                 className="w-16 h-16 rounded-full" alt=''/>
                            <div>
                                <span className="block text-gray-800 font-semibold">Имя</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Фамилия</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default About;