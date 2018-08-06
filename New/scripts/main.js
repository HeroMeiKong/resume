setTimeout(function () {
  WelcomeAnimation.classList.remove('active');
}, 1000);
function a() {
  let subbtn = document.querySelectorAll('#subbtn')
  console.log(subbtn)
  subbtn.addEventListener('click', (x) => {
    console.log(1)
    
  })
}
a()