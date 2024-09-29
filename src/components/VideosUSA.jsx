import React from "react";
import Volver from "./Volver";
import { Box } from "@mui/material";
import Poster from "../assets/miniatura.jpg"

const VideosOnline = () => {
  
  const videos = [
  {
      id: 1,
      orden: "1",
      title: "ENCANTO FLORAL: ROSAS Y MARIPOSAS EN RESINA EPOXI.",
      description:
      `Descubre un mundo de ensueño en el video Rosas y Mariposas. Este cautivador video muestra un impresionante piso en 3D con resina epoxi, inspirado en la belleza de las rosas y la delicadeza de las mariposas. Con colores vibrantes, detalles meticulosos y una iluminación adecuada, este diseño te transportará a un lugar mágico y sofisticado. Si buscas inspiración para renovar tus espacios, este video te mostrará cómo un piso en 3D con resina epoxi puede transformar cualquier ambiente en algo encantador. ¡Déjate llevar por la belleza y el encanto de Rosas y Mariposas!\n Tamaño del proyecto: 220 Sqft = 22m2.\n Materiales Utilizados para este Proyecto: 1 Galón Epoxy Primer Wf52 = 3.78 Lts (Imprimación Epóxica); 220 Sqft de Vinilo Autoadhesivo = 22m2 Vinilo; 4 Gal Epoxy Resin Wf52 = 13.23Lts; 1.5Lts Alcohol Isopropilico. Herramientas Utilizadas: 2 Brochas 1"; 2 Rodillos epoxicos pelo corto; 1 Squeegee Dentado (Secador o jalador dentado); 1 Spike Roller (Rodillo de púas); 1 Cooter; Cinta métrica; Mezclador Helicoidal `,
      url:
      `https://player.vimeo.com/video/851034895?h=bb360bbb23&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },
    {
      id: 2,
      orden: "2",
      title: "EFECTO NEBULOSO: PISOS ESFUMADOS CON RESINA EPOXI.",
      description:
      `En este video, descubre la técnica de esfumado con resina epoxi en pisos metálicos. Observa cómo se aplica la resina de manera experta para crear un efecto visual impactante que imita metales preciosos como el oro, y la plata, mezclado con un violeta universo. Esta técnica no solo brinda una apariencia lujosa y sofisticada, sino que también ofrece una superficie resistente y duradera. Transforma tus espacios con esta técnica única y crea un ambiente elegante y único. No te pierdas este video inspirador que te muestra las posibilidades de los pisos metálicos con esfumado de resina epoxi. Tamaño del Proyecto: 180 Sqft = 18m2. Materiales Utilizados para este Proyecto: 1/2 Galón Acrylic Primer = 2 Lts Ligante Acrilico; 3 Sacos 50 Libras Self Leveling = 3 Bolsas de 25Kg de (Base Niveladora); 1 Galón Epoxy Primer Wf52 = 2.8 Lts (Imprimación Epóxica); 4.5 Gal Epoxy Resin Wf52 = 17Lts; 8.5 Oz = 240Grs Pigmento metálico Plata; 6.5 Oz = 180Grs Pigmento metálico Violeta Universo; 4 Oz = 120Grs Pigmento metálico Oro; 1 Lts Isopropilico. Herramientas Utilizadas: 4 Brochas 1"; 1 Rodillo pelo corto; 2 Rodillos de espuma de alta densidad; 2 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/851035897?h=fe86017483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },{
      id: 3,
      orden: "3",
      title: "ARTE FLORAL EN CAPAS: AMAPOLAS EN 3D CON RESINA EPOXI.",
      description:
      `En este video, descubre la fascinante técnica de crear pisos en 3D de amapolas utilizando resina epoxi. Observa cómo se recrean con precisión cada detalle de las amapolas, desde los pétalos hasta los tallos, creando una sensación de realismo y profundidad. La resina epoxi se utiliza para dar vida a este diseño, proporcionando durabilidad y facilidad de mantenimiento. Sumérgete en un jardín encantador y relajante con este diseño en 3D de amapolas con resina epoxi. No te pierdas este video inspirador que te mostrará las posibilidades de los pisos en 3D con esta técnica única. Tamaño del Proyecto: 1200 Sqft = 120m2. Materiales Utilizados para este Proyecto: 5 Galón Epoxy Primer Wf52 = 19 Lts (Imprimación Epóxica); 20 Gal Epoxy Resin Wf52 = 76Lts; 8 Lts Isopropilico; 4Lts Laca poliuretánica (Para el mural); Pistola de pintar (Para mural). Herramientas Utilizadas: 4 Brochas 1"; 6 Rodillos epoxicos pelo corto; 3 Squeegee Dentado (Secador o jalador dentado); 2 Spike Rolles (Rodillo de púas); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/499222159?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
    },
    {
      id: 4,
      orden: "4",
      title: "NATURALEZA EN CASCADA: CATARATAS EN 3D CON RESINA EPOXI.",
      description:
      `En este video, descubre el fascinante proceso de crear un piso en 3D de cataratas utilizando resina epoxi. Observa cómo se recrea con precisión cada detalle del flujo del agua y los reflejos de luz, creando una experiencia visual impresionante. La resina epoxi se utiliza para dar vida y profundidad a este diseño, creando un oasis de tranquilidad y relajación. Sumérgete en este mundo mágico de cataratas en 3D con resina epoxi y transforma tus espacios en algo verdaderamente extraordinario. Tamaño del Proyecto: 360 Sqft = 36m2. Materiales Utilizados para este Proyecto: 6 Sacos 50 Libras Self Leveling = 6 Bolsas de 25Kg de (Base Niveladora); 1.5 Galón Epoxy Primer Wf52 = 5.7 Lts (Imprimación Epóxica); 380 Sqft Vinilo Autoadhesivo = 38m2 Vinilo Autoadhesivo; 6 Gal Epoxy Resin Wf52 = 22.68Lts; 2 Lts Isopropilico. Herramientas Utilizadas: 4 Brochas 1"; 1 Rodillo pelo corto; 1 Llana Lisa; 1 Espátula; 2 Rodillos de espuma de alta densidad; 2 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal`,
      url:
      `https://player.vimeo.com/video/499230260?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0`,
    },
    {
      id: 5,
      orden: "5",
      title: "BRILLO METÁLICO: MARMOLADO CON PIGMENTO METÁLICO EN RESINA EPOXI.",
      description:
      `En este video, podrás descubrir el proceso de creación de un piso marmolado utilizando resina epoxi y pigmento metálico cobre. Observa cómo se recrea con precisión la elegancia y belleza del mármol, desde sus vetas cpm tinta epóxica Negra, hasta su brillo característico. La resina epoxi se utiliza para lograr una aplicación suave y uniforme, proporcionando durabilidad y resistencia. Sumérgete en un ambiente de lujo y sofisticación con este diseño de piso marmolado con resina epoxi. No te pierdas este video inspirador que te mostrará cómo transformar tus espacios en algo verdaderamente extraordinario.
      Tamaño del Proyecto: 280 Sqft = 28m2. Materiales Utilizados para este Proyecto: 5 Sacos 50 Libras Self Leveling = 5 Bolsas de 25Kg de (Base Niveladora); 1 1/4 Galón Epoxy Primer Wf52 = 4.7 Lts (Imprimación Epóxica); 5 Gal Epoxy Resin Wf52 = 19 Lts; 19.4 oz Pigmento Metálico Cobre = 550Grs Carga metálica cobre; 2 Oz Tinta Epoxica Negra = 60Grs Pigmento en pasta Negro; 2 Lts Isopropilico. Herramientas Utilizadas: 2 Brochas 1"; 1 Llana Lisa; 1 Espátula; 1 Rodillo epoxi pelo corto; 2 Rodillos de espuma de alta densidad; 1 Squeegee Dentado (Secador o jalador dentado); Zapatos de clavo; Mezclador Helicoidal.
      `,
      url:
      `https://player.vimeo.com/video/499250045?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"`,
    },
    {
      id:6,
      orden: "6",
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



            <Volver> </Volver>
      </div>
    </div>
  );
};

export default VideosOnline;