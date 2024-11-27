import our from './our.module.css'

function Our(){
    return(
        <>
            <div className={our.container}>
                <div className={our.seccion}>
                    <div className={our.seccionText}>
                        <div className={our.caja_title}>
                            <h2>OUR CHOICE</h2>
                            <div className={our.linea}></div>
                            <div className={our.rombo}></div>
                        </div>
                        <div className={our.text2}>
                            <h1>The best room just for you!</h1>
                        </div>
                    </div>
                    <div className={our.textp}>
                        <p className={our.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi alias ipsum rerum aut sint saepe autem architecto blanditiis? Autem.</p>
                    </div>
                </div>
                {/* gallery */}
                <div className={our.galery}>
                    <div className={`${our.ima} ${our.ima1}`}>
                        <h3>$300/night</h3>
                        <img src="./images/seccion2.jpg" alt="" />
                        <p>Master Room</p>
                    </div>
                    <div className={`${our.ima} ${our.ima2}`}>
                        <h3>$300/night</h3>
                        <img src="./images/seccion2.jpg" alt="" />
                        <p>Master Room</p>
                    </div>
                    <div className={`${our.ima} ${our.ima3}`}>
                        <h3>$300/night</h3>
                        <img src="./images/seccion2.jpg" alt="" />
                        <p>Master Room</p>
                    </div>
                    <div className={`${our.ima} ${our.ima4}`}>
                        <h3>$300/night</h3>
                        <img src="./images/seccion2.jpg" alt="" />
                        <p>Master Room</p>
                    </div>
                    <div className={`${our.ima} ${our.ima5}`}>
                        <h3>$300/night</h3>
                        <img src="./images/seccion2.jpg" alt="" />
                        <p>Master Room</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Our;