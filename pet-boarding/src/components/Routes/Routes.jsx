import { Route, Routes } from "react-router"
import { Createpet } from "../Createpet/Createpet"
import { Home } from "../Home/Home"
import { Navbar } from "../Navbar/Navbar"

export const AllRoutes = ()=>{

    return (
        <div id="allroutes">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Createpet />} />
            </Routes>
        </div>
    )
}