const dropdownarea = document.querySelector(".fa-home")

const dropdowhide = document.querySelector('.dropdown')


dropdownarea.addEventListener('mouseenter',()=>{

    dropdowhide.classList.remove('hide')
})

dropdownarea.addEventListener('mouseleave',()=>{
    dropdowhide.classList.add('hide')
})