import Home from './Home';
import About from './About';

export default function ComponentsList() {
    return (
        // an array of object contains info about different components.
        [{ name: "Home", link: "/", component: <Home/> }, { name: "About", link: "/about", component: <About/> }] // it will be used as props in navbar to make set navitems and links
    )
}
