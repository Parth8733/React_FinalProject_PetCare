const Booking = require('../models/booking');
const jwt = require('jsonwebtoken');

exports.index = async (req, res, next) => {
  try {
    const booking = await Booking.find();
    res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
}
exports.show = async (req, res, next) => {
  try {
    const booking  = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const { email, petName, service, date, hour } = req.body;
    const bk = await Booking.create({
        email,
        petName,
        service,
        date: new Date(date),
        hour
    });
    res.status(200).json({message: 'Booking was created successfully', status: 'success', booking: bk});
  } catch (error) {
    next(error);
  }
}



exports.update = async (req, res, next) => {
  try{
      const { _id, email, petName, service, date, hour }= req.body;
      const bk = await Booking.findByIdAndUpdate({_id},
          {
            id:_id,
            email:email,
            petName: petName,
            service:service,
            date:new Date(date),
            hour: hour
          
          });

          res.status(200).json({message:"this booking was updated Successfully",booking:bk});
  }catch(error){
      next(error)
  }
}; 



exports.destroy = async (req, res, next) => {
  try {
   
   const { _id, email, petName, service, date, hour }= req.body;
   const bk = await Booking.findByIdAndDelete({_id},
       {
         id:_id,
         email:email,
         petName: petName,
         service:service,
         date:new Date(date),
         hour: hour
       
       });
    res.status(200).json({message: 'Booking was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}

