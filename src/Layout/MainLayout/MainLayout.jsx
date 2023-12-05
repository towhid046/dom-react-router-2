import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <>
    <div>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </div>
    </>
  )
}
