import React from 'react';
import avatar from '../../assets/img/avatar.jpg'
function About() {
    return (
        <section className="py-8 bg-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <div>
                        <div>
                            <div className="text-gray-800 text-xl text-center font-extrabold md:text-5xl">
                                Новая жизнь для исторически значимых вещей
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={avatar}
                                 className="w-16 h-16 rounded-full object-cover" alt=''/>
                            <div>
                                <span className="block text-gray-800 font-semibold">Основатель компании "Феникс"</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Олиевский Олег</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;