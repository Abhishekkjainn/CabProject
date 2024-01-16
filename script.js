let headercounter = 0;
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
