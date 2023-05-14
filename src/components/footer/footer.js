import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTelegram, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function Footer() {


    return (
        <footer className="bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-gray-300 text-center md:text-left">© 2023 FenixRest. Все права защищены.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        <div className="flex items-center gap-x-6 mx-auto text-gray-400 ">
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;