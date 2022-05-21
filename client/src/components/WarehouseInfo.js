import { useEffect, useState } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import axios from "axios";


function WarehouseInfo() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  const url = `http://localhost:8080/warehouses/${id}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setWarehouse(response.data);
    });
  }, [url]);

  if (warehouse) {
    
    return(
        <div>
            <h2>{warehouse.name}</h2>
            <p>{warehouse.location}</p>
            <Link to={`/getWarehouseInventory/${warehouse._id}`}>
            <button>Access Inventory</button>
            </Link>
        </div>
    )
  } else {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default WarehouseInfo;

