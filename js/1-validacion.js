function validarNombre(){
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracteres.';
        return false;
    }else{
        nombreErrorTxt.textContent = '';
        return true;
    }
}

function validarEmail(){
    let esCorrecto = true;
    let emailTxt = document.getElementById('email').value;
    let emailErrorTxt = document.getElementById('emailError');
    let emailRegex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');

    if(emailRegex.test(emailTxt.trim())){
        emailErrorTxt.textContent = '';
    }else{
        esCorrecto = false;
        emailErrorTxt.textContent = 'Por favor, introduce un email válido.';
    }
    return esCorrecto;
}

function validarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById('passwordError');
    if(passwordTxt.trim() < 6){
        passwordErrorTxt.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return false; 
    }else{
        passwordErrorTxt.textContent = '';
        return true;
    }
}

function confirmarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let comfirmPasswordTxt = document.getElementById('confirmPassword').value;
    let confirmPasswordErrorTxt = document.getElementById('confirmPasswordError');
    if(passwordTxt.trim() !== comfirmPasswordTxt.trim()){
        confirmPasswordErrorTxt.textContent = 'Las contraseñas no coinciden';
        return false;
    }else{
        confirmPasswordErrorTxt.textContent = '';
        return true;
    }
}

//capturar evento submit
document.getElementById('registroForm').addEventListener('submit', function(event){
    /*
        Esta función recibe un argumento de tipo event
        event es un objeto con información sobre el evento
        este evento es de tipo submit
    */

    //detiene el comportamiento del submit
    event.preventDefault();
    
    console.log("event:", event);
    //especifica el tipo de evento
    console.log('Tipo de evento', event.type);
    //contiene una referencia al DOM que dispara el evento
    console.log('Elemento currentTarget', event.currentTarget);
    console.log('Elemento target', event.target);
    //tiempo en milisegundos en que ocurrió el evento
    console.log('Tiempo del evento', event.timeStamp);
    //us booleano que indica si el evento fué iniciado por un usuario(true) o por un script(false)
    console.log('Es confiable', event.isTrusted);

    let isNombreValid = validarNombre();
    let isEmailValid = validarEmail();
    let isPasswordValid = validarPassword();
    let isConfirmPasswordValid = confirmarPassword();

    if(isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
        alert('Formulario enviado con éxito!');
        this.reset(); 
    } else {
        alert('Por favor, corrige los errores del formulario');
    }
});