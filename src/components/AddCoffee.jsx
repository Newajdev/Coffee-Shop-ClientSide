import { Link } from "react-router-dom";


const AddCoffee = () => {
    return (
        <div>
            <div><Link to='/'>Go Back</Link></div>
            <div className="bg-[#F4F3F0] flex flex-col w-2/3 mx-auto justify-center items-center p-28">
                <h2 className="text-2xl font-bold text-[#374151] text-center">Add a Coffee</h2>
                <p className="text-center text-[#1B1A1A] B3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                {/* FORM START */}
                <form className="w-full mt-8">
                    <div className="grid grid-cols-2 gap-6 justify-between">
                        <div className="">
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Name</h3>
                                <input type="text" placeholder="Enter coffee name" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Supplier</h3>
                                <input type="text" placeholder="Enter coffee supplier" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Category</h3>
                                <input type="text" placeholder="Enter coffee category" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                        <div className="">
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Chef</h3>
                                <input type="text" placeholder="Enter coffee chef" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Taste</h3>
                                <input type="text" placeholder="Enter coffee taste" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                            <div className = "mt-5">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Details</h3>
                                <input type="text" placeholder="Enter coffee details" className="focus:border-none border-none mt-3  input w-full" />
                            </div>
                        </div>
                            <div className="col-span-2">
                                <h3 className="text-[#1B1A1A] font-semibold text-xl">Details</h3>
                                <input type="text" placeholder="Enter coffee details" className="focus:border-none border-none mt-3  input w-full" />
                            </div>

                    </div>
                            <input type="submit" value="Add Coffee" className="border-2 border-[#331A15 ] bg-[#D2B48C] rounded-xl py-3 w-full mt-6 font-semibold" />
                </form>
                {/* FORM End */}

            </div>
        </div>
    );
};

export default AddCoffee;