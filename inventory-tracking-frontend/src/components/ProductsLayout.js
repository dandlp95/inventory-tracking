import React, { useState, useEffect } from "react";
import EditProductForm from "./EditProductForm";
import AddProductForm from "./AddProductForm";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsLayout() {
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);

  console.log(products);

  if (products) {
    return (
      <div>
        {products.map((product) => {
          async function deleteProduct() {
            const id = product._id;
            const url = `http://localhost:8080/products/delete_product/${id}`;

            const options = {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            };
            await fetch(url, options);
            window.location.reload();
          }

          return (
            <div>
              <h2>{product.productName}</h2>
              <p>{product.description}</p>
              <p>{product.quantity}</p>
              <button onClick={deleteProduct}>Delete Product</button>
              <Link to={`/edit_product/${product._id}`}>Edit Product</Link>
              <Link to={`/add_inventory/${product._id}`}>
                Add Product to Warehouse Inventory
              </Link>
            </div>
          );
        })}
        <div>
          <Link to="/add_product">
            <button>Add Product</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}

export default ProductsLayout;
