import App from "./App";
import Home from "./pages/Home";
import Property from "./pages/Property";
import About from "./pages/About";
import PropertyDetail from "./components/PropertyDetail";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/properties',
                element: <Property />,
                children: [
                    {
                        path: '/properties/property-details/:id',
                        element: <PropertyDetail />
                    }
                ]
            },  
            {
                path: '/about',
                element: <About />
            }, 
        ]    
    }
]

export default routes;