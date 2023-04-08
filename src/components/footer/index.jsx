import '../footer/index.css'
import imgFace from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/gorjeo.png'
import whatsapp from '../../assets/images/whatsapp.png'


function Footer() {

    return (
        <div>
            <footer>
            <section class="footer-nav">
                <div class="footer-text">
                    <h1>STALKEANOS EN NUESTRAS REDES SOCIALES</h1>
                </div>
                
                <div class="footer-red-socials">
                    <a href="https://www.instagram.com/saphirus.bri/" target="_blank"><img src={instagram} width="70px" height="70px"/></a>
                    <a href="https://www.facebook.com/saphirus.bri" target="_blank"><img src={imgFace}
                        alt="face" width="70px" height="70px"/></a>
                    <a href="https://twitter.com/saphirus.bri" target="_blank"><img src={twitter} alt="twitter"
                        width="70px" height="70px"/></a>
                </div>
            </section>
            <div class="footer-end">
                <div class="footer-text">
                    <h5>Copyright 2023 © Creado por Lopez Alexis para Saphirus.Bri! todos los derechos reservados</h5>
                </div>
                <div class="wp-footer">
                    <a href="https://wa.me/1137623836?text=Hola,%20somos%20saphirus,%20dejanos%20tu%20mensaje%20y%20nos%20contactamos%20a%20la%20brevedad"
                        target="_blank"><img src={whatsapp} alt="whatsapp" width="70px" height="70px"/></a>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer


