import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Container, Table } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Bookings = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [ bookings, setBookings] = useState([]);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/booking`)
    .then(({ data }) => setBookings(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the bookings at this time."
      });
    });
  }, [globalStore,setNotification]);

  return (
      <>
        <Header title="Bookings"> </Header>
        <Container className="my-3">
        { bookings && bookings.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <td>Email</td>
                <td>Pet</td>
                <td>Service</td>
                <td>Date</td>
                <td>Hour</td>
                <td>Actions</td>
              </tr>
            </thead>

            <tbody>
              {bookings.map((bk, i) => (
                <tr key={i}>
                  <td>{bk.email}</td>
                  <td>{bk.petName}</td>
                  <td>{bk.service}</td>
                  <td>{bk.date}</td>
                  <td>{bk.hour}</td>
                  <td>
                        <Link to={`/booking/edit/${bk._id}`}>Edit</Link>
                        <Link to={`/booking/destroy/${bk._id}`}>Cancel</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            ) : null}
        </Container>
      </>     
    );

}
 
export default Bookings;