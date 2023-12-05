import { createBrowserRouter } from "react-router-dom"
import App from './../App/App';
import Error from './../Pages/Error/Error';
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Project from "../Pages/Project/Project";
import UserDetails from "../Components/UserDetails/UserDetails";
import Posts from "../Components/Posts/Posts";
import PostDetails from "../Components/PostDetails/PostDetails";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children:[
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/project',
                    element: <Project/>,
                    loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
                },
                {
                    path: '/users/:userId',
                    element: <UserDetails/>,
                    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
                },
                {
                    path: '/posts',
                    element:<Posts/>,
                    loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
                },
                {
                    path: '/posts/:Id',
                    element: <PostDetails/>,
                    loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`)
                }

            ]
        },
        {
            path: '*',
            element: <Error/>
        }
    ])

export default router;
