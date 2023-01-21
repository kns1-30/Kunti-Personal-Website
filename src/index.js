
document.addEventListener('click', function(event){
    var target = event.target;
    var parent = target.parentElement;
    if(!parent.classList.contains("nav-btn")){

    var sidebar = document.querySelector(".sidebar");
  (sidebar).classList.remove("sidebar-toggleshow");
  const navs = document.querySelectorAll('.nav-list')
  navs.forEach(nav => nav.classList.remove('nav-toggleshow'));
    }
  }
  );

function classToggle() {

  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("sidebar-toggleshow");
  const navs = document.querySelectorAll('.nav-list')
  navs.forEach(nav => nav.classList.toggle('nav-toggleshow'));
}

document.querySelector('.nav-btn')
  .addEventListener('click', classToggle);






