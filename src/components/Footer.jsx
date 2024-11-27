import foo from './footer.module.css'

function Footer(){
    return(
        <>
            <div className={foo.container}>
                <div className={foo.footer}>
                    <div className={foo.contact}>
                        <h1>Diamond Luxury</h1>
                        <i className='bx bxl-facebook-square'></i>
                        <i className='bx bxl-whatsapp'></i>
                        <i className='bx bxl-tiktok' ></i>
                        <p>user@email.com</p>
                    </div>
                    <div className={foo.info}>
                        <div className={foo.inf}>
                            <h1>LEARN MORE</h1>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className={foo.inf}>
                            <h1>RESOURCES</h1>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;