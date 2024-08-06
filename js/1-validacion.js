//capturar evento submit
document.getElementById('registroForm').addEventListener('submit', function(event){
    event.preventDefault();
    console.log("event:", event);
    console.log('Tipo de evento', event.type);
    //event.target
    //event.timeStamp
    //event.isTrusted
})