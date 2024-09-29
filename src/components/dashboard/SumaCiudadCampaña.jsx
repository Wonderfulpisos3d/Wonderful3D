import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../../firebaseConfig'; // Reemplaza './firebase' con la ruta correcta a tu archivo firebase.js
import { Box, Typography } from '@mui/material';

// TransactionItem component to display individual transaction items
const TransactionItem = ({ city, campaign, count, colors }) => {
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
        <Typography color={colors.greenAccent[100]} variant="h6" fontWeight="500">
          {city}
        </Typography>
        <Typography color={colors.grey[100]}>Campaña {campaign}</Typography>
      </Box>
      <Box backgroundColor="#6075FF"
          p="5px 10px"
          borderRadius="8px"
          color="white"
          > {count} alumnos</Box>
    </Box>
  );
};

const MostrarFechasUsuarios = ({ colors }) => {
  const [campaignCounts, setCampaignCounts] = useState({
    'Agosto': {},
     "Septiembre": {} 
  });

  useEffect(() => {
    const obtenerFechasUsuarios = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, 'usuarios');
        const snapshot = await getDocs(usuariosRef);

        let newCampaignCounts = {
          'Agosto': {}, 
          "Septiembre": {} 
        };
        
        snapshot.docs.forEach((doc) => {
          const fecha = doc.data().date;
          const city = doc.data().city;
          

          if (fecha && fecha.slice(0, 4) === '2023') {
            const mes = fecha.slice(5, 7);
            const dia = Number(fecha.slice(8,11));

            if (((mes === '08' && (dia >= 5 &&  dia <= 31)) || (mes === "09" && (dia>=2 &&  dia <= 7)))) {
              updateCityCount(newCampaignCounts, 'Agosto', city);
            }
            else if(((mes === '09' && (dia >= 16 &&  dia <= 30)) || (mes === "10" && (dia>=2 &&  dia <= 14)))){
              updateCityCount(newCampaignCounts, 'Septiembre', city);
            }
          }
        });

        setCampaignCounts(newCampaignCounts);
      } catch (error) {
      }
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

  return (
    <Box display="grid" gridTemplateColumns="repeat(8, 1fr)" gap="20px">
      <Box gridColumn="span 8">
        <Box backgroundColor={colors.primary[400]} overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
              Campaña Agosto 2023
            </Typography>
          </Box>
          {Object.entries(campaignCounts['Agosto']).map(([city, count]) => (
            <TransactionItem
              key={city}
              city={city}
              campaign="Agosto"
              count={count}
              colors={colors}
            />
          ))}
        </Box>
        
      </Box>
      <Box gridColumn="span 8">
        <Box backgroundColor={colors.primary[400]} overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid #581c87`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
              Campaña Septiembre 2023
            </Typography>
          </Box>
          {Object.entries(campaignCounts['Septiembre']).map(([city, count]) => (
            <TransactionItem
              key={city}
              city={city}
              campaign="Septiembre"
              count={count}
              colors={colors}
            />
          ))}
        </Box>
        
      </Box>
      <Box gridColumn="span 1">
        <Box backgroundColor={colors.primary[400]} overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
          </Box>
          Wonderful
        </Box>
        
      </Box>
      
    </Box>
  );
};

export default MostrarFechasUsuarios;
