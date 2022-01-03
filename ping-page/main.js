const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if(!emailValue){
        email.classList.add('error');
        small.innerText = 'Email field cannot be blank';
        small.style.display = 'inline-block';

    }else if(!isValidEmail(emailValue)){
        email.classList.add('error');
        small.innerText = 'Email is invalis';
        small.style.display = 'inline-block';  
    }else{
        email.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none';
    }
})

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }