import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card card-compact border shadow-xl rounded-xl">
      <div className="p-4">
        <figure>
          <img src={img} alt="img" className="rounded-lg w-full h-[250px] " />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg text-[#FF3811] font-semibold">
            Price : ${price}
          </p>
          <Link to={`/booking/${_id}`}>
            <p className=" flex justify-end text-2xl text-[#FF3811]">
            <FaArrowCircleRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
