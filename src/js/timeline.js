function timeline(user){
    this.setHeader = function(){
        $("#timeline").text(user.name+ " Timeline");
    }

    this.setTimeline = function(){
        user.messages.forEach(function(msg){
            let html = "<li><div class='timeline-heading'><h4 class='timeline-title'>"+msg+"</h4></div></li>";
            $(".timeline").append(html);
        });
    }
}

module.exports = timeline;