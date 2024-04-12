const main = document.querySelector('main');
const success = document.querySelector('.success');
const EmailInput = document.querySelector('input');
const btn1 = document.getElementById('btn');
const btn2 = document.getElementById('btn-2');
const validSpan = document.getElementById('valid');
success.classList.add('hiden')
validSpan.style.display = 'none';

btn1.addEventListener('click', () => {
    let letters = EmailInput.value;
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === '@') {
         success.classList.remove('hiden');
         main.classList.add('hiden')
       
        } else {

            validSpan.style.display = 'block';
            EmailInput.classList.add('input-error');


            setInterval(() => {
                location.reload()
            },4000)


        }


    }
    
   
})

btn2.addEventListener('click', () => {
    success.classList.add('hiden');
    main.classList.remove('hiden')
    validSpan.style.display = 'none';
    EmailInput.classList.remove('input-error');
    EmailInput.value = ''
})