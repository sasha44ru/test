const str = require('./constant');

var App  = function(){
    console.log(str);
    $('body').append(str);
};

let app = new App();