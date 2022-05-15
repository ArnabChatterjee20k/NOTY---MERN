import Protected_home from '../Home/Protected_home';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
export default function ComponentsList() {
    return (
        // an array of object contains info about different components.
        [
            { name: "Home", link: "/", component: <Protected_home/> },
            { name: "Login", link: "/login", component: <Login/> }, 
            { name: "Signup", link: "/signup", component: <Signup/> },
        ] // it will be used as props in navbar to make set navitems and links
        
        // [{ name: "Login", link: "/", component: <Login/> }, { name: "Signup", link: "/signup", component: <Signup/> }] // it will be used as props in navbar to make set navitems and links
    )
}
