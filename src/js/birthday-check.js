const input_birthday = document.querySelector('.input_birthday')
const birthday_search_btn = document.querySelector('.birthday_search_btn')
const text_birthday = document.querySelector('#text_birthday')
function birthdayCheck(){
    const input_birthday_value = parseInt(input_birthday.value)
  if (isNaN(input_birthday_value) || input_birthday.value.length <= 3 || input_birthday.value.length > 4){
    text_birthday.textContent = 'Неправильний рік'
    text_birthday.classList.add('red')
    return
  }

  if ((input_birthday_value % 4 === 0 && input_birthday_value % 100 !== 0) || input_birthday_value % 400 === 0){
    text_birthday.textContent = 'Ви народилися у високосний рік!'
    text_birthday.className = "green";
    input_birthday.value = ''
  } else {
    text_birthday.textContent = 'Ви народилися не у високосний рік!'
    text_birthday.className = "red";
    input_birthday.value = ''
  }
}
input_birthday.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        birthdayCheck()
    }
})
birthday_search_btn.addEventListener('click', birthdayCheck)