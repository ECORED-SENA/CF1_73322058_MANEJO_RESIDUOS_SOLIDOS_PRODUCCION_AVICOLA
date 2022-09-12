export default {
  global: {
    componenteFormativo: 'Fundamentos de la producción avícola.',
    descripcionCurso:
      'Con este componente, el aprendiz se afianzará en el manejo apropiado de residuos sólidos en la producción avícola. Asimilará conceptos y prácticas básicas de sistemas productivos avícolas: pollos de engorde y ponedoras, alojamiento e ingreso, nutrición, control sanitario, entre otros. Conceptualización y apropiación de la normativa aplicada a cuidado ambiental y buenas prácticas avícolas y de salud y seguridad en el trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas productivos avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema extensivo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Semi intensivo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistema de explotación intensiva',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gallina ponedora',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Pollo de engorde',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos productivos avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Alojamiento e ingreso',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Nutrición y alimentación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Control sanitario',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa ambiental aplicada al sector avícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Buenas prácticas avícolas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Salud y seguridad en el trabajo',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'SISTEMAS PRODUCTIVOS AVÍCOLAS',
      referencia:
        'La Finca de Hoy. (2017). <i>Ventajas y desventajas de los sistemas de producción avícola | La Finca de Hoy</i> [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gOVjA9hnzWA',
    },
    {
      tema: 'PROCESOS PRODUCTIVOS AVÍCOLAS',
      referencia:
        'Red Factive. (2021). <i>Producción y Manejo Sanitario Avícola </i>[Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=honRk8gFr_0',
    },
    {
      tema: 'NORMATIVA AMBIENTAL APLICADA AL SECTOR AVÍCOLA',
      referencia:
        'FENAVI – FONAV. (2020). <i>La hora de la sostenibilidad avícola - Normativa ambiental vigente en el sector avícola</i> [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WNm9oJGcjtY',
    },
    {
      tema: 'GALLINA PONEDORA Y POLLO DE ENGORDE',
      referencia:
        'La Finca de Hoy. (2019). <i>Doble propósito: Gallinas ponedoras y pollos de engorde</i> [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ewTD_pQizVY',
    },
    {
      tema: 'BUENAS PRÁCTICAS AVÍCOLAS',
      referencia:
        'Instituto Colombiano Agropecuario. (2020). <i>ICA Comunica Tv- Granjas avícolas bioseguras certificadas por el ICA</i>  [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r7Gc-xgLlcg',
    },
  ],
  glosario: [
    {
      termino: 'AVICULTURA',
      significado:
        'es una rama de la zootecnia que se encarga de la cría, mejora y explotación de las aves de corral.',
    },
    {
      termino: 'GRANJA',
      significado:
        'es un terreno utilizado para la producción de una especie pecuaria.',
    },
    {
      termino: 'IMPLEMENTACIÓN',
      significado: 'ejecución de procesos y estructuras de un sistema.',
    },
    {
      termino: 'INFORMACIÓN',
      significado:
        'son datos de importancia en un tema determinado que sirven para un proceso de producción.',
    },
    {
      termino: 'INSUMO',
      significado:
        'es un servicio o materia prima que satisface una necesidad del ser humano.',
    },
    {
      termino: 'MANEJO',
      significado:
        'un procedimiento mediante el cual se entra en contacto directo con las aves de corral.',
    },
    {
      termino: 'NORMATIVA',
      significado: 'conjunto de leyes o normas vigentes en una entidad.',
    },
    {
      termino: 'PARÁMETRO',
      significado:
        'un elemento que permite clasificar y evaluar algunas características (el rendimiento, la amplitud o la condición). ',
    },
    {
      termino: 'PRODUCCIÓN',
      significado:
        'fabricación de un producto mediante el trabajo manual o mecánico.',
    },
    {
      termino: 'RESIDUO SÓLIDO',
      significado:
        'son los materiales de desecho tras ser utilizados. Se compone de desechos procedentes de los materiales utilizados en los procesos de la empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, D. y Jaramillo, A. (s. f.). <i>Manejo de pollo de engorde</i>. SENA. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4618/Manejo_de_pollo_de_engorde.PDF',
    },
    {
      referencia:
        'Fondo Nacional Avícola [FENAVI]. (2014). <i>Cartilla – Normativa ambiental en el sector Avícola.</i> ',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartillas/cartilla-normativa-ambiental-en-el-sector-avicola/#cartilla-normativa-ambiental/3',
    },
    {
      referencia:
        'González, K. (2018). <i>Construcción de galpones para pollos de engorde</i>. Zootecnia y veterinaria es mi pasión. ',
      link:
        'https://zoovetesmipasion.com/avicultura/pollos/estructura-del-galpon-pollos-engorde/',
    },
    {
      referencia:
        'Navarro, C. (2018). <i>Buenas Prácticas en la Producción Avícola</i>. Universidad Nacional de Córdoba. ',
      link:
        'https://rdu.unc.edu.ar/bitstream/handle/11086/6348/Navarro%2C%20C.%20Gu%C3%ADa%20de%20buenas%20pr%C3%A1cticas%20en%20la%20producci%C3%B3n%20av%C3%ADcola.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Oscarfox. (2018).  <i>Gallinas razas - Gallinas baratas más ponedoras del MUNDO</i>. Paragallinas. ',
      link:
        'https://paragallinas.blogspot.com/2018/11/gallinas-razas-gallinas-baratas-mas.html',
    },
    {
      referencia:
        'Pedroza, J. (2005). <i>Manual de producción avícola</i>. SENA. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4271/avicultura_2005.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Polo, K. (s. f.). <i>Formulación para un plan integral de residuos sólidos para la Avícola Villa Mabe ubicado en El Vino - Cundinamarca</i>. Universidad Militar Nueva Granada. ',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/12097/FORMULACI%D3N%20PARA%20UN%20PLAN%20INTEGRAL%20DE%20RESIDUOS%20S%D3LIDOS%20PARA%20LA%20AVICOLA%20VILLA%20MABE%20UBICADO%20EN%20EL%20VINO%20-%20%20CUNDINAMARCA.pdf?sequence=1',
    },
    {
      referencia:
        'Rojas, F. (2016). <i>Condiciones de Salud y Seguridad en el trabajo del personal que labora en una empresa productora de huevos, concentrado de aves y molienda de trigo, de la zona de Cachipay, Mosquera y Bogotá durante el periodo de Agosto de 2016</i>. Pontificia Universidad Javeriana. ',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/21815/RojasCardenasFredyJimeno2016.pdf',
    },
    {
      referencia:
        'Rueda, L. (2019). <i>Gestión integral de los residuos sólidos generados en la planta de beneficio avícola “El buen sabor” del municipio del Socorro, Santander</i>. Universidad Libre. ',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/20286/Trabajo%20de%20grado.pdf?sequence=1',
    },
    {
      referencia:
        'Tamayo, M. (2014). <i>Propuesta de manual técnico para el manejo y aprovechamiento de residuos orgánicos avícolas generados en el proceso de producción de huevos</i>. Universidad Libre. ',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/10637/PROYECTO%20DE%20GRADO%20MILENA%20TAMAYO.pdf?sequence=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'James Dubán Lozano Cuéllar',
        cargo: 'Experto temático',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Liliana Marcela Alarcón Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Meléndez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
