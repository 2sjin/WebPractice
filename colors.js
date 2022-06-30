var Body = {
    setColor: function(color) {
        var links = document.querySelectorAll('body');
            for (var i=0; i<links.length; i++) {
                links[i].style.color = color;
        }                
    }, 
    setBackgroundColor: function(color) {
        var links = document.querySelectorAll('body');
            for (var i=0; i<links.length; i++) {
                links[i].style.backgroundColor = color;
        }                
    }
}

var Links = {
    setColor: function(color) {
        var links = document.querySelectorAll('a');
            for (var i=0; i<links.length; i++) {
                links[i].style.color = color;
        }                
    }
}

var ActiveLinks = {
    setColor: function(color) {
        var links = document.querySelectorAll('.active');
            for (var i=0; i<links.length; i++) {
                links[i].style.color = color;
        }                
    }
}

function nightDayHandler(link_btn) {
    if (link_btn.value === 'Day → Night') {   // this = document.querySelector(버튼ID)
        link_btn.value = 'Night → Day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('skyblue');
        ActiveLinks.setColor('red');
    }
    else {
        link_btn.value = 'Day → Night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        ActiveLinks.setColor('red');
    }
}