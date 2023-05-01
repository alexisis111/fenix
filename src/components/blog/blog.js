import React from 'react';

const posts = [
    {
        title: "Название",
        desc: "Описание",
        img: 'https://thumb.tildacdn.com/tild3438-3833-4962-b461-366433663365/-/resize/432x/-/format/webp/1.png',
        date: "Дата"
    },
    {
        title: "Название",
        desc: "Описание",
        img: 'https://thumb.tildacdn.com/tild3438-3833-4962-b461-366433663365/-/resize/432x/-/format/webp/1.png',
        date: "Дата"
    },
    {
        title: "Название",
        desc: "Описание",
        img: 'https://thumb.tildacdn.com/tild3438-3833-4962-b461-366433663365/-/resize/432x/-/format/webp/1.png',
        date: "Дата"
    }
]
function Blog() {
    return (
            <section className="py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl text-center">Тут как блог, картинки, описание, фото. ДЛЯ СЕО</h1>
                    </div>
                    <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.map((items, key) => (
                                <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                    <div>
                                        <div className="mt-3 space-y-2">

                                            <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                                {items.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                        </div>
                                        <img src={items.img} loading="lazy" alt={items.title}
                                             className="w-full rounded-lg"/>
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
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