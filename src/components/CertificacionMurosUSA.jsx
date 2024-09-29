import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import certificado from '../assets/Certificado-MurosUsa-2000.jpg';
import PlayfairDisplaySC from '../assets/fonts/PlayfairDisplaySC-Regular.ttf';
import AlexBrush from '../assets/fonts/AlexBrush-Regular.ttf';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseApp from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Volver from './Volver';

const CertificacionMurosUSA = () => {
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const user = auth.currentUser;
  const userid = user ? user.uid : null;

  const [certificadoGenerado, setCertificadoGenerado] = useState(false);

  async function getRole(uid) {
    const docRef = doc(firestore, `usuarios/${uid}`);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data;
    } else {
      return null;
    }
  }

  async function fetch() {
    const result = await getRole(userid);
    const myData = result;
    var doc = new jsPDF({ orientation: 'l', unit: 'px', format: 'a4', compress: true });
    doc.addFont(PlayfairDisplaySC, 'Playfair', 'normal');
    doc.addFont(AlexBrush, 'AlexBrush', 'normal');
    doc.addImage(certificado, 'PNG', 0, 0, 640, 450);
    doc.setFont('Playfair');
    doc.setFontSize(28);
    doc.text(myData.username, 320, 287, { align: 'center' });
    doc.setFont('AlexBrush');
    doc.setFontSize(20);
    doc.text(myData.fechacertificado, 460, 390, { align: 'center' });
    doc.setFont('AlexBrush');
    doc.setFontSize(28);
    doc.text(myData.city, 315, 390, { align: 'center' });
    doc.save('Certificado');

    const storage = getStorage();
    const storageRef = ref(storage, `${userid}`);
    const pdfBlob = doc.output('blob');

    try {
      uploadBytes(storageRef, pdfBlob);
      setCertificadoGenerado(true);
    } catch (error) {
      console.error('Error uploading PDF to Firebase Storage:', error);
    }
    return myData;
  }

  return (
    <div className="flex flex-col items-center p-20 h-screen mt-[-40px]">
      <Typography variant="h3" component="h1" className="mb-8 text-5xl text-center text-white mb-4 py-4">
        ¡Felicitaciones! Has obtenido tu certificado.
      </Typography>
      <Button
        variant="contained"
        onClick={fetch} 
        className="w-full md:w-auto max-w-md mb-8 bg-fuchsia-500 hover:bg-fuchsia-600 text-white mb-4 py-4"
      >
        Descargar certificado
      </Button>
      <Volver> </Volver>
    </div>
  );
};

export default CertificacionMurosUSA;