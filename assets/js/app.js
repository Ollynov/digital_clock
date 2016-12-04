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

  console.log('digit holder is: ', digitHolder);

});

