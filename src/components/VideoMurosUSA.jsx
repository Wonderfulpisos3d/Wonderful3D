import React from "react";
import Volver from "./Volver";
import { Box } from "@mui/material";
import Poster from "../assets/miniatura.jpg"

const VideosMurosUSA = () => {
  
  const videos = [
  {
      id: 1,
      orden: "1",
      title: "VIDEO DE VERTICALES: PROYECTO EN BAÑO",
      description:
      `Descubre un mundo de ensueño en el video Rosas y Mariposas. Este cautivador video muestra un impresionante piso en 3D con resina epoxi, inspirado en la belleza de las rosas y la delicadeza de las mariposas. Con colores vibrantes, detalles meticulosos y una iluminación adecuada, este diseño te transportará a un lugar mágico y sofisticado. Si buscas inspiración para renovar tus espacios, este video te mostrará cómo un piso en 3D con resina epoxi puede transformar cualquier ambiente en algo encantador. ¡Déjate llevar por la belleza y el encanto de Rosas y Mariposas!\n Tamaño del proyecto: 220 Sqft = 22m2.\n Materiales Utilizados para este Proyecto: 1 Galón Epoxy Primer Wf52 = 3.78 Lts (Imprimación Epóxica); 220 Sqft de Vinilo Autoadhesivo = 22m2 Vinilo; 4 Gal Epoxy Resin Wf52 = 13.23Lts; 1.5Lts Alcohol Isopropilico. Herramientas Utilizadas: 2 Brochas 1"; 2 Rodillos epoxicos pelo corto; 1 Squeegee Dentado (Secador o jalador dentado); 1 Spike Roller (Rodillo de púas); 1 Cooter; Cinta métrica; Mezclador Helicoidal `,
      url:
      `https://player.vimeo.com/video/884453713?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`,
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

export default VideosMurosUSA;