import React from 'react';
import avatar from '../../assets/img/avatar.jpg'
function About() {
    return (
        <section className="py-8 bg-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-xl text-center font-semibold md:text-4xl">
                                “Компания Феникс“ - это команда настоящих профессионалов своего дела, мы рады приветствовать Вас!<br/>
                                Качество, гарантия, надежность - это то, что мы гарантируем нашим клиентам. <br/>
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={avatar}
                                 className="w-16 h-16 rounded-full object-cover" alt=''/>
                            <div>
                                <span className="block text-gray-800 font-semibold">Основатель компании</span>
                                <span className="block text-gray-600 text-sm mt-0.5">"Фамилия" Олег</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default About;