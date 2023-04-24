//Password Generator - Jack Massey//

//Defines all sets of characters that may be used for password generation
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = `!@#$%^&*()[]{}'";:,.<>?=+-_`

//Creates all the checks, specifically one for each checkbox, as well as the length input and the "GENERATE PASSWORD" button
const lcCheck = document.querySelector(`#lowercase`)
const ucCheck = document.querySelector(`#uppercase`)
const numCheck = document.querySelector(`#numbers`)
const symCheck = document.querySelector(`#symbols`)
const lenCheck = document.querySelector(`#length`)
const genButton = document.querySelector(`#generate`)

//Gets the output area, where the generated password is displayed, and the copy button
const output = document.querySelector(`#result`)
const copyButton = document.querySelector(`#clipboard`)

//When the generate button is clicked,
genButton.addEventListener(`click`, () => {
    //Sets "password" output to a blank string
    let password = ""

    //Sets the length of the final password equal to the input value (minumum 4, maximum 20)
    let len = lenCheck.value
    if (len < 4){
        len = 4
    } else if (len > 20){
        len = 20
    }

    //Until the password reaches the desired length, runs this loop
    while (password.length < len) {
        //If the checkbox for lowercase letters is checked, adds a lowercase letter
        if (lcCheck.checked && password.length < len) {
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        }
        //If the checkbox for uppercase letters is checked, adds an uppercase letter
        if (ucCheck.checked && password.length < len) {
            password += upperCase[Math.floor(Math.random() * upperCase.length)]
        }
        //If the checkbox for numbers is checked, adds a number
        if (numCheck.checked && password.length < len) {
            password += numbers[Math.floor(Math.random() * numbers.length)]
        }
        //If the checkbox for symbols is checked, adds a symbol
        if (symCheck.checked && password.length < len) {
            password += symbols[Math.floor(Math.random() * symbols.length)]
        }
        //If all checkboxes are unchecked, alerts the user telling them to check at least one box.
        if (!(lcCheck.checked || ucCheck.checked || numCheck.checked || symCheck.checked)){
            alert("Please check at least one box.")
            password = "Please check at least one box."
            break;
        }
    }
    //Sets the output section's text to the generated password
    output.innerText = password;
})

//When the copy to clipboard button is clicked, 
copyButton.addEventListener(`click`, () => {
    //Copies the output text (the generated password) to the clipboard
    navigator.clipboard.writeText(output.innerText)
})