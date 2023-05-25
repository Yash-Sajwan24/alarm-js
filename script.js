let alarm = document.querySelector('#alarm');
let submit = document.querySelector('#btn');
let alertSuccess = document.querySelector('.alert-success');
let alertFail = document.querySelector('.alert-danger');
let audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
let d = new Date();

alarm.addEventListener('blur', function(){
    let regex = /^2023\/[0-9]{2}\/[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}$/;
    let str = alarm.value;
    if(regex.test(str)){
        alarm.classList.remove('is-invalid');
    }
    else{
        alarm.classList.add('is-invalid');
        document.querySelector('.invalid-feedback').innerHTML = `please enter a valid time.`;
    }
    
})

submit.addEventListener('click', function(e){
    e.preventDefault();
    let date = new Date();
    let setAlarm = new Date(alarm.value);
    let diff = setAlarm - date;
    
    if(diff>0){
        alertFail.classList.remove('show');
        alertSuccess.classList.add('show');
        setTimeout(function(){
            audio.play();
        }, diff);
    }
    else{
        alertSuccess.classList.remove('show');
        alertFail.classList.add('show');
        alarm.classList.add('is-invalid');
        document.querySelector('.invalid-feedback').innerHTML = `your time should be greater than ${d}`;
    } 
})

