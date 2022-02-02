import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  const  handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault(e)
    onAddPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant name" />
        <input 
          type="text" 
          name="image" 
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL" 
        />
        <input 
          type="number" 
          name="price" 
          value={formData.price}
          onChange={handleChange}
          step="0.01" 
          placeholder="Price" 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
