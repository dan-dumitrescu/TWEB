
import Contact from "./views/Contact";

import Profile from "./views/Profile";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

export const routes = Object.freeze([
    {
        path: "/",
        component: Login,
        name: ""
    }
    ,
    {
        path: "/Home",
        component: Home,
        name: "Home"
    },
   
    {
        path: "/Profile",
        component: Profile,
        name: "Profile"
    },
    {
        path: "/Projects",
        component: Projects,
        name: "Project"
    },
    {
        path: "/Contact",
        component: Contact,
        name: "Contact"
    }
    ,
    {
        path: "/signup",
        component: SignUp,
        name: ""
    },
]);