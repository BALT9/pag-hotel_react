import About from "./components/About";
import Footer from "./components/Footer";
import Our from "./components/Our";
import Portada from "./components/Portada";
import Spaces from "./components/Spaces";

function Landing(){
    return(
        <>
            <Portada></Portada>
            <About></About>
            <Our></Our>
            <Spaces></Spaces>
            <Footer></Footer>
        </>
    )
}
export default Landing;