const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');


newsRouter.get('/', async (req, res) => {
    const data = req.body;
    console.log(data.lag);
    try {
        const weatherapi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=bbd72eda55b2d29632e64e9eb4d36df2`);
        // console.log(weatherapi.data.weather[0].description);
        res.render('weather', { weatherdetails: weatherapi.data });
        // console.log(weatherapi.data.main.temp);
        console.log("get the damn request");
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        } else if (error.request) {
            console.log(error.request);
        }
        else {
            console.error('Error', error.message);
        }
        console.log(error);
    }

})


newsRouter.post('/location', async (req, res) => {
    try {
        const weatherapi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.place}&appid=bbd72eda55b2d29632e64e9eb4d36df2`);
        // console.log(weatherapi.data.weather[0].description);
        res.render('weather', { weatherdetails: weatherapi.data });
        // console.log(weatherapi.data.main.temp);
        console.log(req.body.place);
        console.log("get the damn request");
    } catch (error) {
        res.render('error', { wrongplace: req.body.place });
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        } else if (error.request) {
            console.log(error.request);
        }
        else {
            console.error('Error', error.message);
        }
        console.log(error);
    }

})

newsRouter.post('/', async (req, res) => {
    try {
        const weatherapi = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lon}&appid={API key}`);
        // console.log(weatherapi.data.weather[0].description);
        res.render('weather', { weatherdetails: weatherapi.data });
        // console.log(weatherapi.data.main.temp);
        console.log(req.body.lat);
        console.log("get the damn request 1");
    } catch (error) {
        res.render('error', { wrongplace: req.body.place });
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        } else if (error.request) {
            console.log(error.request);
        }
        else {
            console.error('Error', error.message);
        }
        console.log(error);
    }

})

module.exports = newsRouter;