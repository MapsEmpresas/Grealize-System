import React from "react";
import './menu.css'
function Menu() {
  return (
    <div class="container">
        <nav class=" nav navbar navbar-expand-md navbar-light fixed-top">
            <div class="container">
                <a href="/" class="navbar-brand">
                    <img src="img/logo.png" alt="logo"/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a href="#inicio" class="nav-link">Inicio</a></li>
                        <li class="nav-item"><a href="#sobre" class="nav-link">Sobre</a></li>
                        <li class="nav-item"><a href="#servicos" class="nav-link">Serviços</a></li>
                        <li class="nav-item"><a href="#contato" class="nav-link">Contato</a></li>
                    </ul>
                    <div class="d-flex btn-nav">
                        <a href="https://wa.link/cibopv" class="btn btn-success me-2 px-3 text-white"><i
                            class="fa-brands fa-whatsapp text-white px-2"></i></a>
                            <a href="/app" class="btn btn-primary me-2 px-3 text-white">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Menu;