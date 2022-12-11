import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from '../Pages/Home/Home/Home';
import Skills from "../Pages/Home/Skills/Skills";
import SkillsPages from "../Pages/SkillsPages/SkillsPages";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/home',
                element:<Home/>
            },

        ]
    },
    {
        path: '/blog',
        element:<Blog/>
    },
])

export default router;