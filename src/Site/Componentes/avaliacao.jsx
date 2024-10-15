import React, { useState } from 'react';
import './avaliacao.css'

const Avaliacao = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Facilidade na Localização",
      content: "A empresa de marketing foi fundamental na criação do nosso site, integrando de forma eficiente o Google Maps. Agora, nossos clientes encontram facilmente nossa localização e podem nos visitar sem problemas.",
      user: "Ana Silva",
      image: "img/img-user.png",
    },
    {
      title: "Visibilidade Aumentada",
      content: "Graças aos serviços da empresa de marketing, nosso site foi otimizado com o Google Maps, o que resultou em uma visibilidade muito maior online. Isso nos ajudou a atrair novos clientes e expandir nossa presença digital.",
      user: "Cliente Anônimo",
      image: "img/img-user.png",
    },
    {
      title: "Integração Perfeita",
      content: "Estamos muito satisfeitos com a integração do Google Maps no nosso site. A empresa de marketing fez um excelente trabalho em tornar a experiência do usuário intuitiva, permitindo que nossos clientes encontrem nossos escritórios e pontos de venda de maneira rápida e fácil.",
      user: "Cliente Anônimo",
      image: "img/img-user.png",
    },
    {
      title: "Suporte Profissional",
      content: "Recebemos um suporte excepcional da empresa de marketing durante todo o processo de criação do site e integração do Google Maps. Sua equipe foi proativa e sempre esteve disponível para responder nossas dúvidas e garantir que todas as funcionalidades estivessem operando perfeitamente.",
      user: "Cliente Anônimo",
      image: "img/img-user.png",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="carousel py-5 mt-3" aria-label="Feedbacks">
      <div className="text-center py-4">
        <small>O que andam dizendo?</small>
        <h1>Avaliações de Clientes</h1>
      </div>
      <ol className="carousel__viewport">
        {slides.map((slide, index) => (
          <li
            key={index}
            id={`carousel__slide${index + 1}`}
            className={`carousel__slide ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="feedback py-5 mx-3">
              <h3 className="pb-3">{slide.title}</h3>
              <p>{slide.content}</p>
              <div className="user text-center">
                <img src={slide.image} alt="" />
                <h4>{slide.user}</h4>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <aside className="carousel__navigation">
        <button className="carousel__prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="carousel__next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </aside>
    </section>
  );
};

export default Avaliacao;
