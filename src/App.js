import './App.css';
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import Blog from "./components/blog/blog";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Parallax from "./components/parallax/parallax";
import Video from "./components/videogallery/video";
import Otzyvu from "./components/otzyvu/otzyvu";
import Faq from "./components/faq/faq";
import Map from "./components/map/map";
import PhotoGallery from "./components/blog/photoGallery";



function App() {
    return (
        <>
            <Navbar/>
            <Main/>
            <About />
            <Parallax />
            <PhotoGallery/>
            {/*<Blog />*/}
            <Video />
            <Otzyvu />
            <Faq />
            <Map />
            <Footer />
        </>
    );
}

export default App;
