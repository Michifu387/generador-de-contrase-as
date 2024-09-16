let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()'

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado <= 6){
        alert("la cantidad de caracteres tiene que ser mayor que 6")
        return;
    }

    let password = '';

    for(let i=0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        
        password+=caracterAleatorio;
        
    }
    console.log('password generada:');
    contrasena.value = password;
    alert("contraseña generada" + password);
    validar(password);
}
function borrar(){
    contrasena.value = '';
    cantidad.value = ''; 
}
function validar(password){
    let verificar = (contrasena.value)

    const largoMinimo = 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let mensaje = "";

    if (mensaje.length < largoMinimo) {
        mensaje += 'La contraseña debe tener al menos 9 caracteres.\n';
    }
    if (!tieneMayuscula) {
        mensaje += "La contraseña debe contener al menos una letra mayúscula.\n";
    }
    if (!tieneMinuscula) {
        mensaje += "La contraseña debe contener al menos una letra minúscula.\n";
    }
    if (!tieneNumero) {
        mensaje += "La contraseña debe contener al menos un número.\n";
    }
    if (!tieneCaracterEspecial) {
        mensaje += "La contraseña debe contener al menos un carácter especial.\n";
    }

    if (!tieneMayuscula || !tieneCaracterEspecial || !largoMinimo || !tieneNumero) { 
        alert("Contraseña Vulnerable");
 }  else {
        alert("Contraseña Segura");
     }
} 

   