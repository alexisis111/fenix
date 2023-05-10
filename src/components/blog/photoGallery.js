import React from 'react';

function PhotoGallery() {
    const photos = [...Array(39)].map((_, i) => ({
        src: require(`../../assets/img/photo/photo${i + 1}.jpg`),
        alt: `Image ${i + 1}`
    }));

    return (
        <div className='py-8 bg-gray-200'>
            <h1 className="text-gray-800 font-extrabold text-center mb-8 text-xl md:text-5xl">Фотогалерея</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 ">
                {photos.map((photo, index) => (
                    <div className="relative" key={index}>
                        <img
                            data-fancybox="gallery"
                            className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer"
                            src={photo.src}
                            alt={photo.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
