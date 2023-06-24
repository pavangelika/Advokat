(function () {
    'use strict'
  
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  let forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  else{
    const text = form.querySelector('#validationTextarea').value;
        const name = form.querySelector('#validationCustom01').value;
        const surname = form.querySelector('#validationDefault02').value;
        const tel = form.querySelector('#validationDefault03').value;
        const email = form.querySelector('#validationDefault04').value;
        fetch('/receiveForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({text, name, surname, tel, email})
        })
        .then(resp => resp.text())
        .then(text => form.querySelector('#success').innerText="Сообщение отправлено!")
        .catch(ex => alert("Упс! Что-то пошло не так... Попробуйте снова! " + error));
        event.preventDefault()
        event.stopPropagation()
  }
          form.classList.add('was-validated')
        }, false)
      })
  })()