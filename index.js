const express = require('express');

const locationController = require('../Controller/location');
const restaurantController = require('../Controller/restaurant');



const route = express.Router();
route.get('/locations', locationController.getLocations);

route.get('/restaurants/:locId', restaurantController.getRestaurantByLocId);
route.post('/filter', restaurantController.filterRestaurants);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);


module.exports = route;
