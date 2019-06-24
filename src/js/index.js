const str = require('./constant');
const timeline = require('./timeline.js');
import '../scss/app.scss';

var App  = function(){
    console.log(str);
    $('body').append(str);
};

let app = new App();

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