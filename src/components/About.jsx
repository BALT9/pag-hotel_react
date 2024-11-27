import abo from './about.module.css'

function About(){
    return(
        <>
            <div className={abo.container_abo}>
                <div className={abo.cont}>
                    <div className={abo.caja}>
                        <div className={abo.text}>
                            <div className={abo.text1}>
                                <h2>ABOUT US</h2>
                                <div className={abo.linea}></div>
                                <div className={abo.rombo}></div>
                            </div>
                            <div className={abo.text2}>
                                <h1>At Diamond Luxury Hotels</h1>
                            </div>
                            <div className={abo.text3}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ut mollitia nulla facilis dolor eligendi dolorum doloremque enim aspernatur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero, optio iure minus nesciunt reprehenderit?</p>
                            </div>
                            <div className={abo.textButon}>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className={abo.caja}>
                        <img src="/images/seccion2.jpg" alt="" className={abo.ima1} />
                        <img src="/images/seccion2-1.jpg" alt=""  className={abo.ima2} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;