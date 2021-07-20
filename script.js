const $ = document;
const btns = $.querySelectorAll(".btn")
let screen = $.querySelector(".screen")
const equalBtn = $.querySelector(".btn-equal")
const clearBtn = $.querySelector(".btn-clear")

for(let i = 0 ; i < btns.length ; i++) {
  btns[i].addEventListener('click', function() {
    let number = btns[i].getAttribute('data-num')
    screen.value += number
  })
}


equalBtn.addEventListener('click', function() {
  if(screen.value == "") {
    alert("ُScreen is empty!!")
  } else {
    let resultValue = eval(screen.value)
    screen.value = resultValue
  }
})


clearBtn.addEventListener('click', function() {
  screen.value = ""
})