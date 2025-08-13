const input_number_guess = document.querySelector('.input_number_guess')
const number_guess_search_btn = document.querySelector('.number_guess_search_btn')
const text_number_guess = document.querySelector('#text_number_guess')
const count_attempts = document.querySelector('.count_attempts')

let rundom_num = Math.floor(Math.random() * 10) + 1
let attempts = 3
count_attempts.textContent = attempts
function checkNum() {
    const input_number_guess_value = parseInt(input_number_guess.value)

    if (isNaN(input_number_guess_value) || input_number_guess_value > 10 || input_number_guess_value <= 0){
        text_number_guess.textContent = 'Введи число від 1 до 10'
        text_number_guess.className = 'red_number_guess'
        return
      }

      if (input_number_guess_value === rundom_num){
        text_number_guess.textContent = `Вітаю, ви вгадали число! (${rundom_num}) `
        text_number_guess.className = 'green_number_guess'
        attempts = 3
        rundom_num = Math.floor(Math.random() * 10) + 1
        count_attempts.textContent = attempts
        input_number_guess.value = ''
      } else{
        attempts--
        if (attempts > 0 && input_number_guess_value > rundom_num){
            text_number_guess.textContent = `Спробуй менше число. `
            text_number_guess.className = 'red_number_guess'
        } else if (attempts > 0 && input_number_guess_value < rundom_num){
            text_number_guess.textContent = `Спробуй більше число. `
            text_number_guess.className = 'red_number_guess'
        } else{
            text_number_guess.textContent = `Ви програли, комп’ютер загадав (${rundom_num}) `
            text_number_guess.className = 'red_number_guess'
            rundom_num = Math.floor(Math.random() * 10) + 1
            attempts = 3
        }
        count_attempts.textContent = attempts
        input_number_guess.value = ''
      }
}
number_guess_search_btn.addEventListener('click', checkNum)
input_number_guess.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        checkNum()
    }
})