import './contact.css'

function Contact() {

    return (
        <div>
            <h1 class="contact-title">¡Veni a visitarnos!</h1>
            <div class="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0541909994026!2d-58.5499200845918!3d-34.6027911649563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb78c86f2a273%3A0x94eadad67dcca416!2sPablo%20Giorello%202100%2C%20B1676BVR%20Santos%20Lugares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1664372356378!5m2!1ses-419!2sar"
                    width="1100" height="600" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact;