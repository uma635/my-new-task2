// import React, { useState } from 'react';
// import AddProductForm from '../components/AddProductForm';
// import ProductList from '../components/ProductList';
// import SearchBar from '../components/SearchBar';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear token
//     navigate('/'); // Redirect to login
//   };

//   const handleDelete = (productName) => {
//     const updatedProducts = products.filter(
//       (product) => product.name !== productName
//     );
//     setProducts(updatedProducts);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       <h1>Home Page</h1>
//       <AddProductForm products={products} setProducts={setProducts} />
//       <SearchBar setSearchQuery={setSearchQuery} />
//       <ProductList products={filteredProducts} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Load initial state of products from localStorage
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Save products to localStorage whenever they are updated
  useEffect(() => {
    console.log('Saving products to localStorage:', products); // Debugging
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token only
    console.log('User logged out'); // Debugging
    navigate('/'); // Redirect to login
  };

  const handleDelete = (productName) => {
    const updatedProducts = products.filter(
      (product) => product.name !== productName
    );
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Home Page</h1>
      <AddProductForm products={products} setProducts={setProducts} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} handleDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
