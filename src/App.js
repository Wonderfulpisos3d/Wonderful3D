import { Route, useLocation, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AdminNavbar from "./components/AdminNavbar";
import CertificacionUSA from "./components/CertificacionUSA";
import CertificacionWORLD from "./components/CertificacionWORLD";
import HomeUSA from "./components/HomeUSA";
import HomeOnline from "./components/HomeOnline";
import HomeWorld from "./components/HomeWORLD";
import HomeMuros from "./components/HomeMuros";
import ManualUSA from "./components/ManualUSA";
import ManualMurosUSA from "./components/ManualMurosUSA";
import ManualMesasUSA from "./components/ManualMesasUSA";
import ManualWORLD from "./components/ManualWORLD";
import ManualArgentina from "./components/ManualArgentina";
import ManualMexico from "./components/ManualMexico";
import Navbar from "./components/Navbar";
import AdminPage from "./components/PanelAdmin";
import SignIn from "./components/Sign-In";
import VideosWORLD from "./components/VideosWORLD";
import PasswordReset from "./components/Password-recovery";
import styles from "./styles";
import Productos from "./components/calculadora/Productos";
import VideosUSA from "./components/VideosUSA";
import SuperAdminNavbar from "./components/SuperAdminNavbar";
import GrillaAsistencias from "./components/GrillaAsistentes";
import AsesorNavBar from "./components/AsesoresNavBar";
import RegistroPage from "./components/PanelRegistroCurso";
import CertificacionOnline from "./components/CertificacionOnline";
import ManualOnline from "./components/ManualOnline";
import ProductosWorld from "./components/calculadora/ProductosWorld";
import VideosOnline from "./components/VideosOnline";
import VideoMurosUSA from "./components/VideoMurosUSA";
import VideoPlayer from "./components/Video";
import Dashboard from "./components/dashboard/index";
import Team from "./components/componentes dashboard/team";
import SupportForm from "./components/soporte";
import SupportFormExt from "./components/soporte-ext";
import Testing from "./components/testing";
import CursoVideos from "./components/CursoOnlineVideo";
import CursoFormulario from "./components/CursoOnlineForm";
import VideosMurosUSA from "./components/VideoMurosUSA";
import HomeMurosWorld from "./components/HomeMurosWorld";
import Tienda from "./components/Tienda";

function App() {
  const auth = getAuth(firebaseApp);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [city, setCity] = useState("");
  const firestore = getFirestore(firebaseApp);

  async function getRole(uid) {
    const docRef = doc(firestore, `usuarios/${uid}`);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null;
    }
  }

  function setUserWithFirebaseAndRole(usuarioFirebase) {
    getRole(usuarioFirebase.uid).then((role) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        role: role.rol,
        city: role.city,
        origen: role.origen,
        username: role.username,
      };
      setUser(userData);
      setIsLoggedIn(true);
      saveSessionToLocalStorage(userData);
    });
  }

  function saveSessionToLocalStorage(userData) {
    localStorage.setItem("usuario", JSON.stringify(userData));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUserWithFirebaseAndRole(usuarioFirebase);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    const storedSession = localStorage.getItem("usuario");
    if (storedSession) {
      const userData = JSON.parse(storedSession);
      setUser(userData);
      setIsLoggedIn(true);
    }

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/recuperar-contraseña"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  const renderProtectedComponent = (Component, allowedRoles) => {
    if (!isLoggedIn) {
      return <Redirect to="/home" />;
    }

    if (allowedRoles.includes(user.role)) {
      return <Component user={user} />;
    } else {
      return <Redirect to="/unauthorized" />;
    }
  };

  // Obtener la ruta actual
  const currentPath = location.pathname;

  let currentPage;
  if (currentPath === "/home") {
    currentPage = "home";
  } else if (currentPath === "/videos") {
    currentPage = "videos";
  } else if (currentPath === "/certificacion") {
    currentPage = "certificacion";
  } else {
    currentPage = ""; // Página desconocida
  }

  const usaCities = [
    "Seattle",
    "Oklahoma City",
    "Nashville",
    "San Jose",
    "Charleston",
    "Los Angeles",
    "Charlotte",
    "Las Vegas",
    "Arlington",
    "Phoenix",
    "Philadelphia",
    "Albuquerque",
    "Newark NJ",
    "Newark",
    "Dallas",
    "Boston",
    "Austin",
    "New York",
    "Houston",
    "Chicago",
    "Orlando",
    "Minneapolis",
    "Milwaukee",
    "Miami",
    "Baltimore",
    "Atlanta",
    "Tampa",
    "San Antonio",
    "San Diego",
    "Sacramento",
    "San Francisco",
    "Fresno",
    "Fort Worth",
    "San Bernardino",
    "Tucson",
    "Denver",
    "Detroit",
    "New Haven",
    "Providence",
    "El Paso", 
    "Columbia",
    "Columbus",
    "Louisville",
    "Indianapolis",
    "Jacksonville",
    "Little Rock",
    "Salt Lake City",
  ];

  const mexicoCities = [
    "Mexico City",
    "Tijuana",
    "Hermosillo",
    "Monterrey",
    "Chihuahua",
    "Culiacan",
    "Guadalajara",
    "Puebla",
    "Cancun",
    "Veracruz",
    "Oaxaca",
    "Morelia",
    "Leon",
    "Aguascalientes",
    "Zapopan",
    "Ciudad Juarez",
    "Murcia",
  ];

  const argentinaCities = [
    "Mar del Plata",
    "Buenos Aires",
    "Parana",
    "Rosario",
    "Misiones",
    "Resistencia",
    "San Miguel de Tucuman",
    "Mendoza",
    "Neuquen",
    "Trelew",
    "Comod Rivadavia",
    "Rio Gallegos",
  ];

  const shouldShowAdminComponents = user && user.role === "admin";
  const shouldShowUSAComponents = user && usaCities.includes(user.city);
  const shouldShowArgentinaComponents =
    user && argentinaCities.includes(user.city);
  const shouldShowMexicoComponents = user && mexicoCities.includes(user.city);
  const online = user && user.city === "online";
  const shouldShowMurosWolrd =
    user && mexicoCities.includes(user.city) && user.origen === "Muros";
  const shouldShowMurosUSA =
    user && usaCities.includes(user.city) && user.origen === "Muros";

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {showNavbar && (
            <>
              {user ? (
                <>
                  {user.role === "admin" && <AdminNavbar />}
                  {user.role === "superadmin" && <SuperAdminNavbar />}
                  {user.role === "user" && <Navbar currentPage={currentPage} />}
                  {user.role === "asesor" && <AsesorNavBar />}
                  {user.role === "online" && (
                    <Navbar currentPage={currentPage} />
                  )}
                </>
              ) : (
                <> </>
              )}
            </>
          )}
        </div>
      </div>

      <Route exact path="/" component={SignIn} />
      <Route exact path="/curso-online-registro" component={CursoFormulario} />
      <Route path="/registro" render={() => <RegistroPage />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/usuarios-registrados" render={() => <Team />} />
      <Route path="/curso-online-videos" render={() => <CursoVideos />} />
      <Route path="/tienda" render={() => <Tienda />} />

      {shouldShowMurosWolrd ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeMurosWorld, [
                "user",
                "admin",
                "superadmin",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualMurosUSA />} />
          <Route path="/videos" render={() => <VideosMurosUSA />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
        </>
      ) : shouldShowMurosUSA ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeMuros, [
                "user",
                "admin",
                "superadmin",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualMurosUSA />} />
          <Route path="/videos" render={() => <VideosMurosUSA />} />
          <Route path="/productos" render={() => <Productos />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
        </>
      ) : shouldShowUSAComponents ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeUSA, [
                "user",
                "admin",
                "superadmin",
                "asesor",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualUSA />} />
          <Route path="/videos" render={() => <VideosUSA />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
          <Route path="/productos" render={() => <Productos />} />
        </>
      ) : shouldShowAdminComponents ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(AdminPage, [
                "admin",
                "superadmin",
                "asesor",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualOnline />} />
          <Route path="/videos" render={() => <VideosOnline />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
          {/* <Route path="/productos" render={() => <ProductosWorld />} /> */}
        </>
      ) : online ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeOnline, [
                "user",
                "admin",
                "superadmin",
                "asesor",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualOnline />} />
          <Route path="/videos" render={() => <VideosOnline />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
          <Route path="/productos" render={() => <ProductosWorld />} />
        </>
      ) : shouldShowArgentinaComponents ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeWorld, [
                "user",
                "admin",
                "superadmin",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualArgentina />} />
          <Route path="/videos" render={() => <VideosWORLD />} />
          <Route path="/productos" render={() => <ProductosWorld />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
        </>
      ) : shouldShowMexicoComponents ? (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeWorld, [
                "user",
                "admin",
                "superadmin",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualMexico />} />
          <Route path="/videos" render={() => <VideosWORLD />} />
          <Route path="/productos" render={() => <ProductosWorld />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
        </>
      ) : (
        <>
          <Route
            path="/home"
            render={() =>
              renderProtectedComponent(HomeWorld, [
                "user",
                "admin",
                "superadmin",
                "online",
              ])
            }
          />
          <Route path="/manual" render={() => <ManualWORLD />} />
          <Route path="/videos" render={() => <VideosWORLD />} />
          <Route path="/productos" render={() => <ProductosWorld />} />
          <Route
            path="/lista-asistentes"
            render={() => <GrillaAsistencias />}
          />
        </>
      )}

      <Route path="/support" render={() => <SupportForm />} />
      <Route path="/support-ext" render={() => <SupportFormExt />} />

      <Route path="/recuperar-contraseña" render={() => <PasswordReset />} />
      {user && (user.role === "admin" || user.role === "superadmin") && (
        <Route
          path="/asistencias"
          render={() =>
            renderProtectedComponent(AdminPage, [
              "admin",
              "superadmin",
              "online",
            ])
          }
        />
      )}
    </div>
  );
}

export default App;
