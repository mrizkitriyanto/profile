/* MENU SHOW */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // //Active Link
    // navLink.forEach(n => n.classList.remove('active'))
    // this.classList.add('active')

    //Remove menu setelah dipilih
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//SCROLL SECTION
const sections = document.querySelectorAll('selection[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionGeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* SCROLL REVEAL ANIMATION */
/* SCROLL HOME */
/* SCROLL ABOUT */
/* SCROLL SKILLS */
/* SCROLL WORK */