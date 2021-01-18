var express = require('express');
var router = express.Router();


var cityList = []

var isEmpty = true;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.get('/weather', function (req, res, next) {
  res.render('weather', {cityList: cityList, isEmpty: isEmpty});
});

router.post('/weather/add', function(req, res, next){
  isEmpty = false;
  var found = cityList.find(e => e.nom == req.body.cityName.toLowerCase() );
  if(found==undefined){
    cityList.push(
      {
        nom: req.body.cityName.toLowerCase(),
        img: "map.png",
        weather: "nuageux",
        t_min: "5°C",
        t_max: "10°C"
      }
    );
  }
 

  res.render('weather', {cityList: cityList, isEmpty: isEmpty});
});

router.get('/delete',function(req, res, next){
  var index = req.query.index;
  cityList.splice(index, 1);
  if(cityList.length==0){isEmpty=true};
  res.render('weather', {cityList: cityList, isEmpty: isEmpty});
});

module.exports = router;