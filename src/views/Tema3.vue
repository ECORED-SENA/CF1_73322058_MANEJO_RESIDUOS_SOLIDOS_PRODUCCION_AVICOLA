<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Normativa ambiental aplicada al sector avícola
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6.my-3 
        p(data-aos="fade-down") Las producciones avícolas vienen mejorando los procesos ambientales y efectuando capacitación permanente de su personal de apoyo y empleados. Ello con el fin de cumplir los criterios de la norma y para trazar un horizonte de acción claro, que favorezca el alcance de objetivos y metas. 

        p(data-aos="fade-down") En tal proceso, se ha de tener en cuenta el Plan de Ordenamiento Territorial (POT), los permisos de vertimientos, la normatividad correspondiente a manejo de residuos y todo elemento técnico que favorezca el crecimiento de la producción y el posicionamiento de la empresa.                   
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.png', alt='')
    .bg3
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-10.bg2.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El objeto principal de procesos llevados con legitimidad, soporte técnico, cumplimiento de la normativa y pertinencia en general se verá reflejado en los impactos positivos con respecto al cuidado de los recursos naturales (agua, suelo, aire), fortalecimiento de los programas ambientales y comunitarios, producción de calidad, satisfacción de necesidades efectiva y oportuna, entre otros. 

      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-8 
          p(data-aos="fade-down") El siguiente esquema, presenta el diagrama general de los procesos avícolas; analícelo con atención y procure llevar registro, en su libreta personal, de los aspectos más importantes:

          .titulo-sexto.color-acento-contenido
            h5 Tabla 3
            span Procesos avícolas
          
          .tabla-a.color-acento-contenido.mb-5 
            table
              tbody
                tr.btop
                  td <b> Líneas genéticas<br>Granja de abuelas<br>Incubadora<br>Granjas reproductoras</b>
                  td Huevo / carne<br>Huevo / carne (huevo fértil)<br>Pollitas y pollitos reproductores<br>Huevo / carne (huevo fértil)
                tr
                  td <b> (Línea carne)<br>Pollos de engorde (granja pollo engorde)<br>Pollo final (planta beneficio)</b>
                  td (Línea huevo)<br>Pollitas ponedoras (granjas ponedoras)<br>Huevo comercial 

      .tarjeta.color-acento-contenido.bg1.p-3.mb-5(data-aos="flip-down")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/img29.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4(data-aos="fade-down").mb-1 Normatividad ambiental residuos sólidos
                p(data-aos="fade-down").mb-0 Conozca el listado de decretos, leyes, manuales y demás documentos que integran la normatividad relacionada con los manejos de residuos para la producción avícola.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_2_NormatividadAmbientalResiduosSolidos.pdf')" target="_blank")
                  span.ts Descargar
                  i.ts.fas.fa-file-download

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1   Buenas prácticas avícolas

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.png', alt='')      
      .col-lg-6.my-3 
        p(data-aos="fade-down") Las buenas prácticas en la producción avícola son, entre otras cosas, un sistema de acciones y procesos que reducen los riesgos de introducir o difundir agentes infecciosos en los planteles avícolas, y están constituidas por una serie de labores que garantizan la salud de las aves y de sus productos, alcanzando un resultado sano e inocuo para su distribución.

        p(data-aos="fade-down") Este manejo sistemático y técnico es ya una exigencia, a nivel mundial, por la inocuidad alimentaria, la salud de los trabajadores, el cuidado del medio ambiente y de las aves, en todos los procesos de producción, sanidad animal, suministro de agua y alimentos, entre otros.                 
    .bg4
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.svg', alt='')

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2   Salud y seguridad en el trabajo
    p(data-aos="fade-down").mb-5 Las empresas avícolas, hoy por hoy, implementan mecanismos de bienestar, tanto psicosocial como físico, para todos sus trabajadores. Estas medidas aportan no solo para la dignificación del trabajo, sino que aumentan la productividad y el buen clima organizacional. Adicionalmente, las empresas avícolas, cada vez más, aseguran para sus colaboradores un lugar de trabajo adecuado, donde reciben apoyo y orientación de otros prestadores interdisciplinares (enfermería, psicología, medicina, expertos técnicos, etc.).

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/img36.png', alt='')

    p(data-aos="fade-down").mb-5 Estos programas, para prevenir cualquier lesión o daño físico o mental, dentro de cada una de las cadenas productivas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/img37.png', alt='AvatarTop')
        .tarjeta.bg5
          .p-4
            h5.mb-3 Exámenes pre ocupacionales 
            p.mb-0 Realizan, sistemáticamente, exámenes pre ocupacionales a cada uno de sus operarios en algunas fases del periodo de contratación laboral.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/img38.png', alt='AvatarTop')
        .tarjeta.bg5
          .p-4
            h5.mb-3 Condiciones dignas 
            p.mb-0 Verifican permanentemente las condiciones de los puestos de trabajo.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/img39.png', alt='AvatarTop')
        .tarjeta.bg5
          .p-4
            h5.mb-3 Medidas preventivas y correctivas 
            p.mb-0 Aplican medidas correctivas, a tiempo, según las situaciones que se vayan identificando (seguridad, organización, mitigación de riesgos, etc.).
      .tarjeta-avatar
        img(src='@/assets/curso/temas/img40.png', alt='AvatarTop')
        .tarjeta.bg5
          .p-4
            h5.mb-3 Personal idóneo
            p.mb-0 Llevan a cabo procesos de contratación de personal idóneo para utilización de equipos especializados, pues, en ocasiones, los materiales o insumos pueden causar daño alguno en la salud humana.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/img41.png', alt='AvatarTop')
        .tarjeta.bg5
          .p-4
            h5.mb-3 Implementación e indumentaria adecuadas 
            p.mb-0 Aseguran la indumentaria e implementación necesarias y apropiadas para realizar las labores propias de la producción de carne y huevo de aves de corral.
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
