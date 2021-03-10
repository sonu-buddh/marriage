var animate;

(function () {
    moveRight();
    moveLeft();
    $('#middleImage').hide();
});


function moveRight() {
    var elem = document.getElementById("leftImage");
    var pos = 0;
    var id = setInterval(frame, 30);

    function frame() {
        if (pos == 570) {
            clearInterval(id);
        } else {
            if (pos <= 570) {
                pos++;
                //   elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
            if (pos >= 570) {
                $('#leftImage').hide();
            }
        }
    }
}

function moveLeft() {
    var elem = document.getElementById("rightImage");
    var pos = 0;
    var id = setInterval(frame, 30);

    function frame() {
        if (pos == 570) {
            clearInterval(id);
        } else {
            console.log(pos);
            if (pos >= -570) {
                pos--;
                elem.style.left = pos + 'px';
                stop();
            }
            if (pos == -570) {
                $('#rightImage').hide();
                $('#middleImage').show("slow");
                animate = setTimeout(function () {
                    moveLeft();
                }, 20);
            }
            //   elem.style.top = pos + 'px';
        }
    }
}

function stop() {
    clearTimeout(animate);
}

   //  function makeTimer() {

   //      //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
   //      var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
   //      endTime = (Date.parse(endTime) / 1000);

   //      var now = new Date();
   //      now = (Date.parse(now) / 1000);

   //      var timeLeft = endTime - now;

   //      var days = Math.floor(timeLeft / 86400);
   //      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
   //      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
   //      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

   //      if (hours < "10") {
   //          hours = "0" + hours;
   //      }
   //      if (minutes < "10") {
   //          minutes = "0" + minutes;
   //      }
   //      if (seconds < "10") {
   //          seconds = "0" + seconds;
   //      }

   //      $("#days").html(days + "<span>Days</span>");
   //      $("#hours").html(hours + "<span>Hours</span>");
   //      $("#minutes").html(minutes + "<span>Minutes</span>");
   //      $("#seconds").html(seconds + "<span>Seconds</span>");

   //  }

   //  setInterval(function() {
   //      makeTimer();
   //  }, 1000);