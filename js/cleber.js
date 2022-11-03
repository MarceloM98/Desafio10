forestButton.addEventListener('click', ()=>{
  if(!soundActive ||forestButton.classList.contains('active') ){
    controls.colorChange(forestButton)
    if(forestButton.classList.contains('active')){
      soundActive = true
      sound.forestAudio.play()
    }else{
      soundActive = false
      sound.forestAudio.pause()
    }
  }
})

rainButton.addEventListener('click', ()=>{
  if(!soundActive ||rainButton.classList.contains('active') ){
    controls.colorChange(rainButton)
    if(rainButton.classList.contains('active')){
      soundActive = true
      sound.rainAudio.play()
    }else{
      soundActive = false
      sound.rainAudio.pause()
    }
  }
})

coffeShopButton.addEventListener('click', ()=>{
  if(!soundActive ||coffeShopButton.classList.contains('active') ){
    controls.colorChange(coffeShopButton)
    if(coffeShopButton.classList.contains('active')){
      soundActive = true
      sound.coffeShopAudio.play()
    }else{
      soundActive = false
      sound.coffeShopAudio.pause()
    }
  }
})

fireplaceButton.addEventListener('click', ()=>{
  if(!soundActive ||fireplaceButton.classList.contains('active') ){
    controls.colorChange(fireplaceButton)
    if(fireplaceButton.classList.contains('active')){
      soundActive = true
      sound.fireplaceAudio.play()
    }else{
      soundActive = false
      sound.fireplaceAudio.pause()
    }
  }
})
