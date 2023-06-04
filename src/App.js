import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about";
import Contacts from "./pages/contacts";
import NotFoundPage from "./pages/notFoundPage";

const router = createBrowserRouter([
    {path: '/', element: <Homepage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/contacts', element: <Contacts/>},
    {path: '*', element: <NotFoundPage />},

])

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
