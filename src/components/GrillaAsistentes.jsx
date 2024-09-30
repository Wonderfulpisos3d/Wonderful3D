import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import {
  Box,
  Typography,
  useTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { tokens } from "../theme";
import UpcomingCities from "./dashboard/UpcomingCities";
import copy from "clipboard-copy";
import { UTurnLeft } from "@mui/icons-material";
//import { mockDataTeam } from "../../data/mockData";

const ResponsiveBox = styled(Box)`
  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

const StatBox = ({ title, subtitle, icon, increase, cash, card }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBox width="100%" m="0 20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: "white" }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex">
        <Typography variant="h6" sx={{ color: "white" }}>
          {`Cash: ${cash} \n\n\n\n\n\n\n\n\n\n\n || Card: ${card}`}
        </Typography>
        <Typography variant="h6" sx={{ color: "white" }}></Typography>
      </Box>
      <Box display="flex"></Box>
    </ResponsiveBox>
  );
};

const GrillaAsistencias = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [usuarios, setUsuarios] = useState([]);
  const [cityPaymentCounts, setCityPaymentCounts] = useState({});
  const [metodosPago, setMetodosPago] = useState(
    { "Mexico City": { card: 0, cash: 0 } },
    { "Barcelona": { card: 0, cash: 0 } },
    { "Milwaukee": { card: 0, cash: 0 } }
  );
  const [prueba, setPrueba] = useState({});
  const colors = tokens(theme.palette.mode);
  const [copiar, setCopiar] = useState({ text: "", copied: false });
  const [CashCard, setCashCard] = useState({
    "Mexico City": { Cash: {}, Card: {} },
    "Barcelona": { Cash: {}, Card: {} },
    "Milwaukee": { Cash: {}, Card: {} },
  });
  const [campaignCounts, setCampaignCounts] = useState({
    "Junio-Julio": {},
    "Abril-Mayo": {},
    Agosto: {},
    Septiembre: {},
    "Octubre-Noviembre": {},
    Diciembre: {},
    "ABR-JUN": {},
    "AGO": {},
    "SEP-OCT": {},
  });

  useEffect(() => {
    const obtenerFechasUsuarios = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, "usuarios");
        const snapshot = await getDocs(usuariosRef);

        let newCampaignCounts = {
          "Junio-Julio": {},
          "Abril-Mayo": {},
          Agosto: {},
          Septiembre: {},
          "Octubre-Noviembre": {},
          Diciembre: {},
          "ABR-JUN": {},
          "AGO": {},
          "SEP-OCT": {},
        };

        // Initialize counts to zero for the specified cities

        newCampaignCounts["SEP-OCT"]["Mexico City"] = 0;
        newCampaignCounts["SEP-OCT"]["Barcelona"] = 0;
        newCampaignCounts["SEP-OCT"]["Milwaukee"] = 0;

        snapshot.docs.forEach((doc) => {
          const fecha = doc.data().date;
          const city = doc.data().city;
          const payment = doc.data().paymentmethod;

          if (fecha && fecha.slice(0, 4) === "2024") {
            const mes = fecha.slice(5, 7);

            if (mes === "10") {
              // Update the count for the specified cities
              if (city === "Mexico City") {
                updateCityCount(newCampaignCounts, "SEP-OCT", city);
              } else if (city === "Barcelona") {
                updateCityCount(newCampaignCounts, "SEP-OCT", city);
              }
              else if (city === "Milwaukee") {
                updateCityCount(newCampaignCounts, "SEP-OCT", city);
              }
            }
          }
        });
        setCampaignCounts(newCampaignCounts);
      } catch (error) {}
    };

    obtenerFechasUsuarios();
  }, []);

  const updateCityCount = (counts, campaign, city) => {
    if (!counts[campaign][city]) {
      counts[campaign][city] = 1;
    } else {
      counts[campaign][city]++;
    }
  };

  // Función para actualizar los contadores de métodos de pago en metodosPagos

  const updatePaymentMethodCount = (counts, city, method) => {
    if (!counts[city]) {
      counts[city] = { card: 1, cash: 1 }; // Inicializa los contadores para cada ciudad si aún no existen
    }

    counts[city][method]++; // Incrementa el contador correspondiente al método de pago
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, "usuarios");
        const citiesToShow = ["Mexico City", "Barcelona", "Milwaukee"];
        const q = query(
          usuariosRef,
          where("city", "in", citiesToShow),
          where("date", "==", "2024-10-01")
        );
        const querySnapshot = await getDocs(q);

        const mockDataTeam = [];
        const newCityCounts = {};

        const cityMethodCounts = {
          "Mexico City": { cash: 0, card: 0 },
          "Barcelona": { cash: 0, card: 0 },
          "Milwaukee": { cash: 0, card: 0 },
        };

        querySnapshot.forEach((doc) => {
          const usuario = { id: doc.id, ...doc.data() };
          mockDataTeam.push(usuario);

          // Count payments by city and method
          const city = doc.data().city;
          const paymentMethod = doc.data().paymentmethod;

          if (paymentMethod === "cash") {
            newCityCounts[city] = (newCityCounts[city] || 0) + 1;
            cityMethodCounts[city].cash++;
          } else if (paymentMethod === "card") {
            cityMethodCounts[city].card++;
          }
        });

        setUsuarios(mockDataTeam);
        setCityPaymentCounts(newCityCounts);
        setMetodosPago(cityMethodCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function traerData() {
      const url1 =
        "https://opensheet.elk.sh/17CGQyACZYzq1-xvl6Jot5JdIf3cKiJTlctKT6XQ96r8/Asistencia";
      const url2 =
        "https://opensheet.elk.sh/16dK63efNIhXABO3uLuFKWuvguH_N29Q6_pLBhiSwVcY/Asistencia";
      const url3 =
        "https://opensheet.elk.sh/1LengbBX8RahJjtUm9LxIWZRWKld55CK_Ktb9BoUhxuM/Asistencia";

      try {
        const [data1, data2, data3] = await Promise.all([
          fetch(url1).then((response) => response.json()),
          fetch(url2).then((response) => response.json()),
          fetch(url3).then((response) => response.json()),
        ]);

        const newData = {};

        newData["Mexico City"] = {
          Cash: Number(data1[0]["Efectivo:"]),
          Card: Number(data1[0]["Tarjeta:"]),
        };

        newData["Barcelona"] = {
          Cash: Number(data2[0]["Efectivo:"]),
          Card: Number(data2[0]["Tarjeta:"]),
        };

        newData["Milwaukee"] = {
          Cash: Number(data3[0]["Efectivo:"]),
          Card: Number(data3[0]["Tarjeta:"]),
        };

        setCashCard((prevCashCard) => ({ ...prevCashCard, ...newData }));
        console.log(newData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    traerData();
  }, []);

  const handleRowClick = (params) => {
    // Aquí puedes redireccionar a la página que desees
    // Por ejemplo, supongamos que tienes una ruta '/detalle-usuario/:id'

    if (params.field === "phone") {
      window.location.href = `https://api.whatsapp.com/send/?phone=${params.row.phone}&text&type=phone_number&app_absent=0`;
    }

    if (params.field === "password") {
      copy(params.row.password);
      setCopiar({ copied: true });
      setTimeout(() => {
        setCopiar({ copied: false });
      }, 1000);
    }
  };

  const columns = [
    {
      field: "username",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "password",
      headerName: "Contraseña",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "city",
      headerName: "Ciudad",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "paymentmethod",
      headerName: "Método de Pago",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      flex: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900">
      <Box
        className="m-10"
        display="grid"
        gridTemplateColumns={
          isSmallScreen ? "repeat(1, 1fr)" : "repeat(12, 1fr)"
        }
        gridAutoRows="140px"
        gap="60px"
        justifyContent="center"
      >
        {Object.entries(campaignCounts["SEP-OCT"]).map(
          ([city, count, metodosPago]) => (
            <Box
              gridColumn={isSmallScreen ? "span 4" : "span 3"}
              className="bg-gradient-to-r from-purple-500 to-sky-500 rounded-lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                key={city}
                title={count}
                subtitle={city}
                cash={JSON.stringify(CashCard[city].Cash, null, 2) || 0}
                card={JSON.stringify(CashCard[city].Card, null, 2) || 0}
              />
            </Box>
          )
        )}
      </Box>

      <Box className="m-5 justify-center items-center">
        <Box
          m="40px 0 0 0"
          height="100vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGridPro
            checkboxSelection
            rows={usuarios}
            columns={columns}
            onCellClick={handleRowClick}
          />
        </Box>
        <Box
          gridColumn={isSmallScreen ? "span 8" : "span 8"}
          gridRow="span 3"
          backgroundColor="#e5e5e5"
          overflow="auto"
          borderRadius="10px"
          marginTop="20px"
        >
          {/* <Box
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
          <UpcomingCities /> */}
        </Box>
      </Box>
    </div>
  );
};

export default GrillaAsistencias;
