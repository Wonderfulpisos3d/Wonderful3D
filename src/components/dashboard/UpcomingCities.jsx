import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const TransactionItem = ({ transaction, colors }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid #581c87`}
      borderRadius="10px"
      p="15px"
    >
      <Box>
        <Typography
          color={colors.greenAccent[100]}
          variant="h6"
          fontWeight="500"
        >
          {transaction.txId}
        </Typography>
      </Box>
      <Box color="#666665">{transaction.date}</Box>
      <Box
        backgroundColor="#6075FF"
        p="5px 10px"
        borderRadius="8px"
        color="white"
      >
        {transaction.inscriptos} inscriptos
      </Box>
    </Box>
  );
};

export default function UpcomingCities() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [inscriptosCampañaAgostoUSA, setInscriptosCampañaAgostoUSA] = useState(
    {}
  );

  useEffect(() => {
    async function fetchData() {
      // const url2 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=NOV-DIC 2023&FILTER[ADDRESS_CITY]=Zaragoza`
      const url2 = 'https://opensheet.elk.sh/1xlER7dpVQHMh-0jpGYMtGV5NbLqDKV4yOYCo1P0rW-0/Inscripciones';
      const url1 = `https://opensheet.elk.sh/1rzqs452ClJoXRqFJLNCuAWpZdjND5A5fcMB7cd0vD0o/Inscripciones`;

      
      try {
        const response1 = await fetch(url1);
        const data1 = (await response1.json()).length;


        const response2 = await fetch(url2);
        const data2 = (await response2.json()).length;

        // const response17 = await fetch(url18);
        // const data17 = await response17.json();

        return [data1, data2]; // Retorna los datos en un arreglo
      } catch (error) {
        console.error("Error:", error);
        return [];
      }
    }
    fetchData()
      .then((dataArray) => {
        setInscriptosCampañaAgostoUSA({
          'Fresno': dataArray[0],
          'Dallas': dataArray[1],
        });
      })
      .catch((error) => {
        console.error("Error en la función fetchData:", error);
      });
  }, []);


  return (
    <div>
      <Box>
        {
          <TransactionItem
            key="Fresno"
            transaction={{
              txId: "Fresno",
              inscriptos: inscriptosCampañaAgostoUSA["Fresno"] || 0,
            }}
            colors={colors}
          />
        }
        {
          <TransactionItem
            key="Dallas"
            transaction={{
              txId: "Dallas",
              inscriptos: inscriptosCampañaAgostoUSA["Dallas"] || 0,
            }}
            colors={colors}
          />
        }
      </Box>
    </div>
  );
}
