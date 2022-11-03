
export default function() {
  
  const forestButton = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Floresta.wav")
  const rainButton = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Chuva.wav")
  const coffeShopButton = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Cafeteria.wav")
  const fireplaceButton = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Lareira.wav")


  forestButton.loop = true
  rainButton.loop = true
  coffeShopButton.loop = true
  fireplaceButton.loop = true



  return {
    forestButton,
    rainButton,
    coffeShopButton,
    fireplaceButton
  }

}