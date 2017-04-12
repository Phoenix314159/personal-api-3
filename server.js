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
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants/:name', mainCtrl.getRestaurants);
// app.get('/api/restaurants', mainCtrl.getRestaurants);
// app.get('/api/restaurants?rating=gte:2', mainCtrl.getRestaurants);


app.listen(3005, function () {
    console.log('listening on port 3005');
})