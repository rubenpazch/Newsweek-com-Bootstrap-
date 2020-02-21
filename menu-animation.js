var el = document.getElementById('menu-stycki-container');
window.addEventListener('scroll', function(){
  if (document.documentElement.scrollTop > 140){
      el.style.display = "inherit";
      el.style.position = "fixed";
      el.style.top = "0px";
      el.style.width = "100%";
  }
  else
  {
      el.style.position = "static";
      el.style.top = "auto";
      el.style.display = "none";
  }

});