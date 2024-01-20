import BookingRow from "./BookingRow";

import Table from "../ui/Table";
import Menus from "../ui/Menus";
import Empty from "../ui/Empty";
import PropTypes from 'prop-types';
import {useBookings} from './useBookings'
import Spinner from "../ui/Spinner";
function BookingTable() {
  const {bookings,isLoading,error}=useBookings()
  
   if(isLoading) return <Spinner/>
   if (error) {
    // Handle the error case (e.g., display an error message)
    return <div>Error loading bookings: {error.message}</div>;
  }
  if (!bookings || !bookings.length) return <Empty resourceName='bookings' />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

BookingTable.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      numNights: PropTypes.number.isRequired,
      numGuests: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      guests: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
      cabins: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
};
export default BookingTable;
