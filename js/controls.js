import Sound from "./sounds.js"
const sound = Sound()

export default function (){
  const volume = document.querySelectorAll(".volume")
  function activeSoundButton(event,button,name){
    const btn =  document.querySelectorAll('.sound')
    
    if(event.target == button){
      sound.forestButton.pause()
      sound.rainButton.pause()
      sound.coffeShopButton.pause()
      sound.fireplaceButton.pause()
      if(event.target.classList.contains('active')){
        event.target.classList.remove('active')
      }else{
    for(let i=1; i<btn[0].childNodes.length;i+=2){
      if(btn[0].childNodes[i].classList[0] === 'sound-controls'){
        btn[0].childNodes[i].classList.remove('active')

      }
    }
      event.target.classList.add('active')
      sound[name].play()
    }
    }
    
  }

  function addTime(minutes){
    minutes.innerText = Number(minutes.innerText) + 5
    if (Number(minutes.innerText) < 10){
      minutes.innerText = String(minutes.innerText).padStart(2, "0")
    }
  }

  function removeTime(minutes){
    if(Number(minutes.innerText) > 0){
      minutes.innerText = Number(minutes.innerText) - 5
    }
    if (Number(minutes.innerText) < 10){
      minutes.innerText = String(minutes.innerText).padStart(2, "0")
    }
  }


volume[0].addEventListener('change',(e)=>{
  let name = volume[0].classList[1]
  sound[name].volume = e.currentTarget.value
})
volume[1].addEventListener('change',(e)=>{
  let name = volume[1].classList[1]
  sound[name].volume = e.currentTarget.value
})
volume[2].addEventListener('change',(e)=>{
  let name = volume[2].classList[1]
  sound[name].volume = e.currentTarget.value
})
volume[3].addEventListener('change',(e)=>{
  let name = volume[3].classList[1]
  sound[name].volume = e.currentTarget.value
})

  return {
    activeSoundButton,
    addTime,
    removeTime
  }
}