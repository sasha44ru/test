var $ = require('jquery');
var str = require('./constant');
import '../scss/app.scss';

var App  = function(){
    console.log(str);
    $('body').append(str);
};

let app = new App();

var timeline = require('./timeline.js');
let user = {
    name : "SHurik",
    messages : [
        "hello",
        "bye",
        "good night"
    ]
};
[1, 2, 3].map((n) => n + 1);
var timelineModule = new timeline(user);
timelineModule.setHeader(user);
timelineModule.setTimeline(user);