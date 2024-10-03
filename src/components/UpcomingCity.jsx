import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const TransactionItem = ({ transaction }) => {
  const theme = useTheme();

  return (
    <Box
      className="bg-gradient-to-r from-purple-500 to-sky-500 rounded-lg p-4 mb-4"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Typography color="white" variant="h5" fontWeight="500" mr="0.5em">
          {transaction.title}
        </Typography>
      </Box>
      <Box color="#666665">{transaction.date}</Box>
      <Box
        backgroundColor="#f3f3f3"
        p="5px 10px"
        borderRadius="8px"
        color="black"
        fontSize="1.1em"
      >
        {transaction.inscriptos} inscriptos
      </Box>
    </Box>
  );
};

export default function UpcomingCity(equipo) {
  const theme = useTheme();
  const [inscriptos, setInscriptos] = useState(0);
  const [city, setCity] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let url;
      if (equipo.equipo1) {
        url = `https://opensheet.elk.sh/16dK63efNIhXABO3uLuFKWuvguH_N29Q6_pLBhiSwVcY/Inscripciones`;
        setCity(equipo.cities[0]);
      } else if (equipo.equipo2) {
        url = `https://opensheet.elk.sh/17CGQyACZYzq1-xvl6Jot5JdIf3cKiJTlctKT6XQ96r8/Inscripciones`;
        setCity(equipo.cities[1]);
      } else if (equipo.equipo3) {
        url = `https://opensheet.elk.sh/1XTYNJp-dHys_tyvidSOYPlh7XF82njC9UA4e8LBRm3I/Inscripciones`;
        setCity(equipo.cities[2]);
      }
      else {
        url = `https://opensheet.elk.sh/1is-VVDn2lBXjU4QuSemhBo8sAN33hoDJ8wEsVOTvL3k/Inscripciones`;
        setCity(equipo.cities[0]);
      }

      try {
        const response = await fetch(url);
        const data = (await response.json()).length;

        setInscriptos(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Box>
        {
          <TransactionItem
            key={city}
            transaction={{
              title: city,
              inscriptos: inscriptos,
            }}
          />
        }
      </Box>
    </div>
  );
}
