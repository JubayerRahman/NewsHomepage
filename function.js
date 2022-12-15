const ment = document.getElementById('responsiveMenu')
const icon = document.getElementById('icon')
const menubutton = document.getElementById('menubutton')
menubutton.addEventListener('click',()=>{
    // <i class="fa-solid fa-x"></i>
    icon.classList.toggle('fa-x')
    ment.classList.toggle('responsiveMenuAction')
})