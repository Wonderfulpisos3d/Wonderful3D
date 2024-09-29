import React, {useState} from 'react';
import { Button, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import certificado from '../assets/Certificado-MurosUsa-2000.jpg';
import PlayfairDisplaySC from '../assets/fonts/PlayfairDisplaySC-Regular.ttf';
import AlexBrush from '../assets/fonts/AlexBrush-Regular.ttf';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseApp from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import HelpIcon from "@mui/icons-material/Help";

const Home = () => {

  const history = useHistory();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const user = auth.currentUser;
  const userid = user ? user.uid : null;

  const [certificadoGenerado, setCertificadoGenerado] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add a state for loading

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
    doc.text(myData.fechacampaña, 435, 390, { align: 'center' });
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
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 min-h-screen flex flex-col items-center justify-center mt-[-40px]">
      <img src="" alt="" />
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mt-9 py-7 sm:mb-2 text-center">
      ¡BIENVENIDO AL EMOCIONANTE MUNDO DEL PORCELANATO LÍQUIDO Y PISOS 3D!
      </h1>
      <div className='flex flex-col md:flex-row md:space-x-12'>
      <button
          className="bg-gradient-to-r from-purple-500 to-sky-500 hover:bg-fuchsia-900 text-white font-bold py-5 px-12 rounded-full w-full mb-4 text-xl" 
          onClick={fetch}
        >
          {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'DESCARGAR CERTIFICADO'
                )}
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-sky-500 hover:bg-fuchsia-900 text-white font-bold py-5 px-12 rounded-full w-full mb-4 text-xl"
          onClick={() => history.push("/manual")}>
            LEER MANUAL
          </button>
        <button
          className="bg-gradient-to-r from-purple-500 to-sky-500 hover:bg-fuchsia-900 text-white font-bold py-5 px-12 rounded-full w-full mb-4 text-xl"
          onClick={() => history.push("/videos")}
        >
          VER VIDEOS
        </button>
        <button
          className="bg-gradient-to-r from-purple-500 to-sky-500 hover:bg-fuchsia-900 text-white font-bold py-7 px-12 rounded-full w-full mb-4 text-xl"
          onClick={() => history.push("/productos")}
        >
          CALCULADORA
        </button>
        </div>
        <div className="rounded p-4 sm:p-8 max-w-3xl w-full flex flex-col items-center justify-center">
        <p className="text-justify sm:text-lg md:text-base text-white mb-8">
        En este curso completo y práctico, te sumergirás en el arte de crear pisos asombrosos y únicos que transformarán cualquier espacio.
Durante el curso, aprenderás todas las técnicas fundamentales y avanzadas del porcelanato líquido, desde la preparación de superficies hasta la aplicación de diseños en 3D. Explorarás una amplia gama de temas, incluyendo la selección adecuada de materiales, la mezcla y aplicación precisa del porcelanato líquido, y cómo crear impresionantes diseños tridimensionales que cautiven la vista.
        </p>      
        <Button
      variant="contained"
      style={{ backgroundColor: '#ff0000' }} // Color rojo fuerte
      startIcon={<HelpIcon />}
      className="fixed bottom-6 right-4"
      size="large"
      onClick={() => {
        history.push("/support")
      }}
    >
      Ayuda
    </Button>
      </div>
    </div>
  );
};

export default Home;