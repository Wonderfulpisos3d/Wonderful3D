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

export default function SumaUSA() {
  const [sumasPorCiudad, setSumasPorCiudad] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [inscriptosCampañaAgostoUSA, setInscriptosCampañaAgostoUSA] = useState({})


  useEffect(()=>{
    async function fetchData() {
      const url1 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Arlington`;
      const url2 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Charleston`;
      const url3 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Charlotte`;
      const url4 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto%202023&FILTER[ADDRESS_CITY]=Los%20Angeles`;
      const url5 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Nashville`;
      const url6 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Philadelphia`;
      const url7 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Phoenix`;
      const url8 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=San Diego`;
      const url9 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=San Jose`;
      const url10 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Seattle`;
      const url11 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=San Antonio`
      const url12 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Newark`
      const url13 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Dallas`
      const url14 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Boston`
      const url15 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Austin`
      const url16 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=New York`
      const url17 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Houston`
      const url18 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Chicago`
      const url19 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Orlando`
      const url20 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Minneapolis`
      const url21 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Miami`
      const url22 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Baltimore`
      const url23 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Atlanta`
      const url24 = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=Agosto 2023&FILTER[ADDRESS_CITY]=Tampa`
    
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
  
        const response10 = await fetch(url10);
        const data10 = await response10.json();

        const response11 = await fetch(url11);
        const data11 = await response11.json();

        const response12 = await fetch(url12);
        const data12 = await response12.json();

        const response13 = await fetch(url13);
        const data13 = await response13.json();

        const response14 = await fetch(url14);
        const data14 = await response14.json();

        const response15 = await fetch(url15);
        const data15 = await response15.json();

        const response16 = await fetch(url16);
        const data16 = await response16.json();

        const response17 = await fetch(url17);
        const data17 = await response17.json();

        const response18 = await fetch(url18);
        const data18 = await response18.json();

        const response19 = await fetch(url19);
        const data19 = await response19.json();

        const response20 = await fetch(url20);
        const data20 = await response20.json();

        const response21 = await fetch(url21);
        const data21 = await response21.json();

        const response22 = await fetch(url22);
        const data22 = await response22.json();

        const response23 = await fetch(url23);
        const data23 = await response23.json();

        const response24 = await fetch(url24);
        const data24 = await response24.json();
    
        return [data1, data2, data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data23,data24]; // Retorna los datos en un arreglo
      } 
      catch (error) {
        console.error('Error:', error);
        return [];
      }
    }
    fetchData()
    .then(dataArray => {
      setInscriptosCampañaAgostoUSA({"Arlington": dataArray[0].total,
      "Charleston": dataArray[1].total,
      "Charlotte": dataArray[2].total,
      "Los Angeles": dataArray[3].total,
      "Nashville": dataArray[4].total,
      "Philadelphia": dataArray[5].total,
      "Phoenix": dataArray[6].total,
      "San Diego": dataArray[7].total,
      "San Jose": dataArray[8].total,
      "Seattle": dataArray[9].total,
      "San Antonio": dataArray[10].total,
      "Newark": dataArray[11].total,
      "Dallas": dataArray[12].total,
      "Boston": dataArray[13].total,
      "Austin": dataArray[14].total,
      "New York": dataArray[15].total,
      "Houston":  dataArray[16].total,
      "Chicago":  dataArray[17].total,
      "Orlando":  dataArray[18].total,
      "Minneapolis":  dataArray[19].total,
      "Miami":  dataArray[20].total,
      "Baltimore":  dataArray[21].total,
      "Atlanta":  dataArray[22].total,
      "Tampa":  dataArray[23].total,  

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
      'Seattle', 'Nashville', 'San Jose', 'Charleston', 'Los Angeles',
      'Charlotte', 'Las Vegas', 'Arlington', 'Phoenix', 'Philadelphia',
      'Albuquerque', 'Newark NJ', 'Dallas', 'Boston', 'Austin', 'New York',
      'Houston', 'Chicago', 'Orlando', 'Minneapolis', 'Miami', 'Baltimore',
      'Atlanta', 'Tampa', 'San Antonio', 'San Diego'
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
              transaction={{ txId: city, cost: cantidad, inscriptos: inscriptosCampañaAgostoUSA[city] || 0}}
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