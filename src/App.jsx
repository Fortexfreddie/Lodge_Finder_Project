import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./pages/Home";
import ListingDetails from "./components/ListingDetails";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile"
import Unauthorized from './pages/Unauthorized';
import Apartments from "./pages/Apartments";
import Lodges from "./pages/Lodges";
import Agent from "./pages/Agent";
import AgentDashboard from "./pages/agent/Dashboard";
import AgentPost from "./pages/agent/Post";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSettings from "./pages/admin/Settings";
import Maintainance from "./pages/Maintainance";
import Users from "./pages/admin/Users";
import Properties from "./pages/admin/Properties";
import Review from "./pages/admin/Review";
import Bookings from "./pages/admin/Bookings";
import Revenue from "./pages/admin/Revenue";
import Kyc from "./pages/admin/Kyc";
import KycApplication from "./pages/admin/KycApplication";
import UserProfile from "./pages/admin/UserProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listingDetails" element={<ListingDetails />} />
      <Route path="/auth/Login" element={<Login />} />
      <Route path="/auth/Signup" element={<Signup />} />
      <Route path="/Profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/Lodges" element={<Lodges />} />
      <Route path="/Apartments" element={<Apartments />} />
      <Route path="/Agent" element={<Agent />} />
      <Route path="/Agent/Dashboard" element={<AgentDashboard />} />
      <Route path="/Agent/Post" element={<AgentPost />} />
      <Route path="/admin/Revenue" element={
        <ProtectedRoute requiredRole="admin">
          <Revenue />
        </ProtectedRoute>
      } />
      
      <Route path="/admin/Dashboard" element={
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      }>
        <Route path="Users" element={<Users />} />
      </Route>  

      <Route path="/admin/Settings" element={
        <ProtectedRoute requiredRole="admin">
          <AdminSettings />
        </ProtectedRoute>
      } />

      {/* <Route path="/admin/Users" element={
        <ProtectedRoute requiredRole="admin">
          <Users />
        </ProtectedRoute>
      } /> */}
      
      <Route path="/admin/Properties" element={
        <ProtectedRoute requiredRole="admin">
          <Properties />
        </ProtectedRoute>
      } />
      <Route path="/admin/Review" element={
        <ProtectedRoute requiredRole="admin">
          <Review />
        </ProtectedRoute>
      } />
      <Route path="/admin/Bookings" element={
        <ProtectedRoute requiredRole="admin">
          <Bookings />
        </ProtectedRoute>
      } />
      <Route path="/Admin/KycApplication/Details" element={
        <ProtectedRoute requiredRole="admin">
          <Kyc />
        </ProtectedRoute>
      } />
      <Route path="/admin/KycApplication" element={
        <ProtectedRoute requiredRole="admin">
          <KycApplication />
        </ProtectedRoute>
      } />
      <Route path="/admin/UserProfile" element={
        <ProtectedRoute requiredRole="admin">
          <UserProfile />
        </ProtectedRoute>
      } />
      <Route path="/Maintainance" element={<Maintainance />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Catch-all route for undefined paths */}
      {/* <Route path="*" element={<Home />} /> change home to error 404 */}
    </Routes>
  )
}

export default App
