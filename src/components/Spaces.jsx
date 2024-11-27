import spa from './spaces.module.css'

function Spaces() {
    return (
        <>
            <div className={spa.container}>
                <div className={spa.caja}>
                    <div className={spa.text}>
                        <div className={spa.text1}>
                            <h2>OUR SPACES</h2>
                            <div className={spa.linea}></div>
                            <div className={spa.rombo}></div>
                        </div>
                        <div className={spa.text2}>
                            <h1>Check Our Hotel Gallery</h1>
                        </div>
                        <div className={spa.text3}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ut mollitia nulla facilis dolor eligendi dolorum doloremque enim aspernatur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero, optio iure minus nesciunt reprehenderit?</p>
                        </div>
                    </div>
                </div>
                <div className={spa.cont_gallery}>
                    <div className={spa.images}>
                        <img src="/images/seccion2-1.jpg" alt="" />
                    </div>
                    <div className={spa.images}>
                        <img src="/images/seccion2.jpg" alt="" />
                    </div>
                    <div className={spa.images}>
                        <img src="/images/seccion2-1.jpg" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Spaces;