import './App.css';
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import Blog from "./components/blog/blog";
import About from "./components/about/about";
import Footer from "./components/footer/footer";


function App() {
    return (
        <>
            <Navbar/>
            <Main/>
            <About />
            <Blog />
            <Footer />
        </>
    )
        ;
}

export default App;
