const sidebarOPen = document.querySelector(".sidebar-open")
const sidebar = document.querySelector(".sidebar")
const key = sidebarOPen.querySelector(".key")


sidebarOPen.addEventListener("click", function(){
   sidebar.classList.toggle("sidebar-active")
   key.classList.toggle("keyframes")
})