var $ = require('jquery');
var str = require('./constant');
import '../scss/app.scss';

var App  = function(){
    console.log(str);
    $('body').html(str);
};

var app = new App();