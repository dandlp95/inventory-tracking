import { useEffect, useState, useRef } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import axios from "axios";

function AddInventoryForm() {
  const urlAllWarehouses = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState(null);

  const { id } = useParams(); // This is id of the product

  const quantityInputRef = useRef();
  const warehouseInputRef = useRef();

  function addInventoryHandler(qty, url){
      const options = {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(qty)
      };
      fetch(url, options)

  }

  function submissionHandler(e) {
    e.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredWarehouse = warehouseInputRef.current.value;
    const productId = id;

    const quantity = {
      quantity: enteredQuantity,
    };

    const urlReq = `http://localhost:8080/warehouses/${enteredWarehouse}/${productId}`;

    addInventoryHandler(quantity, urlReq);
  }

  useEffect(() => {
    axios.get(urlAllWarehouses).then((response) => {
      setWarehouses(response.data);
    });
  }, [urlAllWarehouses]);

  if (warehouses) {
    return (
      <form onSubmit={submissionHandler}>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" required ref={quantityInputRef} />

        <label htmlFor="warehouse">Select the Warehouse: </label>
        <select name="warehouse" id="warehouse" ref={warehouseInputRef}>
          {warehouses.map((warehouse) => {
            return <option value={warehouse._id}>{warehouse.name}</option>;
          })}
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddInventoryForm;
