import { createBrowserRouter } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import Home from "../../components/Home/Home";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Services from "../../components/Services/Services";
import Main from "../../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/detail/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <CardDetail></CardDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <p>Page not found</p>
            }
        ]
    }
])


export default router;