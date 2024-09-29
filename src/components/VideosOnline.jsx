import React from "react";
import Volver from "./Volver";
import { Box } from "@mui/material";
import Poster from "../assets/miniatura.jpg"

const VideosOnline = () => {
  
  const videos = [
    {
      id: 1,
      orden: 1,
      title: "QUÉ ES EL PORCELANATO LÍQUIDO: TODO LO QUE NECESITAS SABER",
      description:
      `En este video, te sumergiremos en el fascinante universo de los pisos con resina epóxica, también conocidos como porcelanato líquido. Descubrirás los secretos y técnicas detrás de esta innovadora tendencia en el diseño de interiores que está revolucionando el mundo de la decoración. 
      1. ¿Qué es el porcelanato líquido?
      2. Humedad
      3. Tipos de superficie
      4. Preparación de la superficie
      5. Nivelación de la superficie
      6. Imprimación epóxica
      Ya seas un profesional experimentado o un entusiasta del bricolaje, este video te proporcionará todos los conocimientos necesarios para sumergirte en el apasionante mundo del porcelanato líquido. ¡Prepárate para transformar tus espacios con elegancia y modernidad gracias a esta increíble solución de pavimentación! No esperes más y comienza a crear impresionantes pisos con resina epóxica, ¡el límite es tu imaginación!
      `,
      url:
      `https://player.vimeo.com/video/411795230?h=210c4e5a38&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`
    },{
      id: 2,
      orden: 2,
      title: "PISOS CON RESINA EPÓXICA: DESCUBRE EL FASCINANTE MUNDO DEL PORCELANATO LÍQUIDO",
      description:
      `En este emocionante video, exploraremos el maravilloso universo de los pisos con resina epóxica y descubriremos todos los secretos detrás del enigmático "porcelanato líquido". Si estás buscando una solución de pavimentación innovadora y con un acabado espectacular, este es el lugar adecuado para ti.
      Contenidos del video:

      1. Imprimación de la superficie
      2. Aplicación del porcelanato líquido
      3. Características del porcelanato líquido
      4. Pigmentación
      5. Mantenimiento
      
      Desde aficionados al bricolaje hasta expertos en decoración, este video es para todos los entusiastas que deseen agregar un toque de elegancia y modernidad a sus espacios. Aprende todo sobre la aplicación, características y mantenimiento de los pisos con resina epóxica. ¡Súmate a la tendencia del porcelanato líquido y convierte tus ambientes en lugares asombrosos!
      `,
      url:
      `https://player.vimeo.com/video/411941716?h=82e2a70450&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture` 
    },{
      id: 3,
      orden: 3,
      title: "DECORACIÓN DE IMPACTO: APLICACIÓN DE PISOS 3D.",
      description:
      `En este video, te brindaremos todo lo que necesitas saber sobre pisos 3D con resina epoxi. Descubrirás cómo desatar tu creatividad, ya sea en el baño de tu hogar o en cualquier entorno comercial. Aprenderás las técnicas para incorporar modernidad y buen gusto en tus espacios. 
      Donde podemos aplicar pisos 3D,
      Limpieza de la superficie,
      Nivelación de la superficie,
      Lijado e imprimación de la superficie,
      Seleccion y aplicacion del vinilo.
      ¿Eres un profesional experimentado o simplemente un entusiasta del hazlo tú mismo?
¡Este video es para ti! Prepárate para transformar tus espacios con elegancia y modernidad, gracias a esta asombrosa solución de pavimentación. ¡Es hora de empezar a crear pisos impresionantes con efecto tridimensional!
      `,
      url:
      `https://player.vimeo.com/video/412046554?h=3379d72087&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },{
      id: 4,
      orden: 4,
      title: "VITRIFICADO 3D: IMÁGENES SOBRE PORCELANATO LÍQUIDO TRANSPARENTE.",
      description:
        "Descubre el Vitrificado 3D con Resina Epóxica sobre Porcelanato Líquido. Aprende a crear pisos únicos y resistentes con diseños transparentes y brillantes. ¡Inspírate y déjate cautivar por esta fascinante técnica!. Pisos 3D y Murales. Si eres un entusiasta del bricolaje o un profesional en busca de inspiración, este video te proporcionará las herramientas y conocimientos necesarios para lograr impresionantes pisos vitrificados en 3D. ¡No te lo pierdas y únete a nosotros en esta fascinante aventura de la resina epóxica y el porcelanato líquido!",
      url:
      `https://player.vimeo.com/video/412127062?h=bff93df06c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },{
      id: 5,
      orden: 5,
      title: "MESAS CON RÍO DE RESINA: PARTE 1",
      description:
      `En este video, te enseñaremos los pasos necesarios para seleccionar y preparar la madera ideal para tu proyecto de mesas con río de resina. Descubrirás los secretos y procesos para que tu madera sea perfecta. Contenido:
      1. ¿Cómo elegir tu madera?
      2. Porosidad de la madera
      3. Color de tu madera
      4. Maderas más aconsejadas y menos aconsejadas
      5. Herramientas
      6. Preparación del molde
      Ya seas un profesional experimentado o un entusiasta, este video te proporcionará todos los conocimientos necesarios para sumergirte en el apasionante mundo de las mesas con río de resina. No esperes más y comienza a crear impresionantes mesas con río de resina, ¡el límite es tu imaginación! 
      `,
      url:
      `https://player.vimeo.com/video/411615853?h=c56a173c43&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },{
      id: 6,
      orden: 6,
      title: "MESAS CON RÍO DE RESINA: PARTE 2",
      description:
      `¡Bienvenidos de nuevo a nuestra serie sobre mesas con río de resina! En esta emocionante segunda parte, nos adentraremos en el proceso crucial de imprimación de la superficie. Prepárense para descubrir los secretos detrás de la creación de estas impresionantes piezas de mobiliario que combinan arte y funcionalidad de manera espectacular.


      Preparación de Superficie: Descubre cómo preparar la madera para la resina, logrando una base lisa y nivelada.
      Producto Estelar: Conoce la resina y el catalizador, una potente combinación para proteger y realzar la madera.
      Mezcla Precisa: Aprende las proporciones exactas de resina y activador para una mezcla perfecta y controlada.
      Pigmentación Creativa: Explora cómo añadir pigmentos y aditivos para personalizar colores y efectos en la resina.
      Acabado Brillante: Revelamos técnicas de lijado y pulido para lograr una superficie final suave y brillante.
      
      
       ¡Y ahí lo tienen, amigos! En esta segunda entrega de nuestra serie sobre mesas con río de resina, hemos explorado a fondo el emocionante proceso de imprimación de la superficie. Desde la preparación hasta la mezcla, la pigmentación y el acabado, cada paso nos acerca más a la creación de estas mesas únicas en su tipo. Así que no se pierdan la próxima entrega, donde nos sumergimos en el fascinante mundo de la creación del río de resina en sí. ¡Hasta la próxima!

      `,
      url:
      `https://player.vimeo.com/video/413106081?h=54ffc7be20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },
    {
      id: 7,
      orden: 7,
      title: "MESADA VANGUARDISTA: CÓMO CREAR UN COUNTERTOP CON PORCELANATO LÍQUIDO ",
      description: `
      En este tutorial, aprenderás paso a paso cómo construir una mesada de porcelanato líquido sobre MDF, incorporando una bacha y grifo. Asegúrate de seguir las medidas de seguridad adecuadas durante todo el proceso.

      Paso 1: Colocación de la Bacha sobre el MDF
      
      Centrado y Delineado de la Bacha sobre el MDF para una colocación precisa.
      Medidas de Seguridad: Importantes consideraciones antes de proceder con el orificio sobre el MDF.
      Paso 2: Impermeabilización de la Superficie
      
      Preparación de la Pintura Epóxica + Activador para una óptima adherencia.
      Aplicación de Pintura de Alto Tránsito sobre el MDF para protegerlo y mejorar la durabilidad.
      Paso 3: Terminación
      
      Detalles finales para lograr un acabado profesional y moderno en tu Countertop de Porcelanato Líquido.
      ¡Convierte tu cocina en un espacio vanguardista con esta creativa mesada de porcelanato líquido sobre MDF! Sigue nuestras indicaciones y disfruta de un resultado impresionante y funcional.
      `,
      url: `https://player.vimeo.com/video/441233277?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`
    },
    {
      id: 8,
      orden: 8,
      title: "MESADA VANGUARDISTA PARTE 2: ACABADO DE COUNTERTOP",
      description: `
      En esta emocionante continuación, te guiaremos en los pasos finales para darle un acabado espectacular a tu Countertop de Porcelanato Líquido. ¡Prepárate para el resultado final!

Paso 1: Preparación de Porcelanato Líquido + Activador

Asegúrate de tener la proporción correcta de porcelanato líquido y activador para una mezcla óptima.
Importantes consejos para lograr una consistencia perfecta y evitar problemas durante la aplicación.
Paso 2: Pigmentación con Aerosol

Descubre cómo darle un toque de personalidad a tu Countertop con pigmentación en aerosol.
Técnicas para lograr diferentes efectos y estilos.
Paso 3: Aplicación del Producto sobre Superficie

Detallada guía para aplicar el porcelanato líquido sobre la mesada.
Consejos prácticos para un acabado uniforme y sin burbujas.
Paso 4: Secado y Terminación

Tiempo de secado necesario para asegurar un resultado duradero.
Últimos toques para perfeccionar el aspecto y brillo del Countertop.
¡Estás a punto de culminar tu proyecto de Mesada Vanguardista con Porcelanato Líquido! Sigue estos pasos finales para lograr una superficie excepcional que dejará a todos impresionados con su modernidad y elegancia.
      `,
      url: `https://player.vimeo.com/video/1003705419?h=196da4426f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`
    },  
  {
      id: 9,
      orden: "Bonus 1",
      title: "ENCANTO FLORAL: ROSAS Y MARIPOSAS EN RESINA EPOXI.",
      description:
      `Descubre un mundo de ensueño en el video Rosas y Mariposas. Este cautivador video muestra un impresionante piso en 3D con resina epoxi, inspirado en la belleza de las rosas y la delicadeza de las mariposas. Con colores vibrantes, detalles meticulosos y una iluminación adecuada, este diseño te transportará a un lugar mágico y sofisticado. Si buscas inspiración para renovar tus espacios, este video te mostrará cómo un piso en 3D con resina epoxi puede transformar cualquier ambiente en algo encantador. ¡Déjate llevar por la belleza y el encanto de Rosas y Mariposas!\n Tamaño del proyecto: 220 Sqft = 22m2.\n Materiales Utilizados para este Proyecto: 1 Galón Epoxy Primer Wf52 = 3.78 Lts (Imprimación Epóxica); 220 Sqft de Vinilo Autoadhesivo = 22m2 Vinilo; 4 Gal Epoxy Resin Wf52 = 13.23Lts; 1.5Lts Alcohol Isopropilico. Herramientas Utilizadas: 2 Brochas 1"; 2 Rodillos epoxicos pelo corto; 1 Squeegee Dentado (Secador o jalador dentado); 1 Spike Roller (Rodillo de púas); 1 Cooter; Cinta métrica; Mezclador Helicoidal `,
      url:
      `https://player.vimeo.com/video/851034895?h=bb360bbb23&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },
    {
      id: 10,
      orden: "Bonus 2",
      title: "EFECTO NEBULOSO: PISOS ESFUMADOS CON RESINA EPOXI.",
      description:
      `En este video, descubre la técnica de esfumado con resina epoxi en pisos metálicos. Observa cómo se aplica la resina de manera experta para crear un efecto visual impactante que imita metales preciosos como el oro, y la plata, mezclado con un violeta universo. Esta técnica no solo brinda una apariencia lujosa y sofisticada, sino que también ofrece una superficie resistente y duradera. Transforma tus espacios con esta técnica única y crea un ambiente elegante y único. No te pierdas este video inspirador que te muestra las posibilidades de los pisos metálicos con esfumado de resina epoxi. Tamaño del Proyecto: 180 Sqft = 18m2. Materiales Utilizados para este Proyecto: 1/2 Galón Acrylic Primer = 2 Lts Ligante Acrilico; 3 Sacos 50 Libras Self Leveling = 3 Bolsas de 25Kg de (Base Niveladora); 1 Galón Epoxy Primer Wf52 = 2.8 Lts (Imprimación Epóxica); 4.5 Gal Epoxy Resin Wf52 = 17Lts; 8.5 Oz = 240Grs Pigmento metálico Plata; 6.5 Oz = 180Grs Pigmento metálico Violeta Universo; 4 Oz = 120Grs Pigmento metálico Oro; 1 Lts Isopropilico. Herramientas Utilizadas: 4 Brochas 1"; 1 Rodillo pelo corto; 2 Rodillos de espuma de alta densidad; 2 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/851035897?h=fe86017483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },{
      id: 11,
      orden: "Bonus 3",
      title: "ARTE FLORAL EN CAPAS: AMAPOLAS EN 3D CON RESINA EPOXI.",
      description:
      `En este video, descubre la fascinante técnica de crear pisos en 3D de amapolas utilizando resina epoxi. Observa cómo se recrean con precisión cada detalle de las amapolas, desde los pétalos hasta los tallos, creando una sensación de realismo y profundidad. La resina epoxi se utiliza para dar vida a este diseño, proporcionando durabilidad y facilidad de mantenimiento. Sumérgete en un jardín encantador y relajante con este diseño en 3D de amapolas con resina epoxi. No te pierdas este video inspirador que te mostrará las posibilidades de los pisos en 3D con esta técnica única. Tamaño del Proyecto: 1200 Sqft = 120m2. Materiales Utilizados para este Proyecto: 5 Galón Epoxy Primer Wf52 = 19 Lts (Imprimación Epóxica); 20 Gal Epoxy Resin Wf52 = 76Lts; 8 Lts Isopropilico; 4Lts Laca poliuretánica (Para el mural); Pistola de pintar (Para mural). Herramientas Utilizadas: 4 Brochas 1"; 6 Rodillos epoxicos pelo corto; 3 Squeegee Dentado (Secador o jalador dentado); 2 Spike Rolles (Rodillo de púas); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/499222159?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },
    {
      id: 12,
      orden: "Bonus 4",
      title: "NATURALEZA EN CASCADA: CATARATAS EN 3D CON RESINA EPOXI.",
      description:
      `En este video, descubre el fascinante proceso de crear un piso en 3D de cataratas utilizando resina epoxi. Observa cómo se recrea con precisión cada detalle del flujo del agua y los reflejos de luz, creando una experiencia visual impresionante. La resina epoxi se utiliza para dar vida y profundidad a este diseño, creando un oasis de tranquilidad y relajación. Sumérgete en este mundo mágico de cataratas en 3D con resina epoxi y transforma tus espacios en algo verdaderamente extraordinario. Tamaño del Proyecto: 360 Sqft = 36m2. Materiales Utilizados para este Proyecto: 6 Sacos 50 Libras Self Leveling = 6 Bolsas de 25Kg de (Base Niveladora); 1.5 Galón Epoxy Primer Wf52 = 5.7 Lts (Imprimación Epóxica); 380 Sqft Vinilo Autoadhesivo = 38m2 Vinilo Autoadhesivo; 6 Gal Epoxy Resin Wf52 = 22.68Lts; 2 Lts Isopropilico. Herramientas Utilizadas: 4 Brochas 1"; 1 Rodillo pelo corto; 1 Llana Lisa; 1 Espátula; 2 Rodillos de espuma de alta densidad; 2 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/499230260?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0`,
    },
    {
      id: 13,
      orden: "Bonus 5",
      title: "BRILLO METÁLICO: MARMOLADO CON PIGMENTO METÁLICO EN RESINA EPOXI.",
      description:
      `En este video, podrás descubrir el proceso de creación de un piso marmolado utilizando resina epoxi y pigmento metálico cobre. Observa cómo se recrea con precisión la elegancia y belleza del mármol, desde sus vetas cpm tinta epóxica Negra, hasta su brillo característico. La resina epoxi se utiliza para lograr una aplicación suave y uniforme, proporcionando durabilidad y resistencia. Sumérgete en un ambiente de lujo y sofisticación con este diseño de piso marmolado con resina epoxi. No te pierdas este video inspirador que te mostrará cómo transformar tus espacios en algo verdaderamente extraordinario.
      Tamaño del Proyecto: 280 Sqft = 28m2. Materiales Utilizados para este Proyecto: 5 Sacos 50 Libras Self Leveling = 5 Bolsas de 25Kg de (Base Niveladora); 1 1/4 Galón Epoxy Primer Wf52 = 4.7 Lts (Imprimación Epóxica); 5 Gal Epoxy Resin Wf52 = 19 Lts; 19.4 oz Pigmento Metálico Cobre = 550Grs Carga metálica cobre; 2 Oz Tinta Epoxica Negra = 60Grs Pigmento en pasta Negro; 2 Lts Isopropilico. Herramientas Utilizadas: 2 Brochas 1"; 1 Llana Lisa; 1 Espátula; 1 Rodillo epoxi pelo corto; 2 Rodillos de espuma de alta densidad; 1 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal.
      `,
      url:
      `https://player.vimeo.com/video/499250045?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"`,
    },
    {
      id: 14,
      orden: "Bonus 6",
      title: "FLAKES SIMIL GRANITO Y POLYASPARTIC: LA COMBINACIÓN PERFECTA PARA UN ASPECTO SOFISTICADO.",
      description: `
      Descubre la belleza y versatilidad de los pisos de flakes o chips decorativos con polyaspartic. Observa cómo polyaspartic realza el efecto de los flakes que están por debajo para crear un acabado duradero y elegante. Estos pisos son ideales para áreas de alto tráfico debido a su resistencia a manchas y productos químicos. Disfruta de un acabado brillante y suave que realza los colores y detalles de los flakes. Transforma tus espacios con esta opción moderna y estéticamente atractiva. ¡No te pierdas este video inspirador que te muestra las infinitas posibilidades de los pisos de flakes o chips decorativos con Polyaspartic!

Tamaño del Proyecto

180 Sqft = 18m2

Materiales Utilizados para este Proyecto:

1 Galón Epoxy Primer Wf52 = 2.8 Lts (Imprimación Epóxica)
20 Libras de Flakes = 9Kg (Chips Decorativos(
3 Gal Epoxy Resin Wf52 = 11.34Lts
1 Lts Isopropilico.

Herramientas Utilizadas:

2 Brochas 1".
1 Rodillo de espuma de alta densidad.
1 Squeegee Dentado. (Secador o jalador dentado)
Zapatos de clavo.
Mezclador Helicoidal.
      `,
      url: `https://player.vimeo.com/video/851035646?h=bb4eda7bff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`
    }
    
  ];

  return (
    <div className="video-super min-h-screen pt-0 bg-primary-800">
      <div className="video-page text-center max-w-3xl mx-auto p-4 bg-primary-800">
        <h1 className="mb-4 underline text-purple-200 text-2xl font-semibold font-montserrat">
          VIDEOS
        </h1>
        {videos.map((video) => (
  <div key={video.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 my-6 md:my-8">
    <div className="flex items-center justify-center md:col-span-12">
      <div className="mt-8 rounded-full w-28 h-28 md:w-28 md:h-28 lg:w-28 lg:h-28 bg-gray-300 flex items-center justify-center">
        <span className="text-black text-xl md:text-2xl lg:text-3xl font-bold">{video.orden}</span>
      </div>
    </div>
    <div className="md:col-span-12">
      <h1 className="text-2xl md:text-2xl font-bold text-center mb-2 font-montserrat text-white" >
        {video.title}
      </h1>
    </div>
    <div className="md:col-span-12 grid md:grid-cols-1 content-center self-center">
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={video.url}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        className="absolute top-0 left-0 w-full h-full"
        title={video.title}
      ></iframe>
    </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default VideosOnline;