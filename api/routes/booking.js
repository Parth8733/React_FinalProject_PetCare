const { index, show, create, update, destroy } = require('../controllers/booking');
const passport = require('passport');


module.exports = router => {
  router.get('/booking', index);  
 
  router.get('/booking/show/:id', passport.authenticate('jwt', { session: false }), show);
  router.post('/booking', create);
  router.post('/booking/update', passport.authenticate('jwt', { session: false }), update);
  router.post('/booking/destroy', passport.authenticate('jwt', { session: false }), destroy);

};
