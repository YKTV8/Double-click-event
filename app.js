const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// loveMe.addEventListener('dblclick', (e) =>{
//     console.log(123)
// })

let clickTime = 0 
let timesClicked = 0

loveMe.addEventListener('click', (e) =>{
    if(clickTime === 0 ){
        clickTime = new Date().getTime()
    }else{
        if((new Date()- clickTime) < 800 ) {
            createPlug(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})
const createPlug = (e) => {
    const plug = document.createElement('i')
    plug.classList.add('fas')
    plug.classList.add('fa-plug')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    plug.style.top = `${yInside}px`
    plug.style.left = `${xInside}px`

    loveMe.appendChild(plug)

    times.innerHTML = ++timesClicked

    setTimeout(()=> plug.remove(),1000)
} 
