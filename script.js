let headercounter = 0;
let tripbool = false;
function headerMobile() {
  if (headercounter % 2 == 0) {
    let headerdiv = document.getElementById('headerlinksdivmobile');
    headerdiv.style.transform = 'translateY(65%)';
    headerdiv.style.transition = 'all 0.5s';
    headercounter = headercounter + 1;
  } else {
    let headerdiv = document.getElementById('headerlinksdivmobile');
    headerdiv.style.transform = 'translateY(-65%)';
    headerdiv.style.transition = 'all 0.5s';
    headercounter = headercounter + 1;
  }
}

function TripDecider() {
  let onewaydiv = document.getElementById('oneway');
  let rounddiv = document.getElementById('round');
  tripbool = !tripbool;
  if (tripbool) {
    onewaydiv.style.backgroundColor = 'white';
    rounddiv.style.backgroundColor = 'transparent';
  } else {
    onewaydiv.style.backgroundColor = 'transparent';
    rounddiv.style.backgroundColor = 'white';
  }
}
