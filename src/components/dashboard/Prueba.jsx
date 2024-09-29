import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../../firebase'; // Reemplaza './firebase' con la ruta correcta a tu archivo firebase.js
import { Box, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const StatBox = ({ title, subtitle, icon }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={2}
      width="100%"
      border="1px solid #ddd"
      borderRadius="4px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >
      {icon}
      <Typography variant="h5" fontWeight="600" mt={1}>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
};

const CiudadActual = ({ colors }) => {
  const [cityCounts, setCityCounts] = useState({});

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

            if (mes === '07' || mes === '08') {
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

  return (
    <div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap={2}
        padding={3}
        border="1px solid #ddd"
        borderRadius="4px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        backgroundColor="#141b2d"
      >
        {Object.entries(cityCounts).map(([city, count]) => (
          <StatBox
            key={city}
            title={count}
            subtitle={city}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        ))}
      </Box>
    </div>
  );
};

export default CiudadActual;