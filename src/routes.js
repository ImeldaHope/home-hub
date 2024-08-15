import App from "./App";
import Home from "./pages/Home";
import Property from "./pages/Property";
import About from "./pages/About";
import PropertyDetail from "./components/PropertyDetail";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/properties',
                element: <Property />,
                
            },
            {
                path: '/properties-detail/:id',
                element: <PropertyDetail />
            },  
            {
                path: '/about',
                element: <About />
            }, 
        ]    
    }
]

export default routes;