const search = document.getElementById("headsear")




search.addEventListener("keyup", (no) => {
    const elem = no.target;
    Array.from(document.querySelectorAll('.detailcont'))
        .forEach(places => {
            const placetitle = places.querySelector('h2').innerText;

            if (!placetitle.toLowerCase().includes(elem.value.toLowerCase())) {
                places.style.display = 'none';
            }
            else {
                places.style.display = 'block'
            }
        })
})

var plus = document.querySelector(".dcount1")
var countt = document.querySelector(".dcount2")
var minus = document.querySelector(".dcount3")
var drop0 = document.querySelector(".droplist0")
var dropl = document.querySelector(".droplist1")
var headl = document.querySelector(".contp")
var nli = document.createElement("li")
var tnode = document.createTextNode(headl.innerText)

// l = 0;
let a = 0;

plus.addEventListener("click", (aadd) => {
    a++;
    if ((a < 10)) {
        a = "0" + a
        // a = (+"0") + (a)
        if (a > 0) {

            drop0.style.display = "block"

            // nli.appendChild(tnode)


        }
    }
    else {
        a
    }
    nli.innerText = headl.innerText +" " + a
    drop0.appendChild(nli)
    console.log(a)
    countt.innerText = a;
    fvalu.innerText = (+a) + (+b)

})



// droppp = headl.innerText
// console.log(droppp)

minus.addEventListener("click", (amin) => {
    if (a > 0) {

        a--;
        if ((a < 10)) {
            a = "0" + a
        }
    }
    nli.innerText = headl.innerText +" " + a
    drop0.appendChild(nli)
    countt.innerText = a;
    fvalu.innerText = (+a) + (+b)

})

var plus4 = document.querySelector(".dcount4")
var countt5 = document.querySelector(".dcount5")
var minus6 = document.querySelector(".dcount6")
var cp1 = document.querySelector(".contp1")
var newli = document.createElement("li")
var tnode1 = document.createTextNode(cp1.innerHTML)


// console.log(plus4.innerText)

parseInt(b = 0);

plus4.addEventListener("click", () => {
    b++;
    if ((b < 10)) {
        b = "0" + b
        if (b > 0) {
            drop0.style.display = "block"




        }
    }
    else {
        b
    }
    newli.innerText = cp1.innerText +" " + b
    drop0.appendChild(newli)
    // console.log(b)
    var k = countt5.innerText = b;
    fvalu.innerText = (+a) + (+b);

})

minus6.addEventListener("click", () => {
    if (b > 0) {

        b--;
        if ((b < 10)) {
            b = "0" + b
        }
    }
    newli.innerText = cp1.innerText +" " + b
    drop0.appendChild(newli)
    countt5.innerText = b;
    fvalu.innerText = (+a) + (+b)

})



var fvalu = document.querySelector(".total")
var insa = document.querySelector(".ins")
// fvalu.innerText =  " "

insa.addEventListener("click", () => {

    // if(countt.innerText > 1){
    //     countt.innerText = 0


    // }
    fvalu.innerText = " "
    nli.innerText = " "
    newli.innerText = " "
    drop0.style.display = "none"
    countt.innerText = 0
    

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





