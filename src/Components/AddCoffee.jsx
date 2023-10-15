// eslint-disable-next-line no-unused-vars
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity, supplier, taste, category, details, photo};
        console.log(newCoffee)

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Coffee Added Successfully!',
                  })
            }
        })
    }


    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <h2 className="text-4xl">Add Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    {/* quantity form row */}
                    <div className='mb-5'>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Coffee name</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name="name" placeholder="Coffee name" />
                        </div>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name='quantity' placeholder="Available Quantity" />
                        </div>
                    </div>
                    {/* supplier form row */}
                    <div className='mb-5'>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name="supplier" placeholder="Supplier name" />
                        </div>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name='taste' placeholder="Taste" />
                        </div>
                    </div>
                    {/* Category form row */}
                    <div className='mb-5'>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name="category" placeholder="Category name" />
                        </div>
                        <div className="join inline-block md:w-1/2 p-2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name='details' placeholder="Details" />
                        </div>
                    </div>
                    {/* photo url form row */}
                    <div className='mb-5'>
                        <div className="join inline-block w-full p-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input className="input input-bordered join-item w-full" name="photo" placeholder="Photo URL" />
                        </div>
                    </div>
                    <input type="submit" className='btn w-full mb-5 btn-warning' value="Add User" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;