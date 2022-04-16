import { render } from "react-dom";
import 'animate.css';
import Studio from "sauveur.js";
import pages from './'


const Layout = () => {

    return ( 
    <Studio.App.Core pages={pages}/>
    )

}

render(
    <Layout/>, document.getElementById("root")
);