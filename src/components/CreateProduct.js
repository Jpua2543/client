import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response =await axios.post('/api/products', {
        title,
        price,
        description,
    });

    if (response.status === 201) {
        // Product created successfully
        const product = response.data;
        console.log(product);
        // Reset the form inputs
        setTitle('');
        setPrice('');
        setDescription('');
    } else {
        // Handle error case
        console.error('Product creation failed');
    }
    } catch (error) {
    console.error('An error occurred', error);
    }
};

return (
    <div>
    <h1>Product Manager</h1>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
        />
        </div>
        <div>
        <label htmlFor="price">Price:</label>
        <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <textarea
            id="description"
            value={description}
        onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
        ></textarea>
        </div>
        <button type="submit">Create Product</button>
    </form>
    </div>
);
};

export default ProductForm;
