import { useRef } from "react";

function AddWarehouseForm(){
    const url = "http://localhost:8080/warehouses/add_warehouse";

    const warehouseNameInput = useRef();
    const locationInput = useRef();
    
    function addWarehouseHandler(productData){
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        };
        fetch(url, options);
    }

    function submissionHandler(e){
        e.preventDefault();

        const enteredWarehouseName = warehouseNameInput.current.value;
        const enteredLocation = locationInput.current.value;

        const productData = {
            name: enteredWarehouseName,
            location: enteredLocation,
            inventory: []
        }

        addWarehouseHandler(productData);

    }

    return(
        <div>
            <h2>Add Warehouse</h2>
            <form onSubmit={submissionHandler}>
                <label htmlFor="warehouseName">Enter Warehouse Name: </label>
                <input type="text" required id="warehouseName" ref={warehouseNameInput}/>

                <label htmlFor="location">Enter warehouse location: </label>
                <input type="text" id="location" ref={locationInput}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )



}


export default AddWarehouseForm;