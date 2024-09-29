import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery, CardActions } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Tienda() {
  const matches = useMediaQuery("(min-width:600px)");

  const handleWhatsAppClick = (kit) => {
    // Número de WhatsApp al que quieres enviar el mensaje
    const phoneNumber = "17869055726"; // Reemplaza esto con el número de WhatsApp deseado

    // Construye el enlace para enviar el mensaje a través de la API de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=%C2%A1Hola%20Wonderful3D!%20Me%20gustaria%20consultar%20por%20${kit}.`;

    // Abre una nueva ventana o pestaña con el enlace de WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 min-h-screen flex flex-col items-center justify-center mt-[-40px]">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mt-9 py-12 sm:py-8 sm:mb-12 text-center">
        ¡TIENDA WONDERFUL3D!
      </h1>
      <Card
        sx={matches ? { display: "flex", width: 735 } : { margin: "0.5rem" }}
        className="mb-4"
      >
        <CardMedia
          component="img"
          height="80"
          image="https://wonderful3d.us/wp-content/uploads/2023/09/Diseno-sin-titulo-47.png"
          alt="kit-iniciacion"
          sx={matches ? { width: 164 } : { margin: "auto" }}
          className="p-0.5 rounded"
        />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              KIT DE INICIACIÓN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1 galón de Resina Wf 52: Suficiente para cubrir una superficie de
              60 pies cuadrados.
              <br />
              1/4 de galón de Primer Floral Wf 52: Ideal para cubrir hasta 30
              pies cuadrados. <br />
              6 de Pigmentos en Pasta de 1 oz (elige tus colores preferidos).
              <br />
              10 sobres de cargas metálicas de 1 oz (colores preseleccionados).
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleWhatsAppClick("el kit de iniciación")}
            >
              Comprar Aqui
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card
        sx={matches ? { display: "flex", width: 735 } : { margin: "0.5rem" }}
        className="mb-4"
      >
        <CardMedia
          component="img"
          height="80"
          image="https://wonderful3d.us/wp-content/uploads/2023/09/Diseno-sin-titulo-51.png"
          alt="kit-iniciacion"
          sx={matches ? { width: 164 } : { margin: "auto" }}
          className="p-0.5 rounded"
        />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              KIT INICIACIÓN FLAKES
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1 galón de Polyaspartic: Suficiente para cubrir una superficie de
              125 pies cuadrados.
              <br /> 1 galón de Primer Floral Wf 52: Ideal para cubrir hasta 130
              pies cuadrados.
              <br /> 20 libras de Flakes: Elige los Flakes de tu preferencia.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleWhatsAppClick("el kit de iniciación flakes")}
            >
              Comprar Aqui
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card
        sx={matches ? { display: "flex", width: 735 } : { margin: "0.5rem" }}
        className="mb-4"
      >
        <CardMedia
          component="img"
          height="80"
          image="https://wonderful3d.us/wp-content/uploads/2023/09/Diseno-sin-titulo-46.png"
          alt="kit-iniciacion"
          sx={matches ? { width: 164 } : { margin: "auto" }}
          className="p-0.5 rounded"
        />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              KIT DEL EMPRENDEDOR
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3 galones de resina epoxi.
              <br /> 5 tintas para pigmentar.
              <br />
              10 sobres de cargas metálicas para pigmentar.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleWhatsAppClick("el kit del emprendedor")}
            >
              Comprar Aqui
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card
        sx={matches ? { display: "flex", width: 735 } : { margin: "0.5rem" }}
      >
        <CardMedia
          component="img"
          height="80"
          image="https://wonderful3d.us/wp-content/uploads/2023/09/Diseno-sin-titulo-49.png"
          alt="kit-iniciacion"
          sx={matches ? { width: 164 } : { margin: "auto" }}
          className="p-0.5 rounded"
        />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              KIT DEL EMPRENDEDOR +PLUS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3 galones de Resina Wf 52: Suficiente para cubrir una superficie
              <br /> 1 galón de Primer Floral Wf 52: Ideal para cubrir hasta 130
              pies cuadrados.
              <br /> 5 de Pigmentos en Pasta de 4 oz (selecciona tus colores
              preferidos).
              <br />10 cargas metálicas de 1 oz (colores preseleccionados).
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() =>
                handleWhatsAppClick("el kit del emprendedor +plus")
              }
            >
              Comprar Aqui
            </Button>
          </CardActions>
        </div>
      </Card>

      <Button
        variant="contained"
        color="error"
        onClick={() => handleWhatsAppClick("sus productos")}
        sx={
          matches
            ? { width: 700, margin: "2rem 0.5rem" }
            : { margin: "2rem 0.5rem" }
        }
        startIcon={<WhatsAppIcon />}
      >
        Consulta por nuestros productos
      </Button>
    </div>
  );
}
