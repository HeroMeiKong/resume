setTimeout(function () {
  WelcomeAnimation.classList.remove('active');
}, 1000);
let subbtn = document.querySelectorAll('#subbtn')
subbtn.addEventListener('submit',function(){
  this.location.href="url"
})