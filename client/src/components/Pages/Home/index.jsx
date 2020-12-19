import React  from 'react';
import Header from '../../shared/Header';
import {Container, Image, Col,Card,Row}  from 'react-bootstrap';
const Home = () => {
  return (
    <>
    <Header title="Welcome to Pet Care"/>

  {/* Brief Desc */}
    <Container>
	        <h3 class="section-title font-weight-bold text-center mb-3"> Overview</h3>
	        <div class="section-intro mx-auto row text-center mb-5 text-secondary"> We have more than 8 years' experience building rich pet experience with care and love. Below is a quick overview of our services, payment methods and pets we work with. 
          Please, be welcome to our shop and we hope see you soon. 
          You are required you to be logged in in order book an appointment , if are not yet our customer, please register. </div>
   </Container>
       {/* Content */}
      	<Row >
		        <Col lg="true">
					<Card class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div class="card-img-container position-relative">
							<Image src="Image/dog.jpg"  width="400"  alt="img" height="300" class="card-img-top rounded-0"/>
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0">Pets</h4>
						</div>						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill"> Dogs</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill"> Cats</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill"> Bunnies</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill"> Birds</span></li>
							</ul>
					    </div>
				    </Card>
		        </Col>
		        <Col class="col-12 col-lg-4">
					<Card class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div class="card-img-container position-relative">
							<Image  src="Image/groming.jpg"  alt ="img" width="400"   height="300"  class="card-img-top rounded-0" />	
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0">Services</h4>
						</div>
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >Pet Shower</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Adoption</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Frozen Foods</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Grooming</span></li>
							</ul>
					    </div>
				    </Card>
		        </Col>
		        <Col class="col-12 col-lg-4">
					<Card class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div class="card-img-container position-relative">
							<Image src="Image/visa.jpg"  alt ="img" width="400"   height="300"  class="card-img-top rounded-0"/>	
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0">Payments</h4>
						</div>
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MasterCard Credit/Debit</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >Visa Credit/Debit</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Amex Credit</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">E-transfer</span></li>
							</ul>
					    </div>
				    </Card>
		        </Col>
	        </Row>
	      
    </>
  );
}


export default Home;