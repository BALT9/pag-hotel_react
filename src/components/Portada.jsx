import { useState } from "react";
import port from "./portada.module.css"

function Portada(){
    const [clase,setClase] = useState('uno');
    
    function menuIcono(){
        setClase(clase === 'uno' ? 'dos' : 'uno');
    };
    return(
        <>
            <div className={port.container_port}>
                <img src="https://i0.wp.com/amenitiz.com/wp-content/uploads/2022/10/dbnsfzkttcktgyk78guu.jpg?fit=2048%2C1365&ssl=1" alt="" />
                <div className={port.overlay}></div>  {/* Capa oscura */}
                
                <div className={port.menu} onClick={menuIcono}>
                    <span>&#9776;</span>
                </div>
                <div className={port.nav}>
                    <div className={`${port.links} ${port[clase]} `}>
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Our Services</a>
                        <a href="">Blog</a>
                        <a href="">Contact Us</a>
                        <button>Book Now</button>
                    </div>
                    
                </div>
                <div className={port.texts}>
                    <div className={port.text1}>
                        <h3>GET LUXURY AND COMFORT</h3>
                    </div>
                    <div className={port.text2}>
                        <h1>Welcome To The Place Where Luxury Meets Affordability</h1>
                    </div>
                    <div className={port.button}>
                        <button>Explore Now</button>
                    </div>
                </div>
                
            </div>
            <div className={port.fecha}>
                    <div className={port.cont_cajas}>
                        <div className={port.caja}>
                            <label>Fecha de Llegada:</label>
                            <input type="date" id="llegada" name="llegada" required></input>
                        </div>
                        <div className={port.caja}>
                            <label>Fecha de Salida:</label>
                            <input type="date" id="llegada" name="llegada" required></input>
                        </div>
                        <div className={port.caja}>
                            <label>Guest</label>
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                        <div className={port.caja}>
                            <button>Check Avaliable </button>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Portada;