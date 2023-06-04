import React from 'react';
import avatar from '../../assets/img/avatar.jpg'


function About() {

    return (
        <section className="py-4 bg-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <div>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-2xl text-slate-700 font-extrabold text-center text-slate-700 ">
                                    Все реставрируют? Мы возраждаем!
                                </p>
                            </blockquote>
                            <figcaption className="font-medium text-center">
                                <img src={avatar}
                                     className="w-24 h-24 rounded-lg object-cover mx-auto" alt=''/>
                                <div className="text-slate-700 dark:text-slate-500">
                                    Основатель компании "Феникс"
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;