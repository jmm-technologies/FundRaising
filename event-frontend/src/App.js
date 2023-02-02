import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Pages/Customer/Auth/Login';
import UserPlotsList from './Pages/Customer/Plots/Index';
import UserPlotDetail from './Pages/Customer/Plots/View';
import CreateEvent from './Pages/Customer/Plots/CreateEvent';
import SidebarProvider from './Constants/SidebarContext';
function App() {
  return (
      <SidebarProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/eventlist" element={<UserPlotsList />} />
          <Route path="/eventdetail:id" element={<UserPlotDetail />} />
          <Route path="/createevent" element={<CreateEvent />} />
        </Routes>
      </div>
      </SidebarProvider>
  );
}

export default App;
