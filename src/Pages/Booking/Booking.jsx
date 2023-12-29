import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Booking = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const user = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const date = from.date.value;
    const email = from.email?.value;
    const booking = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('booking added successfully')
      }
    })
  };
  return (
    <div>
      <div className="mb-16 px-32">
        <h2>Book Service: {title}</h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                className="input input-bordered"
                defaultValue={price}
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
