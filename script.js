let paragraph = document.getElementById(`paragraph`)
let messageInput = document.getElementById(`messageInput`)
let submitButton = document.getElementById(`submitButton`)

let paragraphOne = document.getElementById(`paragraphOne`)
let paragraphTwo = document.getElementById(`paragraphTwo`)

let responseShown = false

submitButton.addEventListener(`click`, showBotResponse)

function showBotResponse() {

  if (responseShown == false) {
    console.log(responseShown)
    console.log(messageInput.value)

    if (messageInput.value == "how are you") {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: I'm doing great`
    }
    else if (messageInput.value == `tell a joke`) {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: what do you call 2000 mockingbirds?`
      responseShown = true
    }
    else if (messageInput.value == `find a square root`) {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: please type a number`
      responseShown = true
    }
    else {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: I don't understand you`
    }
  }
  else {
    if (messageInput.value == `what`) {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: two kilo mockingbird`
      responseShown = false
    }

    else if (messageInput.value == !NaN) {
      let sqRt = Math.sqrt(messageInput.value).toFixed(2)
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: The square root of ${messageInput.value} is ${sqRt}`
      responseShown = false
    }
    else {
      paragraphOne.innerHTML = `You: ${messageInput.value}`
      paragraphTwo.innerHTML = `Bot: I do not understand`
    }
  }
  messageInput.value = ""
}