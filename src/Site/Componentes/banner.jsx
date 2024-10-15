import React from "react";
import "./banner.css";

function Banner() {
  return (
    <section className="banner" id="inicio">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="text-banner col-md-6 col-sm-12 mb-4">
            <h1 className="display-4">Soluções Digitais e Serviços Empresariais</h1>
            <p className="text-white">
              Revolucione sua marca e conquiste o mercado com nossas soluções digitais poderosas. Expandimos os
              horizontes da sua empresa com inovação e tecnologia de ponta, garantindo presença marcante e resultados
              excepcionais.
            </p>
            <div className="btn-banner">
              <a href="#servicos" className="btn btn-primary me-2">
           Serviços
              </a>
              <a href="https://wa.link/cibopv" className="btn btn-success">
                Contato
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-12 mb-3"
            data-tilt
            style={{
              willChange: "transform",
              transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            }}
          >
            <img src="img/img-banner.png" className="img-fluid" alt="Imagem do banner" />
          </div>
        </div>
      </div>
      <svg
        className="onda-svg"
        viewBox="0 0 1100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path fill="#fff" d="M 0 66 C 174 0 320 50 530 50 C 740 50 880 0 1100 66 V 100 H 0 Z"></path>
      </svg>
    </section>
  );
}

export default Banner;
