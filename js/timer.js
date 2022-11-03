export default function ({
  minutesDisplay,
  secondsDisplay,
  minutes
}){

  let timerTimeOut
  function start(){
    minutes = minutesDisplay.innerText
    countdown()
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.innerText)
      let minutes = Number(minutesDisplay.innerText)

      if(seconds <= 0){
        seconds = 60
        minutes = minutes-1
      }
      seconds = seconds-1
      seconds = String(seconds).padStart(2, "0")
      minutes = String(minutes).padStart(2, "0")
      updateTimer(minutes, seconds)

      if(Number(minutes) <= 0 && Number(seconds) === 0){

        return
      }


      countdown()
    }, 1000)
  }
  
  function updateTimer(minutes,seconds){
    secondsDisplay.innerText = seconds
    minutesDisplay.innerText = minutes
  }

  function stop(){
    clearTimeout(timerTimeOut)
    updateTimer(minutes,'00')
    console.log(minutes)
  }

  return{
    start,
    countdown,
    stop
  }
}
