import Accueil from "./page/accueil/Accueil"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./page/createEvente/CreateEvent"
import CreateBillet from "./page/createBillet/CreateBillet"
import Login from "./page/login/Login"
import SignupUserAccountType from "./page/signupUserAccounType/SignupUserAccountType"
import PointDeVente from "./page/pointDeVente/PointDeVente"
import PointDeVenteId from "./page/pointDeVenteId/PointDeVenteId"
import SingleEevent from "./page/singleEvent/SingleEevent"
import CreateAcount from "./page/createCount/CreateAcount"
import AccueilUser from "./page/accueiluser/AccueilUser"
import Ticket from "./page/ticket/Ticket"
import GestionBillet from "./page/gestionBillet/GestionBillet"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<CreateAcount />} />
        <Route path="/signup/organisateur" element={<Login />} />
        <Route path="/signup/account-type" element={<SignupUserAccountType />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/organisateur/point-de-vente" element={<PointDeVente />} />
        <Route path="/point-de-vente/:id" element={<PointDeVenteId />} />
        <Route path="/event/:slug" element={<SingleEevent />} />
        <Route path="/event/:slug/modified" element={<CreateEvent />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/billeterie" element={<GestionBillet />} />
        <Route path="/accueiluser" element={<AccueilUser />} />
        <Route path="/tiket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
