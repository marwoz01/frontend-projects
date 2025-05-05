const countBtn = document.getElementById('count-btn')
let numberOfClicks = document.getElementById('number-of-clicks')
let count = 0

countBtn.addEventListener("click", function(){
    count++
    numberOfClicks.innerHTML = count
    if (count === 10) {
        setTimeout(() => {
            alert('Kliknąłeś 10 razy!')
        }, 10);
    }
})