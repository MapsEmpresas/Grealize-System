import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
    return (
        <div class=" footer" id="contato">
        <footer class="py-3 mt-5">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#inicio" class="nav-link px-2 text-body-secondary">Inicio</a></li>
                <li class="nav-item"><a href="#sobre" class="nav-link px-2 text-body-secondary">Sobre</a></li>
                <li class="nav-item"><a href="#servicos" class="nav-link px-2 text-body-secondary">Serviços</a>
                </li>
                <li class="nav-item"><a href="#contato" class="nav-link px-2 text-body-secondary">Contato</a>
                </li>
            </ul>
            <p class="text-center">&copy; 2021 G Realize</p>
        </footer>
    </div>
    );
}

export default Footer;