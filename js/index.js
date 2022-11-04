import Controls from "./controls.js"
import Timer from "./timer.js"


const forestButton = document.querySelector('.sound button:nth-child(1)')
const rainButton = document.querySelector(".sound button:nth-child(2)")
const coffeShopButton = document.querySelector(".sound button:nth-child(3)")
const fireplaceButton = document.querySelector(".sound button:nth-child(4)")
const playButton = document.querySelector('.time-controls button:nth-child(1)')
const stopButton = document.querySelector('.time-controls button:nth-child(2)')
const addTimeButton = document.querySelector('.time-controls button:nth-child(3)')
const removeTimeButton= document.querySelector('.time-controls button:nth-child(4)')
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const lightButton = document.querySelector("#light")
const darkButton = document.querySelector("#dark")
let timeRunning = false


let minutes = minutesDisplay.innerText


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes
})
const controls = Controls()

lightButton.addEventListener('click',()=>{
  lightButton.classList.toggle('hide')
  darkButton.classList.toggle('hide')
  document.querySelector('body').classList.toggle('dark')
})
darkButton.addEventListener('click',()=>{
  lightButton.classList.toggle('hide')
  darkButton.classList.toggle('hide')
  document.querySelector('body').classList.toggle('dark')
})


forestButton.addEventListener('click', (event)=>{
  controls.activeSoundButton(event,forestButton,'forestButton')
})

rainButton.addEventListener('click', (event)=>{
  controls.activeSoundButton(event,rainButton,'rainButton')
})

coffeShopButton.addEventListener('click', (event)=>{
  controls.activeSoundButton(event,coffeShopButton,'coffeShopButton')
})

fireplaceButton.addEventListener('click', (event)=>{
  controls.activeSoundButton(event,fireplaceButton,'fireplaceButton')
})


addTimeButton.addEventListener('click', ()=>{
  controls.addTime(minutesDisplay)
})

removeTimeButton.addEventListener('click', ()=>{
  controls.removeTime(minutesDisplay)
})

playButton.addEventListener('click', ()=>{
  if(!timeRunning){
    timer.start()
    timeRunning = true
  }
})

stopButton.addEventListener('click', ()=>{
  timer.stop()
  timeRunning = false
})




