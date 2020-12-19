import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../../../shared/Globals';
import { NotificationContext } from '../../../shared/Notifications';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../../shared/Header';
import { UserContext } from '../../../Authentication/UserProvider';
import { Redirect } from 'react-router-dom';


const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const [ bookings, setBookings] = useState([]);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => { 
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/booking/show/${id}?secret_token=${user.token}`)
    .then(({ data }) => setBookings(data))
    .catch(error => {
      console.error(error.message);
      setNotification({
        type: "danger",
        message: "Couldn't access the bookings at this time."
      });
    });
  }, [globalStore,id,user,setNotification]);

  const handleSubmit = async event => {
    event.preventDefault();
    
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/booking/destroy`,  
    {
        _id: bookings._id,
        email: bookings.email,
        petName: bookings.petName,
        service: bookings.service, 
        date: bookings.date,
        hour: bookings.hour,
        secret_token: (user && user.token) 
      }
    ) 
   .then(resp => {
      console.log(resp);
        setNotification({
          type: "success",
          message: "This delete was performed successfully."
        });
        setRedirect(true);
      })
      .catch(error => {

        console.log(error.message);
        setNotification({
          type: "danger",
          message: "Couldn't delete at this time."
        });

      })
  };

  
  function handleChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setBookings(bookings => {
        return {
        ...bookings, [name]: value
      }
    });
  };
  if (redirect) return <Redirect to="/booking"/>;
  return (
    bookings ? (
      <>
        <Header title="Cancel your booking"> </Header>

        <Container className="my-3">
           
             <Form onSubmit={handleSubmit}   > 
                <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    name="_id"
                    required
                    defaultValue={bookings._id}
                    readOnly
                    
                 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    required
                    defaultValue={bookings.email}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Pet Name</Form.Label>
                  <Form.Control
                    name="petName"
                    required
                    defaultValue={bookings.petName}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                    name="service"
                    required
                    defaultValue={bookings.service}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    name="date"
                    required
                    defaultValue={bookings.date}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Hour</Form.Label>
                  <Form.Control
                    name="hour"
                    required
                    defaultValue={bookings.hour}
                    onChange={handleChange} 
                  />
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Submit</Button>
               </Form.Group>

             </Form>
               
            
            
        </Container>
      </>
    ) : null
  );
}
 
export default Destroy;