import React, { useState } from 'react';

const AddProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (products.some((product) => product.name === name)) {
      alert('Product already exists!');
      return;
    }
    setProducts([...products, { name, price }]);
    setName('');
    setPrice('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
