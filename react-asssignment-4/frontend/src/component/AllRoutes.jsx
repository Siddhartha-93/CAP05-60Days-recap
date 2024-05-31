import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import TicketView from '../pages/ticketView';
import TicketCreate from '../pages/ticketCreate';
import TicketEdit from '../pages/ticketEdit';
import Login from "../pages/loginPage";
import Tickets from "../pages/ticket";
import PrivetRoute from "./PrivetRoute"
export default function AllRoutes() {

    return (
        <Routes>
            {/* like routing url */}
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<PrivetRoute><Home/></PrivetRoute>} />
            <Route path="/about" element={<PrivetRoute><About /> </PrivetRoute>} />
            <Route path="/contact" element={<PrivetRoute><Contact /></PrivetRoute>} />
            <Route path="/ticket" element={<PrivetRoute><Tickets /></PrivetRoute>} />
            {/* component router url */}
            <Route path="/ticket/create" element={<PrivetRoute><TicketCreate /></PrivetRoute>} />
            <Route path="/ticket/edit/:id" element={<PrivetRoute><TicketEdit /></PrivetRoute>} /> 
            <Route path="/ticket/view/:id" element={<PrivetRoute><TicketView /></PrivetRoute>}/>
        </Routes>
    )   
}