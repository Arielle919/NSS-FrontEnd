'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  // console.log(y); with this here it will blow up

  try {
    console.log(x);
  } catch(e) {
    console.log('you just recieved the error: ' + e);

  }
}
