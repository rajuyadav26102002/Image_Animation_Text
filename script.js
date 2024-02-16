var elem = document.querySelectorAll("#elem")

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x+"px"
    })

});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//--> with the help of these i am cheaking which no.of node is image node bcz we want image sp we are chaeak with the help of these -
//  console.log(val.childNodes)

// op -
// NodeList(5) [ #text, h1, #text, img, #text
// ]
//
// 0: #text "\n            "
// 1: <h1>
// 2: #text "\n            "
// 3: <img src="https://images.unsplash.…fHx8fGVufDB8fHx8fA%3D%3D" alt="">
// 4: #text "\n        "
//
// length: 5

// so our image node is  - 
// val.childNodes[3]


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ------------------for single elem Effect------------------

// var elem = document.querySelector("#elem")
// var Elemimg  = document.querySelector("#elem img")

// elem.addEventListener("mousemove" ,function(dets){
//     Elemimg.style.opacity = "1"
//   Elemimg.style.left = dets.x + "px";

// })
// elem.addEventListener("mouseleave" ,()=>{
//     Elemimg.style.opacity = "0"
// })