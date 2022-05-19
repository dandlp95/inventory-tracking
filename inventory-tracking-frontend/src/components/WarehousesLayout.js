import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, Link} from "react-router-dom";


function WarehouseLayout() {
  const url = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setWarehouses(response.data);
    });
  }, [url]);

  if (warehouses) {
    return(
        <div>
            {warehouses.map((warehouse) =>{
                return(
                    <div>
                        <Link to={`/warehouses/${warehouse._id}`}>
                        <h2>{warehouse.name}</h2>
                        <p>{warehouse.location}</p>
                        </Link>
                    </div>
                )
            })

            }
        </div>
    )

  } else {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}

export default WarehouseLayout;
