import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import firebaseApp from '../../../firebaseConfig';
import { Box, useTheme } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { tokens } from "../../../theme"
import Header from "../Header"

const Team = () => {
  const [usuarios, setUsuarios] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const usuariosRef = collection(db, 'usuarios');
  
    getDocs(usuariosRef)
      .then((querySnapshot) => {
        const mockDataTeam = [];
  
        querySnapshot.forEach((doc) => {
          const usuario = { id: doc.id, ...doc.data() };
          mockDataTeam.push(usuario);
        });
  
        setUsuarios(mockDataTeam);
      })
      .catch((error) => {
        console.error('Error fetching documents: ', error);
      });
  }, []);
  
  const columns = [
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "date",
      headerName: "Fecha Curso",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "password",
      headerName: "Contraseña",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "paymentmethod",
      headerName: "Metodo de Pago",
      flex: 1
    },
      {
        field: "phone",
        headerName: "Teléfono",
        flex: 1
      },
    {
      field: "fechabitrix",
      headerName: "Fecha Creación",
      flex: 1
    }
  ];

  return (
    <Box m="20px" className="min-h-screen">
      <Box
        m="40px 0 0 0"
        height="75vh"
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
        <DataGridPro checkboxSelection rows={usuarios} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
