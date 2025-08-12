const input_number_guess = document.querySelector('.input_number_guess')
const number_guess_search_btn = document.querySelector('.number_guess_search_btn')
const text_number_guess = document.querySelector('#text_number_guess')

number_guess_search_btn.addEventListener('click', () => {
    const input_number_guess_value = parseInt(input_number_guess.value)
    const rundom_num = Math.floor(Math.random() * 10) + 1

    if (isNaN(input_number_guess_value)){
        text_number_guess.textContent = 'Неправильний рік'
        text_number_guess.classList.add('red_number_guess')
        return
      }
})