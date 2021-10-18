function callBack() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var intervalID = setInterval(callBack, 1000);