import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function WarehouseInventory() {
  const { id } = useParams();
  const [inventory, setInventory] = useState(null);

  const url = `http://localhost:8080/warehouses/getInventory/${id}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setInventory(response.data);
    });
  }, [url]);

  if (inventory) {
    console.log(inventory);
    return (
      <div>
        {inventory.map((item) => {
          return (
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    <div>
      <h2>Loading...</h2>
    </div>;
  }
}

export default WarehouseInventory;
