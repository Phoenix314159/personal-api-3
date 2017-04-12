const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');
const app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbies);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:gender', mainCtrl.getRestaurants);
app.put('/api/name', mainCtrl.updateName);
app.put('/api/location', mainCtrl.updateLocation);
app.post('/api/hobbies', mainCtrl.addHobbie);
app.post('/api/occupations', mainCtrl.addOccupation);
app.post('/api/addfamily', mainCtrl.addFamilyMember);
app.post('/api/addrestaurant', mainCtrl.addRestaurant);
app.delete('/api/occupations', mainCtrl.deleteLastOccupation);
app.delete('/api/restaurants/:rating', mainCtrl.deleteRestaurantByRating);
app.get('/api/skillz', mainCtrl.getSkillz);
app.post('/api/skillz', mainCtrl.addSkill);



app.listen(3005, function () {
    console.log('listening on port 3005');
})