// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();


    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Coffee Updated Successfully!',
                    })
                }
            })
    }

    return (
        <div className='w-5/6 mx-auto'>
            <h2 className="text-4xl">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* quantity form row */}
                <div className='mb-5'>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name="name" defaultValue={name} placeholder="Coffee name" />
                    </div>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='quantity' defaultValue={quantity} placeholder="Available Quantity" />
                    </div>
                </div>
                {/* supplier form row */}
                <div className='mb-5'>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name="supplier" defaultValue={supplier} placeholder="Supplier name" />
                    </div>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='taste' defaultValue={taste} placeholder="Taste" />
                    </div>
                </div>
                {/* Category form row */}
                <div className='mb-5'>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name="category" defaultValue={category} placeholder="Category name" />
                    </div>
                    <div className="join inline-block md:w-1/2 p-2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='details' defaultValue={details} placeholder="Details" />
                    </div>
                </div>
                {/* photo url form row */}
                <div className='mb-5'>
                    <div className="join inline-block w-full p-2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name="photo" defaultValue={photo} placeholder="Photo URL" />
                    </div>
                </div>
                <input type="submit" className='btn w-full mb-5 btn-warning' value="Update User" />
            </form>
        </div>
    );
};

export default UpdateCoffee;