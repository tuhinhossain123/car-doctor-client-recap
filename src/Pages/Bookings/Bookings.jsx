import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);
  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete success full");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id !== id);
          update.status= 'confirm';
          const newBooking = [update, ...remaining];
          setBookings(newBooking)
        }
      });
  };
  return (
    <div>
      <h2>My Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleBookingConfirm={handleBookingConfirm}
                handleDelete={handleDelete}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
