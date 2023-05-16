import React from 'react';
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import About from "../components/about/about";
import Parallax from "../components/parallax/parallax";
import PhotoGallery from "../components/blog/photoGallery";
import Video from "../components/videogallery/video";
import Otzyvu from "../components/otzyvu/otzyvu";
import Faq from "../components/faq/faq";
import Map from "../components/map/map";
import Footer from "../components/footer/footer";

function Homepage() {
    return (
        <>
            <Navbar/>
            <Main/>
            <About />
            <Parallax />
            <PhotoGallery/>
            <Video />
            <Otzyvu />
            <Faq />
            <Map />
            <Footer />
        </>
    );
}

export default Homepage;