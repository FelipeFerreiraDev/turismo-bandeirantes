import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import './styles.css'

export default function Historia() {
  return (
    <section className='historia'>

      <h1>História</h1>
      <div className='texto'>
        <h2>
          Como começou?
        </h2>

        <p>Até o Ano de 1920, a região era um sertão bruto, habitado apenas pelos índios da tribo Caingangues. O primeiro a explorar este território foi o Engenheiro Carlos Borromei, onde ergue seu acampamento em uma clareira aberta no meio das matas à margens do Ribeirão das Antas. Em 24 de dezembro de 1926, D. Josefina Alves de Lima, proprietária de grande gleba de terras na Fazenda Laranjinha, ao proceder a divisão desse imóvel, vendeu a João Manoel dos Santos dez alqueires de terra, destinados a fundação de um povoado, que deveria ser denominado Invernada.</p>
        <p>A 12 de abril de 1929, foi criado o Distrito de Invernada, como parte integrante do Município de Jacarezinho, sendo instalado no dia 8 de dezembro do mesmo ano. Em julho de 1930, a Empresa Ferroviária São Paulo - Paraná, inaugurou uma estação ferroviária, a 3 quilômetros do patrimônio de Invernada, que passou a denominar-se Bandeirantes, surgindo, então, um povoado nas proximidades da estação, em terreno de propriedade de Juvenal Mesquita. Em 27 de setembro de 1931, um pugilo de homens de boa vontade, iniciou um trabalho de coligação em favor do progresso da estação e, consequentemente, sobreveio a queda de Invernada, onde se achavam o cartório, a Coletoria Estadual, casas, hotéis, casas de comércio, farmácias, correios, etc.</p>
        <p>Em 1932, o então Interventor Federal no Paraná, visitou Bandeirantes, notando que o povo desejava a criação do município. Houve a unificação dos dois povoados: Bandeirantes e Invernada. Dando inicio a história de Bandeirantes</p>

        <h2>
          Bandeirantes: “Um lugar de fé, natureza e tradições”.
        </h2>

        <p>Localizada no Norte Pioneiro do Paraná, Bandeirantes se distingue pela terra fértil e pelo povo oriundo de diversas partes do Brasil e do mundo. O município tem forte influência dos paulistas, mineiros, italianos, japoneses e portugueses, origem primordial das vocações econômicas e turísticas do município. </p>
        <p>A base da economia no município é o cultivo de uva fina de mesa, pimentão, pepino, cana-de-açúcar e, principalmente, soja e milho. Anualmente, a festa do Milho Verde movimenta a economia local.</p>
        <h2>
          Bandeirantes em números.
        </h2>

        <p><b>Inauguração:</b> 14 de novembro de 1934 <br />

          <b>Gentílico:</b> Bandeirantense<br />

          <b>População:</b> 32.184 (Censo IBGE [2010])<br />

          <b>Área da unidade territorial [2022]:</b> 445,192 km²<br />

          <b>Densidade demográfica:</b> 72,29 hab/km² <br />

          <b>Bioma:</b> Mata Atlântica<br />

          <b>Altitude:</b> 420 m<br />

          <b>Clima:</b> Tropical. Verão é longo, quente, abafado e de céu quase encoberto; o inverno é curto, agradável e de céu quase sem nuvens.<br />

          <b>Temperatura média:</b> 15°C a 31°C.<br />

          <b>Umidade média relativa do ar:</b> 3 a 91%.<br />

          <b>Renda per capita (média mensal):</b> 1,9 salários mínimos (IBGE 2020).<br />

          <b>Índice de Desenvolvimento Humano (IDH):</b> 0,727 (IBGE 2010)<br />

          <b>PIB per capita [2019]:</b> 25.807,42 R$ <br />

        </p>
      </div>

      <div className="imagens">

        <div className="container">
          <img className='brasao' src="\src\assets\img\historia\brasao.png" />
          <div className="overlay2">
            <div className="text">Brasão do Município</div>
          </div>
        </div>
        <div className="container">
          <img className='bandeira' src="\src\assets\img\historia\Bandeirantes.png" />
          <div className="overlay1">
            <div className="text">Bandeira do Município</div>
          </div>
        </div>
      </div>


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\restaurante\01.jpg" />
        </SwiperSlide>
      </Swiper>
    </section >
  )
}