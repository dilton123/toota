import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriverLoginForm from "./components/Driver/DriverLoginForm";
import DriverRegistrationForm from "./components/Driver/DriverRegistrationForm";
import DriverProfile from "./components/Driver/DriverProfile"
import History from './components/Driver/History'
import UserLoginForm from "./components/User/UserLoginForm";
import UserRegistrationForm from "./components/User/UserRegistrationForm";
import ForgotPasswordForm from "./components/User/ForgotPasswordForm";
import ResetPasswordForm from "./components/User/ResetPasswordForm";
import NotFound from "./pages/NotFound";
import Dashboard from './components/User/Dashboard';
import DriverDashboard from './components/Driver/DriverDashboard';
import DocumentUploadForm from "./components/Driver/DocumentUploadForm";
import ProfilePage from './components/User/ProfilePage';
import Layout from './components/Layout/User/Layout';
import LayoutDriver from './components/Layout/Driver/LayoutDriver'
import RideHistory from './pages/RideHistory';
import Calendar from './pages/Calendar';
import Logout from './components/User/Logout';
import DriverLogout from './components/Driver/DriverLogout'
import LayoutAdmin from './components/Layout/Admin/LayoutAdmin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminProfile from './components/Admin/AdminProfile';
import Drivers from './components/Admin/Drivers';
import Users from './components/Admin/Users';
import Trips from './components/Admin/Trips';
import Payments from './components/Admin/Payments';
import AdminLogout from './components/Admin/AdminLogout';
import AdminLogin from './components/Admin/AdminLogin';
import AdminSignup from './components/Admin/AdminSignup';


function App() {

  return (
    <Router>
      
        <Routes>
          <Route path="/signup/driver" element={<DriverRegistrationForm />} />
          <Route path="/login/driver" element={<DriverLoginForm />} />
          <Route path="/signup/user" element={<UserRegistrationForm />} />
          <Route path="/login/user" element={<UserLoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password/:uidb64/:token" component={ResetPasswordForm} />
          <Route path="/dashboard/user/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='trip-history' element= {<RideHistory />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='logout' element={<Logout />} />
          </Route>
          <Route path="/signup/admin/" element={<AdminSignup />} />
          <Route path="/login/admin/" element={<AdminLogin />} />
          <Route path="/dashboard/admin/" element={<LayoutAdmin />} >
            <Route index element={<AdminDashboard />} />
            <Route path='profile' element={<AdminProfile />} />
            <Route path='users' element= {<Users />} />
            <Route path='drivers' element={<Drivers />} />
            <Route path='payments' element={<Payments />} />
            <Route path='logout' element={<AdminLogout />} />
          </Route>

          <Route path="/dashboard/driver/" element={<LayoutDriver />} >
            <Route index element={<DriverDashboard />} />
            <Route path='profile' element={<DriverProfile />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='trip-history' element= {<History />} />
            <Route path='logout' element={<DriverLogout />} />
          </Route>


          {/*<Route path="/profile/user/:token" element={<ProfilePage />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </Router>
    
  );
}

export default App;

