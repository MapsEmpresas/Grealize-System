import React from "react";
import './features.css'
function Features(){
    return (
      <section class="py-5 mt-1" id="sobre">
      <div class="linha-branca">
      </div>
      <div class="container pb-5 sobre col-10">
          <div class="dados-sobre row">
              <div class="img-sobre col-md-5 col-lg-5 col-sm-2 col-12">
                  <img src="img/img-sobre.png" alt="img1" class="img-sobre1 img-fluid" />
              </div>
              <div class="text-sobre col-md-7 col-12 text-white">
                  <div class="titulo-caixa text-center">
                      <h1 class="text-center py-4 mb-2">Sobre Nós</h1>
                      <div class="text-center">
                          <p className="text-white">Na Grealize, somos apaixonados por transformar ideias em realidades digitais. Nossa missão é ajudar empresas de todos os tamanhos a se destacarem no mercado por meio de soluções inovadoras em marketing e criação de sites. Com uma equipe especializada e focada em resultados, oferecemos estratégias personalizadas que impulsionam a presença online e conectam marcas ao público certo.
<br /><br />
Seja para criar uma identidade visual impactante, desenvolver um site otimizado e responsivo, ou para gerenciar campanhas de marketing digital que convertem, estamos prontos para elevar o potencial da sua empresa. Na Grealize, o sucesso dos nossos clientes é a nossa maior conquista.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </section>

      );
}
export default Features;