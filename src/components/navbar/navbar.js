import React, {useState} from 'react';
import logo from '../../assets/img/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk, faTelegram, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-xl">
                            <img className='w-24 mt-2' src={logo} alt=""/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/"
                                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Главная
                                </Link>
                                <Link to="/about"
                                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">О
                                    компании
                                </Link>
                                <Link to="/contacts"
                                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Контакты
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className="flex items-center gap-x-6 text-gray-400 ">
                            <div>
                                <a href="https://www.instagram.com/oleg.olievskii/" target="_blank"
                                   rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram}
                                                     className="w-8 h-8 hover:text-gray-500 flex items-center"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://vk.com/fenixrest" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faVk}
                                                     className="w-8 h-8 hover:text-gray-500 flex items-center"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://t.me/FenixRest_bot" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center hover:text-gray-500">
                                    <FontAwesomeIcon icon={faTelegram} class="w-7 h-7"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+79500288089" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center hover:text-gray-500">
                                    <FontAwesomeIcon icon={faWhatsapp} class="w-8 h-8"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                            <span className="sr-only">Открыть меню</span>
                            <svg className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className={`block h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/"
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Главная
                    </Link>
                    <Link to="/about"
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">О
                        компании
                    </Link>
                    <Link to="/contacts"
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Контакты
                    </Link>
                </div>
                <div className="flex justify-evenly gap-x-6 p-4 text-gray-400 ">
                    <div className="flex items-center gap-x-6 text-gray-400 ">
                        <div>
                            <a href="https://www.instagram.com/oleg.olievskii/" target="_blank"
                               rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram}
                                                 className="w-8 h-8 hover:text-gray-500 flex items-center"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://vk.com/fenixrest" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faVk} className="w-8 h-8 hover:text-gray-500 flex items-center"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://t.me/FenixRest_bot" target="_blank" rel="noopener noreferrer"
                               className="flex items-center hover:text-gray-500">
                                <FontAwesomeIcon icon={faTelegram} class="w-7 h-7"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://wa.me/+79500288089" target="_blank" rel="noopener noreferrer"
                               className="flex items-center hover:text-gray-500">
                                <FontAwesomeIcon icon={faWhatsapp} class="w-8 h-8"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
        ;
}

export default Navbar;
