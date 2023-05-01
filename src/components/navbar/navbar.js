import React, {useState} from 'react';
import logo from '../../assets/img/logo.png'
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
                            <img className='w-20' src={logo} alt=""/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <div href="#"
                                   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Главная</div>
                                <div href="#"
                                   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">О
                                    нас</div>
                                <div href="#"
                                   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Контакты</div>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                            <span className="sr-only">Открыть меню</span>
                            {/* Icon when menu is closed. */}
                            {/* Heroicon name: outline/menu */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Heroicon name: outline/x */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
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
                    <div href="#"
                       className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Главная</div>
                    <div href="#"
                       className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">О
                        нас</div>
                    <div href="#"
                       className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Контакты</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;