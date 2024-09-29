import React, { useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot, query, where } from 'firebase/firestore';
import firebaseApp from '../../firebaseConfig'; // Reemplaza './firebase' con la ruta correcta a tu archivo firebase.js
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";

const TransactionItem = ({ transaction, colors }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
      alignItems="center"
      borderBottom={`4px solid #581c87`}
      borderRadius="10px"
      p="15px"
    >
      <Box>
        <Typography
          color="white"
          variant="h6"
          fontWeight="500"
        >
          {transaction.txId}
        </Typography>
        
      </Box>
      <Box
        style={{ marginRight: '20px' }}
        p="5px 10px"
        borderRadius="8px"
        color="white"
        fontWeight="500"
      >
        {transaction.inscriptos} inscriptos
      </Box>
      <Box
        p="5px 10px"
        borderRadius="8px"
        color="#66FB48"
        fontWeight="500"
      >
        {transaction.cost} asistieron
      </Box>
      <Box
        p="5px 10px"
        borderRadius="8px"
        color="#FF2B00"
        fontWeight="500"
      >
        {transaction.inscriptos - transaction.cost} no asistieron
      </Box>
      <Box
        p="5px 10px"
        borderRadius="8px"
        color="white"
        fontWeight="500"
      >
        {Math.ceil((transaction.cost*100)/transaction.inscriptos)}% asistencia
      </Box>
    </Box>
  );
};

export default function SumaMexico() {
  const [sumasPorCiudad, setSumasPorCiudad] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [inscriptosCampañaAgostoMexico, setInscriptosCampañaAgostoMexico] = useState({})

  useEffect(()=>{
    async function fetchData() {
      const url1 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Chihuahua`;
      const url2 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Hermosillo`;
      const url3 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Mexico City`;
      const url4 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Monterrey`;
      const url5 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Tijuana`;
      const url6 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Culiacan`;
      const url7 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Guadalajara`;
      const url8 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Puebla`;
      const url9 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Cancun`;
    
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
        const data5 = await response5.json();
  
        const response6 = await fetch(url6);
        const data6 = await response6.json();
  
        const response7 = await fetch(url7);
        const data7 = await response7.json();
  
        const response8 = await fetch(url8);
        const data8 = await response8.json();
  
        const response9 = await fetch(url9);
        const data9 = await response9.json();
    
        return [data1, data2, data3,data4,data5,data6,data7,data8,data9]; // Retorna los datos en un arreglo
      } 
      catch (error) {
        console.error('Error:', error);
        return [];
      }
    }
    fetchData()
    .then(dataArray => {
      setInscriptosCampañaAgostoMexico({"Chihuahua": dataArray[0].total,
      "Hermosillo": dataArray[1].total,
      "Mexico City": dataArray[2].total,
      "Monterrey": dataArray[3].total,
      "Tijuana": dataArray[4].total,
      "Culiacan": dataArray[5].total,
      "Guadalajara": dataArray[6].total,
      "Puebla": dataArray[7].total,
      "Cancun": dataArray[8].total,
    })
    })
    .catch(error => {
      console.error('Error en la función fetchData:', error);
    });

  },[])

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const usuariosRef = collection(db, 'usuarios');
    const q = query(usuariosRef, where('city', '!=', ''));

    const allowedCities = [
        'Mexico City', 'Tijuana', 'Hermosillo', 'Monterrey', 'Chihuahua',
        'Culiacan', 'Guadalajara', 'Puebla', 'Cancun', 'La Paz BCS', 'Mexicali'
      ];

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const sumas = {};

      snapshot.forEach((doc) => {
        const city = doc.data().city;
        const fecha = doc.data().date;
        let formateada = new Date(fecha)
        let mes = formateada.getMonth() + 1;

        if (allowedCities.includes(city) && mes === 8) {
          sumas[city] = (sumas[city] || 0) + 1;
        }
      });

      const sumasArray = Object.entries(sumas).map(([city, suma]) => ({
        city,
        cantidad: suma,
      }));
      setSumasPorCiudad(sumasArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {sumasPorCiudad.length > 0 ? (
        <Box>
          {sumasPorCiudad.map(({ city, cantidad }) => (
            <TransactionItem
              key={city}
              transaction={{ txId: city, cost: cantidad, inscriptos: inscriptosCampañaAgostoMexico[city] || 0}}
              colors={colors}
            />
          ))}
        </Box>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
}