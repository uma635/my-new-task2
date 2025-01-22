// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './styles.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './styles.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/my-new-task2">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// mport App from './App.jsx'; // Your main App component

// // Create the root of your app and render it
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter basename="/my-new-task2">  {/* Set the basename for the router */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

// import React, { StrictMode } from 'react'; // Import React and StrictMode
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for createRoot
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import './index.css'; // Your styles
// i




import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensure BrowserRouter is here
import './index.css'; // Your styles
import App from './App.jsx'; // Your main App component
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/my-new-task2"> {/* Set the base path */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
