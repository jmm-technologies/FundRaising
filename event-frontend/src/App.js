import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Pages/Admin/Auth/Login';
import UserPlotsList from './Pages/Admin/events/Index';
import UserPlotDetail from './Pages/Admin/events/ViewAndUpdate';
import CreateEvent from './Pages/Admin/events/CreateEvent';
import SidebarProvider from './Constants/SidebarContext';
function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/event" element={<UserPlotsList />} />
          <Route path="/event/:id" element={<UserPlotDetail />} />
          <Route path="/createevent" element={<CreateEvent />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
}

export default App;
