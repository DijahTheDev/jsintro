alert("Welcome to Nightmare on Punchcode Street.")

var playgame = confirm(
  "This game is not for the faint of hearts. You will be terrorized with math concepts that you may be unfamiliar with. Do you wish to continue?"
)

if (playgame == true) {
  alert("You brave soul!! Let's begin.")
  var answer = prompt("What is the binary number for 13?")

  if (answer === "1101") {
    var pemdas = prompt(
      "Congratulations! You made it to the next round. What's the abbreviation for the order of operations?"
    )
    if (pemdas === "pemdas") {
      var pi = confirm(
        "Perfect! You have survived to the last round. Is pi 3.14?"
      )

      if (pi == true) {
        alert("That is correct. You have won Nightmare on Punchcode Street!")
      } else {
        alert(
          "That is incorrect. Nice try, and unfortunately you cannot try again. You have reached the end of the Punchcode Street"
        )
      }
    } else {
      alert(
        "I didn't know the answer either and was hoping you could help. Since you are useless, you must die. GOODBYE!"
      )
    }
  }
} else {
  alert(
    "You suck and are a quitter! Since you are not up for the challenge you must die! GAME OVER! The end."
  )
}
