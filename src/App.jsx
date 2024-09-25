import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./pages/error"
import WebLayouts from "./layouts/WebLayout"
import Profile from "./pages/Profile"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import ProjectComponents from "./components/projectComponent"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WebLayouts />}>
                    <Route path="/" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/projectedit" element={<ProjectComponents />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App