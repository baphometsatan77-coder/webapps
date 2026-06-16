var mailv = document.getElementById("Email")
var btnsave = document.getElementById("subscbtn")
var mailup = document.getElementById("out")
var nav = document.getElementById('barsi')
var navs = document.getElementById('heu')
var tclose = document.getElementById('tclose')
console.log(navs)
btnsave.addEventListener("click", () => {
    if (mailv.value.length == 0) {
        mailup.innerText = "Enter mail id"
        mailup.style.display = 'list-item'
    }
    else if (mailv.value.length >= 1) {
        if (mailv.value.includes('@', '.com')) {
            mailup.style.display = 'list-item'
            mailup.innerText = "Subscribed"

            
            


        }
        else {
            mailup.innerText = "Invalid Mail Id"

        }

    }
    else {
        mailup.innerText = mailv.value
    }
})


// var check = 'vimal@gmail.com'
// var check0 = '@.com'

// var final = check.includes('@','.com')
// $("final").show().delay(5000).fadeOut();

// document.write(final)

nav.addEventListener('click', () => {
    navs.style.display = 'block'
    nav.style.display = 'none'
    tclose.style.display = 'block'

})

tclose.addEventListener('click', ()=>{
    navs.style.display = 'none'
    nav.style.display = 'block'
    tclose.style.display = 'none'
})


var log = document.querySelector(".headlis1")
var lfor = document.querySelector(".linform")
var lclos = document.querySelector(".closei")
var thead = document.getElementById("headsear")
// console.log(thead)

log.addEventListener("click", () => {

    lfor.style.display = "block"
    thead.disabled = true;



})
lclos.addEventListener("click", () => {
    lfor.style.display = "none"
    thead.disabled = false;
})