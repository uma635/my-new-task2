const ProductList = ({ products , handleDelete }) => {
    if (products.length === 0) return <p>No Product Found</p>;
  
    return (
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button
                onClick={() => handleDelete(product.name)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                className="delete-button">
                Delete
              </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ProductList;
  