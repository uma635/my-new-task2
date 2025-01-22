// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';

// const PrivateRoute = ({ children }) => {
//   return localStorage.getItem('token') ? children : <Navigate to="/" />;
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route
//           path="/home"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;




import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // No need for BrowserRouter here
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

// PrivateRoute component to protect the /home route
const PrivateRoute = ({ children }) => {
  return localStorage.getItem('token') ? children : <Navigate to="/" />; // Check if token exists
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Public route */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
};

export default App;


