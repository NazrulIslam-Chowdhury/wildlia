import { createBrowserRouter } from "react-router-dom";
import AddReview from "../../components/addReview/AddReview";
import AddService from "../../components/addService/AddService";
import Blog from "../../components/Blog/Blog";
import CardDetail from "../../components/CardDetail/CardDetail";
import Home from "../../components/Home/Home";
import Login from "../../components/login/Login";
import MyReviews from "../../components/myReviews/MyReviews";
import Register from "../../components/register/Register";
import Services from "../../components/Services/Services";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: ({ params }) => fetch(`https://wildlia-server.vercel.app/services/${params.id}`),
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
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/add-review',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '*',
                element: <p className="text-black text-center">Page not found</p>
            }
        ]
    }
])


export default router;