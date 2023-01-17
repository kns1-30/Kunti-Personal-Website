import react from "react";
import reactdom from "react-dom";
import App from "./react_components/App"


$(document).ready(function(){

});

document.addEventListener('click', function(event){
    var target = event.target;
    var parent = target.parentElement;
    if(!parent.classList.contains("nav-btn")){

      var sidebar = document.querySelector(".sidebar");
      $(sidebar).removeClass("sidebar-toggleshow",1000,"easeInBack");
      const navs = document.querySelectorAll('.nav-list')
      navs.forEach(nav => $(nav).removeClass('nav-toggleshow',1000, "easeInBack"));


  //   var sidebar = document.querySelector(".sidebar");
  // (sidebar).classList.remove("sidebar-toggleshow");
  // const navs = document.querySelectorAll('.nav-list')
  // navs.forEach(nav => nav.classList.remove('nav-toggleshow'));
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

// function removeNav(event){
//  alert(event.taget);
//   var sidebar = document.querySelector(".sidebar");
// sidebar.classList.remove("sidebar-toggleshow");
// const navs = document.querySelectorAll('.nav-list')
// navs.forEach(nav => nav.classList.remove('nav-toggleshow'));



// }



// React


reactdom.render(
  <App />,
  document.getElementById("root")
)




