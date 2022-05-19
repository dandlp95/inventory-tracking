import { useRef } from "react";

function AddProductForm() {
  const url = "http://localhost:8080/products/add_product";

  const productNameInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();

  function addProductHandler(productData) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    };
    fetch(url, options);
  }

  function submissionHandler(e) {
    e.preventDefault();

    const enteredProductName = productNameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;

    const productData = {
      productName: enteredProductName,
      quantity: enteredQuantity,
      description: enteredDescription,
    };

    addProductHandler(productData);
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={submissionHandler}>
        <label htmlFor="productName">Enter product name: </label>
        <input
          type="text"
          required
          id="productName"
          ref={productNameInputRef}
        />

        <label htmlFor="description">Enter product description: </label>
        <input
          type="text"
          required
          id="description"
          ref={descriptionInputRef}
        />

        <label htmlFor="quantity">Enter product quantity: </label>
        <input type="number" required id="quantity" ref={quantityInputRef} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddProductForm;
