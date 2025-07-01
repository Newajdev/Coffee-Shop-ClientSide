import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, Coffee, setCoffee }) => {
    const { _id, Name, Chef, Price, PhotoURL } = coffee;

    const hendleDelate = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'your File has been Deleted.',
                                'success'
                            )
                            const remaining = Coffee.filter(cof => cof._id !== _id)
                            setCoffee(remaining)
                        }
                    }
                    )
            }
        });
    }
    return (
        <div className="bg-white flex items-center gap-4 py-10 px-16 rounded-lg shadow ">
            <div><img className='' src={PhotoURL} alt="" /></div>
            <div className="flex-graw mr-6">
                <h3 className="font-semibold text-[#1B1A1A] text-xl">Name: <span className="font-normal text-[#5C5B5B] ">{Name}</span></h3>
                <h3 className="font-semibold text-[#1B1A1A] text-xl">Chef: <span className="font-normal text-[#5C5B5B] ">{Chef}</span></h3>
                <h3 className="font-semibold text-[#1B1A1A] text-xl">Price: <span className="font-normal text-[#5C5B5B] ">{Price}</span></h3>
            </div>
            <div className="flex flex-col gap-3 ">
                {/* See Btn */}
                <button className="btn bg-[#D2B48C] text-white font-bold text-xl"><Link to={`/coffee/${_id}`}><FaEye /></Link></button>

                {/* update Btn */}
                <button className="btn bg-[#3C393B] text-white font-bold text-xl"><Link to={`/update-coffee/${_id}`}><FaPencilAlt /></Link></button>
                
                {/* Delete Btn */}
                <button onClick={() => hendleDelate(_id)} className="btn bg-[#EA4744] text-white font-bold text-xl"><Link><FaRegTrashAlt /></Link></button>
            </div>
        </div>
    );
};

export default CoffeeCard;