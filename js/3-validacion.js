function validarNombre(){
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracteres.';
        document.getElementById('nombre').classList.add('error-input');
        document.getElementById('nombre').classList.remove('success');
        return false;
    }else{
        nombreErrorTxt.textContent = '';
        document.getElementById('nombre').classList.add('success');
        document.getElementById('nombre').classList.remove('error-input');
        return true;
    }
}

function validarEmail(){
    let esCorrecto = true;
    let emailTxt = document.getElementById('email').value;
    let emailErrorTxt = document.getElementById('emailError');
    let emailRegex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');

    if(emailRegex.test(emailTxt.trim())){
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.remove('error-input');
        emailErrorTxt.textContent = '';
    }else{
        esCorrecto = false;
        document.getElementById('email').classList.remove('success');
        document.getElementById('email').classList.add('error-input');
        emailErrorTxt.textContent = 'Por favor, introduce un email válido.';
    }
    return esCorrecto;
}

function validarFechaNacimiento(){
    //validar que la fecha de nacimiento que sea anterior a la actual y que no sea mayor de 120 años
    let fechaUsuario = document.getElementById('fechaNacimiento').value;
    let fechaUsuarioErrorTxt = document.getElementById('fechaNacimientoError');
    let fechaActual = new Date();
    // let anyoActual = fechaActual.getFullYear();
    // let mesActual = fechaActual.getMonth();
    // let diaActual = fechaActual.getDay();
    //let fechaMinima = new Date(anyoActual - 120, mesActual, diaActual);
    let fechaMinima = new Date(
        fechaActual.getFullYear() - 120,
        fechaActual.getMonth(),
        fechaActual.getDay()
    );
    fechaUsuario = new Date(fechaUsuario);
    
    if(fechaUsuario > fechaActual || fechaUsuario < fechaMinima){
        fechaUsuarioErrorTxt.textContent = 'Por favor, introduce una fecha de nacimiento válida.';
        document.getElementById('fechaNacimiento').classList.add('error-input');
        document.getElementById('fechaNacimiento').classList.remove('success');
        return false;
    }else{
        fechaUsuarioErrorTxt.textContent = '';
        document.getElementById('fechaNacimiento').classList.remove('error-input');
        document.getElementById('fechaNacimiento').classList.add('success');
        return true;
    }


}

function validarTelefono(){
    let telefonoTxt = document.getElementById('telefono').value;
    let telefonoErrorTxt = document.getElementById('telefonoError');

    if(telefonoTxt.trim().length < 20 && telefonoTxt.trim().length > 8){
        telefonoErrorTxt.textContent = '';
        document.getElementById('telefono').classList.remove('error-input');
        document.getElementById('telefono').classList.add('success');
        return true;
        
    }else{
        telefonoErrorTxt.textContent = "Por favor, introduce un número de teléfono válido";
        document.getElementById('telefono').classList.add('error-input');
        document.getElementById('telefono').classList.remove('success');
        return false;
    }
}

function validarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById('passwordError');
    if(passwordTxt.trim().length < 6){
        document.getElementById('password').classList.add('error-input');
        document.getElementById('password').classList.remove('success');
        passwordErrorTxt.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return false; 
    }else{
        document.getElementById('password').classList.remove('error-input');
        document.getElementById('password').classList.add('success');
        passwordErrorTxt.textContent = '';
        return true;
    }
}

function confirmarPassword(){
    let passwordTxt = document.getElementById('password').value;
    let comfirmPasswordTxt = document.getElementById('confirmPassword').value;
    let confirmPasswordErrorTxt = document.getElementById('confirmPasswordError');
    if(passwordTxt.trim() !== comfirmPasswordTxt.trim()){
        document.getElementById('confirmPassword').classList.add('error-input');
        document.getElementById('confirmPassword').classList.remove('success');
        confirmPasswordErrorTxt.textContent = 'Las contraseñas no coinciden';
        return false;
    }else{
        document.getElementById('confirmPassword').classList.remove('error-input');
        document.getElementById('confirmPassword').classList.add('success');
        confirmPasswordErrorTxt.textContent = '';
        return true;
    }
}

//Agregar eventos de escucha para la validación en tiempo real
document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('fechaNacimiento').addEventListener('input', validarFechaNacimiento);
document.getElementById('telefono').addEventListener('input', validarTelefono);
document.getElementById('password').addEventListener('input', validarPassword);
document.getElementById('confirmPassword').addEventListener('input', confirmarPassword);

//capturar evento submit
document.getElementById('registroForm').addEventListener('submit', function(event){

    let isNombreValid = validarNombre();
    let isEmailValid = validarEmail();
    let isFechaValid = validarFechaNacimiento();
    let isTelefonoValid = validarTelefono();
    let isPasswordValid = validarPassword();
    let isConfirmPasswordValid = confirmarPassword();

    if(isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isFechaValid && isTelefonoValid){
        alert('Formulario enviado con éxito!');
        this.reset(); 
    } else {
        alert('Por favor, corrige los errores del formulario');
    }
});