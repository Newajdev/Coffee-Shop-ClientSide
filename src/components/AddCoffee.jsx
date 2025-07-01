import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const hendlerAdd = e => {
        e.preventDefault()

        const form = e.target;

        const Name = form.name.value;
        const Supplier = form.supplier.value;
        const Category = form.category.value;
        const Chef = form.chef.value;
        const Taste = form.taste.value;
        const Details = form.details.value;
        const PhotoURL = form.photo.value;

        const NewCoffee = { Name, Supplier, Category, Chef, Taste, Details, PhotoURL }

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewCoffee)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful!',
                        text: `New Coffee ${Name} is Add Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })


    }

    return (
        <div>
            <div><Link to='/'>Go Back</Link></div>
            <div className="bg-[#F4F3F0] flex flex-col w-2/3 mx-auto justify-center items-center p-28">
                <h2 className="text-2xl font-bold text-[#374151] text-center">Add a Coffee</h2>
                <p className="text-center text-[#1B1A1A] B3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                {/* FORM START */}
                <form onSubmit={hendlerAdd} className="w-full mt-8">
                    <div className="grid grid-cols-2 gap-6 justify-between">
                        <div className="">
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Name</h3>
                                <input name="name" type="text" placeholder="Enter coffee name" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Supplier</h3>
                                <input name="supplier" type="text" placeholder="Enter coffee supplier" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Category</h3>
                                <input name="category" type="text" placeholder="Enter coffee category" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Chef</h3>
                                <input name="chef" type="text" placeholder="Enter coffee chef" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Taste</h3>
                                <input name="taste" type="text" placeholder="Enter coffee taste" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Details</h3>
                                <input name="details" type="text" placeholder="Enter coffee details" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-[#1B1A1A] font-semibold text-xl">Photo</h3>
                            <input name="photo" type="text" placeholder="Enter photo URL" className="focus:border-none border-none mt-3  input w-full" />
                        </div>

                    </div>
                    <input type="submit" value="Add Coffee" className="btn border-2 border-[#331A15] bg-[#D2B48C] rounded-xl pt-2 pb-3  w-full mt-6 font-semibold" />
                </form>
                {/* FORM End */}

            </div>
        </div>
    );
};

export default AddCoffee;