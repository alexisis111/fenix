import React from 'react';

const videoUrls = [
    {
        url: 'https://www.youtube.com/embed/pvYc1BhZmKc',
    },
    {
        url: 'https://youtube.com/embed/Ozu_ZE3wSQs',
    },
    {
        url: 'https://www.youtube.com/embed/-N5qVlnu6vY',
    },

]

function Video() {
    return (
        <section className="bg-gray-200">
            <h1 className="text-gray-800 font-extrabold text-center mb-8 text-xl md:text-5xl">Видеогалерея</h1>
            <div className="p-4 px-16 grid gap-x-8 gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    videoUrls.map((v) => (
                        <iframe className="w-full aspect-video" src={v.url}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    ))
                }
            </div>
        </section>

    );
}

export default Video;