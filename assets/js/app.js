$(function() {

  var clock = $('#clock'),
    alarm = clock.find('.alarm'),
    ampm = clock.find('.ampm');

  var digitsSpelledOut = 'zero one two three four five six seven eight nine'.split(' ');

  // This object will hold the digit elements
  var digits = {};

  // Positions for the hours, minutes, and seconds
  var positions = [
    'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
  ];

  var digitHolder = clock.find('.digits');

  var now = moment().format("hhmmssdA");

  $.each(positions, function() {

    if (this === ':') {
      digitHolder.append('<div class="dots">');
    } else {

      var pos = $('<div>');

      for (var i = 1; i < 8; i++) {
        pos.append('<span class="d' + i + '">');
        console.log(pos);
      }

      // Set the digits as key:value pairs in the digits object
      digits[this] = pos;

      // Add the digit elements to the page
      digitHolder.append(pos);
    }
  });

  (function updateTime() {

    // Use moment.js to output the current time as a string
    // hh is for the hours in 12-hour format,
    // mm - minutes, ss-seconds (all with leading zeroes),
    // d is for day of week and A is for AM/PM

    var now = moment().format("hhmmssdA");

    digits.h1.attr('class', digitsSpelledOut[now[0]]);
    digits.h2.attr('class', digitsSpelledOut[now[1]]);
    digits.m1.attr('class', digitsSpelledOut[now[2]]);
    digits.m2.attr('class', digitsSpelledOut[now[3]]);
    digits.s1.attr('class', digitsSpelledOut[now[4]]);
    digits.s2.attr('class', digitsSpelledOut[now[5]]);

    console.log('here is now ', now);
    // // Set the am/pm text:
    // ampm.text(now[7]+now[8]);

    // Schedule this function to be run again in 1 sec
    setTimeout(updateTime, 1000);

  })();

});

