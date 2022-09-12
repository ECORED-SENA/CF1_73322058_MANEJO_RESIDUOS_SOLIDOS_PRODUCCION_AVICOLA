<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Sistemas productivos avícolas
    p(data-aos="fade-down") Los sistemas productivos se determinan por la cantidad de terreno e inversión destinada a la producción, bien sea de pollo de engorde o de ponedoras; están clasificados en tres tipos de explotación: explotación intensiva, semi intensiva y extensiva o traspatio.
    p(data-aos="fade-down").mb-5 Estas son las definiciones básicas de los tipos de explotación en los sistemas productivos avícolas:   

    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Explotación intensiva
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Explotación intensiva
              p.mb-0 Es la más avanzada y donde las aves tienen un espacio muy limitado en jaulas, en encierro total, bajo todos los parámetros técnicos de producción.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Explotación semi intensiva
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Explotación semi intensiva
              p.mb-0 Se trata de la producción en alojamientos cerrados, con posibilidad de abrir o dejar abierto una compuerta para la zona de pastoreo. Está también enmarcada en parámetros técnicos y normatividad vigente.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Explotación extensiva o traspatio
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Explotación extensiva o traspatio
              p.mb-0 Es, de estas tres clasificaciones, la más rústica. Consiste en el manejo extensivo o traspatio, en el cual las aves están dispersas en un terreno y el manejo técnico es difícil de realizar, por el poco dominio que se logra sobre las aves.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1   Sistema extensivo 
    p(data-aos="fade-down") Es un mecanismo de explotación muy tradicional, cuyas características principales refieren: poca inversión, disposición de un terreno amplio para las aves, en el cual están dispersas buscando su alimentación, no cuenta con barreras y los sitios escogidos para descansar son árboles, lugares, estructuras o arbustos.

    p(data-aos="fade-down").mb-5 En estos lugares las aves ponen sus huevos o buscan refugio en las noches. La suplementación y alimentación están basadas, generalmente, en fuentes producidas por el predio y, de manera opcional, maíz o concentrado a determinadas horas del día.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La explotación extensiva es un manejo con poca mano de obra y con mínima inversión, pero con las aves no es posible llevar registros como:
          br
          br
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 Mortalidad (%).
          li 
            i.fas.fa-check
            p.mb-0 Peso corporal (g).
          li 
            i.fas.fa-check
            p.mb-0 Alimento (kg).
          li 
            i.fas.fa-check
            p.mb-0 Consumo alimento (g/ave/d).
          li 
            i.fas.fa-check
            p.mb-0 Conversión de alimento (kg/kg o g/g).
          li 
            i.fas.fa-check
            p.mb-0 Porcentaje de postura.
          li 
            i.fas.fa-check
            p.mb-0 Promedio de postura.
          li 
            i.fas.fa-check
            p.mb-0 Entre otros. 

    .row.justify-content-center.align-items-stretch.my-5           
      .col-lg-5.my-3(data-aos="fade-right")
        .cajon.color-primario.p-4.h-100
          h4.mb-3 VENTAJAS 
          h5.mb-3 Desventajas de la explotación extensiva
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-check
              p.mb-0 Rusticidad y resistencia de las aves.
            li 
              i.fas.fa-check
              p.mb-0 Menor inversión.
            li 
              i.fas.fa-check
              p.mb-0 Menos mano de obra.
            li 
              i.fas.fa-check
              p.mb-0 Fuentes de alimentación provenientes del predio.
            li 
              i.fas.fa-check
              p.mb-0 Fertilización del suelo con las excretas. 

      .col-lg-5.my-3(data-aos="fade-left")
        .cajon.color-primario.p-4.h-100
          h4.mb-3 DESVENTAJAS 
          h5.mb-3 Ventajas de la explotación extensiva:
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-check
              p.mb-0 Disponibilidad de terreno para las aves.
            li 
              i.fas.fa-check
              p.mb-0 Los parámetros productivos son muy difíciles de manejar.
            li 
              i.fas.fa-check
              p.mb-0 Mortalidad alta por depredadores y presentación de enfermedades no infecciosas e infecciosas.
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2   Sistema semi intensivo 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.my-3
        p(data-aos="fade-down") Se determina un área en la cual se instala un corral cerrado y otro espacio se deja para pastoreo; el área se encierra con material (malla, polisombra, madera o guadua); de día, los animales pueden estar en el lugar cerrado o en el abierto, pues las puertas están abiertas para que realicen el pastoreo, y en las horas de la noche, son encerrados en el gallinero. Los bebederos y comederos están dispersos en la zona, pero permiten la recolección de datos óptimos para los registros.

        p(data-aos="fade-down") Por lo general, tiene una densidad de un metro cuadrado por ave (1 mt2 /ave), los nidales están ubicados dentro del gallinero y está dispuesto con camas, utilizando materiales propuestos por las recomendaciones técnicas (viruta, cascarilla de arroz o afrecho de maíz).            
      .col-lg-6.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.png', alt='')

    p(data-aos="fade-down").mb-5 Como todos los mecanismos de explotación, la semi intensiva trae consigo algunos puntos de beneficio y otros de dificultad o desventaja:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img6.png', alt='')         
      .col-lg-8.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.svg', alt='') 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3   Sistema de explotación intensiva
    p(data-aos="fade-down") Se aprovecha todo el espacio, pero se maneja mucha densidad por área, con el fin de ser más eficiente en la producción. Requiere un manejo acorde con las recomendaciones técnicas y con mucha inversión y tecnología de los utensilios e instrumentos. Este sistema se caracteriza por el espacio reducido y la alta densidad de animales de acuerdo con la producción.
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img8.png', alt='') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-down") Entre las ventajas más destacadas de este tipo de explotación están: 
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Producción alta.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Conversión alimenticia.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Aprovechamiento del área con incremento de la densidad de animales.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Manejo de enfermedades.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Sistemas de buenas prácticas de manejo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Permite la implementación de nuevas tecnologías. 
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.png', alt='')      
      .col-lg-6
        p(data-aos="fade-down") Asimismo, se presentan algunas desventajas importantes, como:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Mayor capital de inversión.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Mano de obra.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Manejo de residuos sólidos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Necesidad de mercadeo del producto.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Necesita personal capacitado.

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4   Gallina ponedora 

    p(data-aos="fade-down") Las gallinas ponedoras o razas livianas son aquellos animales a los cuales se encamina la producción de huevos. Algunas razas destacadas para este propósito son: Leghorn (de la ciudad Livorno en Italia), Minorca, Catalina y Castellana Negra; todas ellas, razas originarias de España y con características particulares en su contextura.

    p(data-aos="fade-down").mb-5 Entre las características más evidentes y que sirven a la producción de ponedoras, se encuentran:

    .row.align-items-center.justify-content-center.mb-4.mb-md-5(data-aos="fade-right")
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img11.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Peso
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Peso
              p.mb-0 Tienen un peso corporal considerable de, máximo, 2 kg. Su ganancia diaria de peso es baja.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img12.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Color de cáscara
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Color de cáscara
              p.mb-0 Suelen proporcionar huevos con cáscara de color blanco.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img13.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Crestas y orejillas
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Crestas y orejillas
              p.mb-0 Presentan una cresta simple y su orejilla blanca y desarrollada.
    .row.align-items-center.justify-content-center.mb-4.mb-md-5(data-aos="fade-left")
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img14.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Plumaje
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Plumaje
              p.mb-0 A diferencia de las razas españolas, que suelen ser negras, presentan plumajes de color blanco o tonos claros.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img15.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
            h5.text-center.mb-0 Precocidad y persistencia
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Precocidad y persistencia
              p.mb-0 Presentan buen nivel de precocidad, comenzando a cumplir su propósito relativamente pronto y con alta persistencia por su capacidad de poner muchos huevos en ciclos reducidos de tiempo.

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')

    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5   Pollo de engorde
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='')                          
      .col-lg-8
        p(data-aos="fade-down") Los pollos de engorde o razas pesadas tienen su origen en Inglaterra y algunos países asiáticos. Son comúnmente llamados #[i Broilers], que hace referencia a "#[b pollo asado]", aunque en el mercado se denominan #[b líneas genéticas], porque son híbridos (cruzamientos) entre la línea materna de razas #[i White Plymouth Rock] o #[i New Hampshire], las cuales aportan características reproductivas y de producción, y la raza paterna #[i White Cornish], que aporta características de conformación.

        p(data-aos="fade-down").mb-3 Las líneas comerciales más comunes son:
        SlyderF(columnas="col-lg-6")(data-aos="fade-left")
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img18.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Lohmann Broiler (meat)
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img19.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Hibro 
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img20.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Ross X Ross
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img21.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Hubbard
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img22.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Cobb 500
          .tarjeta.bgwhite.crd.crd--100.py-3
            img.img-a.img-t.pb-5(src='@/assets/curso/temas/img23.png', alt='')
            .bggreen.text-center.text-white.p-4.mb-0
              h4.mb-0 Arbor Acres           

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
