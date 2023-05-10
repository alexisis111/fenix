import React from 'react';


const posts = [
    {
        title: "Перекраска дома",
        desc: "Адрес: поселок Васкелово, СНТ Мичуринец, В обновление вошли также окна по всему дому и межкомнатные двери",
        img: 'https://thumb.tildacdn.com/tild3438-3833-4962-b461-366433663365/-/resize/432x/-/format/webp/1.png',
        date: "22.06.2020"
    },
    {
        title: "Реставрация окон, 7шт",
        desc: "Адрес: город Санкт Петербург, улица Блохина 21Заменили сгнившие части оконных коробов, стекла, переделали межрамные проемы",
        img: 'https://thumb.tildacdn.com/tild3962-6634-4561-b564-646632356538/-/resize/432x/-/format/webp/2.png',
        date: "5.03.2021"
    },
    {
        title: "Реставрация окон",
        desc: "Адрес: поселок Солнечное ЖК Оллила",
        img: 'https://thumb.tildacdn.com/tild6633-6233-4863-b834-353932643766/-/resize/432x/-/format/webp/3.png',
        date: "23.04.2021"
    },
    {
        title: "Перекраска",
        desc: "Перетяжка стульев",
        img: 'https://thumb.tildacdn.com/tild3062-6534-4331-b437-393064336364/-/resize/432x/-/format/webp/4.png',
        date: "21.10.2021"
    },
    {
        title: "Реставрация дверей",
        desc: "Адрес: город Санкт Петербург, улица Спортивная",
        img: 'https://thumb.tildacdn.com/tild3135-3566-4233-b231-636562393461/-/resize/432x/-/format/webp/5.png',
        date: "23.01.2022"
    },
    {
        title: "Реставрация кримон",
        desc: "Реставрация ответных частей",
        img: 'https://thumb.tildacdn.com/tild3739-3037-4433-b363-356336633862/-/resize/432x/-/format/webp/6.png',
        date: "23.04.2022"
    },
    {
        title: "Реставрация двери",
        desc: "Также вставляли утраченные части",
        img: 'https://thumb.tildacdn.com/tild6136-6231-4165-b936-383930346166/-/resize/432x/-/format/webp/7.png',
        date: "23.04.2022"
    },
    {
        title: "Покрытие тумб для ванной комнаты",
        desc: "Масло и воск",
        img: 'https://thumb.tildacdn.com/tild3637-3336-4234-b031-666135363865/-/resize/432x/-/format/webp/8.png',
        date: "23.04.2022"
    },
    {
        title: "Реставрация дверей",
        desc: "Адрес: город Москва, улица Мясницкая, дом 5",
        img: 'https://thumb.tildacdn.com/tild3563-3932-4266-a131-643930313366/-/resize/432x/-/format/webp/9.png',
        date: "23.04.2022"
    }
]

function Blog() {
    return (
        <section className="py-8 bg-gray-200">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl text-center ">Фотогалерея</h1>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
                <ul className="grid gap-x-8 gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm shadow-2xl p-2 rounded-md" key={key}>
                                <div>
                                    <div className="m-4">
                                        <h1 className="text-2xl text-gray-800 duration-150 group-hover:text-black font-semibold text-center">
                                            {items.title}
                                        </h1>
                                    </div>
                                    <img data-fancybox="gallery" src={items.img} loading="lazy" alt={items.title}
                                         className="w-full rounded-lg"/>
                                    <p className="text-gray-600 text-sm m-4">{items.desc}</p>
                                    <div className="mt-6 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                                        <button
                                            className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-black active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto"
                                        >
                                            Подробнее
                                        </button>
                                    </div>
                                    {/*<span className="flex text-sm m-4">*/}
                                    {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                    {/*         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">*/}
                                    {/*      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                                    {/*    </svg>*/}
                                    {/*    {items.date}</span>*/}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default Blog;