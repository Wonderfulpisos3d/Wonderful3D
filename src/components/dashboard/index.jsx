import { Box, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import { tokens } from "../../theme";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import firebaseApp from "../../firebaseConfig";
import SumaUSA from "./SumaUSAAgosto";
import SumaUSASept from "./SumaUSASept";
import SumaMexico from "./SumaMexicoAgosto";
import SumaMexicoSep from "./SumaMexicoSept";
import SumaArgentina from "./SumaArgentinaAgosto";
import SumaArgentinaSep from "./SumaArgentinaSept";
import TransactionItem from "./transactionItem";
import Header from "../../components/componentes dashboard/Header";
import LineChart from "../../components/componentes dashboard/LineChart";
import MostrarFechasUsuarios from "./SumaCiudadCampaña";
import { Link } from "react-router-dom";
import UpcomingCities from "./UpcomingCities";

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);
  const [fechasUsuarios, setFechasUsuarios] = useState([]);
  const [contarCampañaAgosto, setContarCampañaAgosto] = useState(0);
  const [contarCampañaSeptiembre, setContarCampañaSeptiembre] = useState(0);
  const [sumasUSA, setSumasUSA] = useState(0);
  const [sumasMexico, setSumasMexico] = useState(0);
  const [sumasArgentina, setSumasArgentina] = useState(0);
  const [contarCampañaAgostoUSA, setContarCampañaAgostoUSA] = useState(0);
  const [contarCampañaAgostoMexico, setContarCampañaAgostoMexico] = useState(0);
  const [contarCampañaAgostoArgentina, setContarCampañaAgostoArgentina] = useState(0);
  const [contarCampañaSeptiembreUSA, setContarCampañaSeptiembreUSA] = useState(0);
  const [contarCampañaSeptiembreMexico, setContarCampañaSeptiembreMexico] = useState(0);
  const [contarCampañaSeptiembreArgentina, setContarCampañaSeptiembreArgentina] = useState(0);
  const [contarInscriptos,setContarInscriptos] = useState(0);
  const [cityCounts, setCityCounts] = useState({});
  const [estadoAgosto, setEstadoAgosto] = useState(false);
  const [estadoSeptiembre, setEstadoSeptiembre] = useState(false);
  const [estadoOctubre, setEstadoOctubre] = useState(false);
  // Función para cambiar el estado del primer botón a verdadero
  const handleClickAgosto = () => {
    setEstadoAgosto(!estadoAgosto);
    console.log(estadoAgosto)
  };

  // Función para cambiar el estado del segundo botón a verdadero
  const handleClickSeptiembre = () => {
    setEstadoSeptiembre(!estadoSeptiembre);
    console.log(estadoAgosto)
  };

  const handleClickOctubre = () =>{
    setEstadoOctubre(!estadoOctubre)
    console.log(estadoOctubre)
  }

  const sumarCiudadUSA = (sumas, ciudad) => {
    const ciudadesUSA = [
      'Seattle', 'Nashville', 'San Jose', 'Charleston', 'Los Angeles',
      'Charlotte', 'Las Vegas', 'Arlington', 'Phoenix', 'Philadelphia',
      'Albuquerque', 'Newark NJ', 'Dallas', 'Boston', 'Austin', 'New York',
      'Houston', 'Chicago', 'Orlando', 'Minneapolis', 'Miami', 'Baltimore',
      'Atlanta', 'Tampa', 'San Antonio', 'San Diego'
    ];

    if (ciudadesUSA.includes(ciudad)) {
      sumas['PAIS USA:'] = (sumas['PAIS USA:'] || 0) + 1;
      setSumasUSA((prevSumasUSA) => prevSumasUSA + 1);
    }
  };

  const sumarCiudadMexico = (sumas, ciudad) => {
    const ciudadesMexico = [
      'Mexico City', 'Tijuana', 'Hermosillo', 'Monterrey', 'Chihuahua',
      'Culiacan', 'Guadalajara', 'Puebla', 'Cancun', 'La Paz BCS', 'Mexicali'
    ];

    if (ciudadesMexico.includes(ciudad)) {
      sumas['PAIS MEXICO:'] = (sumas['PAIS MEXICO:'] || 0) + 1;
      setSumasMexico((prevSumasMexico) => prevSumasMexico + 1);
    }
  };


  const sumarCiudadArgentina = (sumas, ciudad) => {
    const ciudadesArgentina = [
      'Mar del Plata', 'Buenos Aires', 'Entre Ríos', 'Rosario', 'Misiones',
      'Chaco', 'Tucumán', 'Mendoza', 'Neuquén', 'Trelew',
      'Comodoro Rivadavia', 'Río Gallegos', 'Cordoba', "Córdoba"
    ];

    if (ciudadesArgentina.includes(ciudad)) {
      sumas['PAIS ARGENTINA:'] = (sumas['PAIS ARGENTINA:'] || 0) + 1;
      setSumasArgentina((prevSumasArgentina) => prevSumasArgentina + 1);
    }
  };

  useEffect(() => {
    const obtenerFechasUsuarios = async () => {
      let contadorAgosto = 0;
      let contadorAgostoUSA = 0;
      let contadorAgostoMexico = 0;
      let contadorAgostoArgentina = 0;
      let contadorSeptiembre = 0;
      let contadorSeptiembreUSA = 0;
      let contadorSeptiembreMexico = 0;
      let contadorSeptiembreArgentina = 0;

      try {
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, 'usuarios');
        const snapshot = await getDocs(usuariosRef);
        const fechas = snapshot.docs.map((doc) => doc.data().date);
        snapshot.docs.forEach((doc) => {
          const fecha = doc.data().date;
          const city = doc.data().city;

          if (fecha && fecha.slice(0, 4) === '2023') {
            const mes = fecha.slice(5, 7);

            if (mes === '08') {
              if (city && cityIncludesUSA(city)) {
                contadorAgostoUSA++;
              } else if (city && cityIncludesMexico(city)) {
                contadorAgostoMexico++;
              } else if (city && cityIncludesArgentina(city)) {
                contadorAgostoArgentina++;
              }

            else if (mes === '09'){
              if (city && cityIncludesUSA(city)) {
                contadorSeptiembreUSA++;
              } else if (city && cityIncludesMexico(city)) {
                contadorSeptiembreMexico++;
              } else if (city && cityIncludesArgentina(city)) {
                contadorSeptiembreArgentina++;
              }
            }
            }
          }
        });
        
        
        setContarCampañaAgostoUSA(contadorAgostoUSA);
        setContarCampañaSeptiembreUSA(contadorSeptiembreUSA)
        setContarCampañaAgostoMexico(contadorAgostoMexico);
        setContarCampañaSeptiembreMexico(contadorSeptiembreMexico)
        setContarCampañaAgostoArgentina(contadorAgostoArgentina);
        setContarCampañaSeptiembreArgentina(contadorSeptiembreArgentina)
        setFechasUsuarios(fechas);
      } catch (error) {
      }
    };

    obtenerFechasUsuarios();
  }, []);


  const cityIncludesUSA = (city) => {
    const ciudadesUSA = [
      'Seattle', 'Nashville', 'San Jose', 'Charleston', 'Los Angeles',
      'Charlotte', 'Las Vegas', 'Arlington', 'Phoenix', 'Philadelphia',
      'Albuquerque', 'Newark NJ', 'Dallas', 'Boston', 'Austin', 'New York',
      'Houston', 'Chicago', 'Orlando', 'Minneapolis', 'Miami', 'Baltimore',
      'Atlanta', 'Tampa', 'San Antonio', 'San Diego'
    ];

    return ciudadesUSA.includes(city);
  };

  const cityIncludesMexico = (city) => {
    const ciudadesMexico = [
      'Mexico City', 'Tijuana', 'Hermosillo', 'Monterrey', 'Chihuahua',
      'Culiacan', 'Guadalajara', 'Puebla', 'Cancun', 'La Paz BCS', 'Mexicali'
    ];

    return ciudadesMexico.includes(city);
  };

  const cityIncludesArgentina = (city) => {
    const ciudadesArgentina = [
      'Mar del Plata', 'Buenos Aires', 'Entre Ríos', 'Rosario', 'Misiones',
      'Chaco', 'Tucumán', 'Mendoza', 'Neuquén', 'Trelew',
      'Comodoro Rivadavia', 'Río Gallegos', 'Córdoba', "Cordoba"
    ];

    return ciudadesArgentina.includes(city);
  };

  async function fetchData() {
    const url1 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023`;
    const url2 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=SEP-OCT 2023`;
    const url5 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=OCT-NOV 2023`;
    const url3 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[STATUS_ID]=CONVERTED`;
    const url4 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=SEP-OCT 2023&FILTER[STATUS_ID]=CONVERTED`;
    const url6 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=OCT-NOV 2023&FILTER[STATUS_ID]=CONVERTED`
  
    try {
      const response1 = await fetch(url1);
      const data1 = await response1.json();

      const response2 = await fetch(url2);
      const data2 = await response2.json();

      const response3 = await fetch(url3);
      const data3 = await response3.json();

      const response4 = await fetch(url4);
      const data4 = await response4.json();

      const response5 = await fetch(url5);
      const data5 = await response1.json();

      const response6 = await fetch(url6);
      const data6 = await response1.json();
  
      return [data1,data2,data3,data4,data5,data6]; // Retorna los datos en un arreglo
    } 
    catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  fetchData()
  .then(dataArray => {
    setContarInscriptos({"Agosto": dataArray[0].total,
    "Septiembre": dataArray[1].total,
  }
  )
  setContarCampañaAgosto(dataArray[2].total)
  setContarCampañaSeptiembre(dataArray[3].total)
  })
  .catch(error => {
    console.error('Error en la función fetchData:', error);
  });

  const mockTransactions=[
    {
      txId: "Agosto",
      user: "2023",
      date: "2023",
      cost: contarCampañaAgosto,
      inscriptos: contarInscriptos["Agosto"]
    },
    {
      txId: "Septiembre",
      user: "2023",
      date: "2023",
      cost: contarCampañaSeptiembre,
      inscriptos: contarInscriptos["Septiembre"]
        },
        {
          txId: "Octubre",
          user: "2023",
          date: "2023",
          cost: contarCampañaSeptiembre,
          inscriptos: contarInscriptos["Octubre"]
            }

  ];

  const data = [
    {
      id: "Argentina",
      color: tokens("dark").greenAccent[700],
      data: [
        {
          x: "Agosto",
          y: contarCampañaAgostoArgentina,
        },
        {
          x: "Septiembre",
          y: contarCampañaSeptiembreArgentina
        }
      ],
    },
    {
      id: "USA",
      color: tokens("dark").blueAccent[700],
      data: [
        {
          x: "Agosto",
          y: contarCampañaAgostoUSA,
        },
        {
          x: "Septiembre",
          y: contarCampañaSeptiembreUSA,
        }
      ],
    },
    {
      id: "México",
      color: tokens("dark").redAccent[700],
      data: [
        {
          x: "Agosto",
          y: contarCampañaAgostoMexico,
        },
        {
          x: "Septiembre",
          y: contarCampañaSeptiembreMexico,
        },
      ],
    },
  ];

  useEffect(() => {
    const obtenerFechasUsuarios = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, 'usuarios');
        const snapshot = await getDocs(usuariosRef);

        let newCityCounts = {};

        snapshot.docs.forEach((doc) => {
          const fecha = doc.data().date;
          const city = doc.data().city;

          if (fecha && fecha.slice(0, 4) === '2023') {
            const mes = fecha.slice(5, 7);

            if (mes === '08' || mes === '09') {
              updateCityCount(newCityCounts, city);
            }
          }
        });

        setCityCounts(newCityCounts);
      } catch (error) {
      }
    };

    obtenerFechasUsuarios();
  }, []);

  const updateCityCount = (counts, city) => {
    if (!counts[city]) {
      counts[city] = 1;
    } else {
      counts[city]++;
    }
  };
  

  useEffect(() => {
    const db = getFirestore(firebaseApp);
const usuariosRef = collection(db, 'usuarios');
const q = query(usuariosRef, where('city', '!=', ''));

getDocs(q)
  .then((querySnapshot) => {
    const sumas = {};

    querySnapshot.forEach((doc) => {
      const city = doc.data().city;
      sumarCiudadUSA(sumas, city);
      sumarCiudadMexico(sumas, city);
      sumarCiudadArgentina(sumas, city);
    });

    // Establecer el resultado en 0 si no se encuentra ninguna ciudad de un país
    if (!Object.keys(sumas).includes('PAIS USA:')) {
      sumas['PAIS USA:'] = 0;
    }
    if (!Object.keys(sumas).includes('PAIS MEXICO:')) {
      sumas['PAIS MEXICO:'] = 0;
    }
    if (!Object.keys(sumas).includes('PAIS ESPAÑA:')) {
      sumas['PAIS ESPAÑA:'] = 0;
    }
    if (!Object.keys(sumas).includes('PAIS ARGENTINA:')) {
      sumas['PAIS ARGENTINA:'] = 0;
    }

    // Ahora puedes trabajar con los datos obtenidos en 'sumas'
  })
  .catch((error) => {
    console.error('Error fetching documents: ', error);
  });

    return () => {
    };
  }, []);

  console.log(contarCampañaAgosto)

  return (
    <Box m="20px" minHeight="100vh">

      {/* GRID & CHARTS */}
      <Box
      sx={{
        display: "none",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: "0px",
          width: "100%"
        },
      }}
    >
    </Box>
      <Box
      sx={{
        display: "none",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "0px",
        },
      }}
    >
    </Box>
      <Box
        display="grid"
        gridTemplateColumns={isSmallScreen ? "repeat(1, 1fr)" : "repeat(12, 1fr)"}
        gridAutoRows="140px"
        gap="20px"
      >
        
        {/* ROW 1 */}
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#e5e5e5"
          borderRadius="20px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Cantidad por Campaña y País
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={data}/>
          </Box>
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 4"}
          gridRow="span 2"
          backgroundColor="#e5e5e5"
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
              Campañas
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <TransactionItem transaction={transaction} colors={colors} key={`${transaction.txId}-${i}`} isExpanded={false}/>
          ))}
          <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${
              estadoAgosto ? 'bg-red-700' : ''
            }`}
            onClick={handleClickAgosto}
          >
            Agosto
          </button>
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${
              estadoSeptiembre ? 'bg-red-700' : ''
            }`}
            onClick={handleClickSeptiembre}
          >
            Septiembre
          </button>
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${
              estadoSeptiembre ? 'bg-red-700' : ''
            }`}
            onClick={handleClickSeptiembre}
          >
            Octubre
          </button>
        </div>
        </Box>

        {/* ROW 3 */}
        {
          estadoAgosto ? (
            <>
              <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 10"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600" textAlign="center">
              Ciudades USA
            </Typography>
          </Box>
          <SumaUSA sumasUSA={sumasUSA} />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 6"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors="white"
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600">
              Ciudades Mexico
            </Typography>
          </Box>
          <SumaMexico sumasMexico={sumasMexico} />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 4"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          overflow="auto"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors="white"
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600">
              Ciudades Argentina
            </Typography>
          </Box>
          <SumaArgentina sumasArgentina={sumasArgentina} />
        </Box>
            </>
          ) : estadoSeptiembre ?(
            <>
              <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 10"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600" textAlign="center">
              Ciudades USA
            </Typography>
          </Box>
          <SumaUSASept sumasUSA={sumasUSA} />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 6"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors="white"
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600">
              Ciudades Mexico
            </Typography>
          </Box>
          <SumaMexicoSep sumasMexico={sumasMexico} />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 4"
          backgroundColor="rgba(229, 229, 229, 0.1)"
          overflow="auto"
          borderRadius="10px"
          border="1px solid white"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors="white"
            p="15px"
          >
            <Typography color="white" variant="h6" fontWeight="600">
              Ciudades Argentina
            </Typography>
          </Box>
          <SumaArgentinaSep sumasArgentina={sumasArgentina} />
        </Box>
            </>
          ) : (
            <>

            </>
          )
        }
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 3"
          backgroundColor="#e5e5e5"
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
              Próximas Ciudades
            </Typography>
          </Box>
          <UpcomingCities />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 4"}
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <MostrarFechasUsuarios colors={colors}/>
            
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default Dashboard;