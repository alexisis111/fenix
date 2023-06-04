import React, { useState } from 'react';

const Product = () => {
    const [image, setImage] = useState('https://dummyimage.com/400x400');
    const [price, setPrice] = useState('$58.00');

    const changeProduct = (imageUrl) => {
        setImage(imageUrl);

        // Изменить стоимость товара в зависимости от выбранной опции
        if (imageUrl === 'https://dummyimage.com/400x400') {
            setPrice('$58.00');
        } else if (imageUrl === 'https://dummyimage.com/400x400/000000') {
            setPrice('$65.00');
        } else if (imageUrl === 'https://dummyimage.com/400x400/4c79ff') {
            setPrice('$72.00');
        }
    };

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button
                                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                                    onClick={() => changeProduct('https://dummyimage.com/400x400')}
                                ></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                                    onClick={() => changeProduct('https://dummyimage.com/400x400/000000')}
                                ></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
                                    onClick={() => changeProduct('https://dummyimage.com/400x400/4c79ff')}
                                ></button>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
