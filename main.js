//datos de usuarios
const id_user1 = 1;
const nomyape1= "Manuel Sanmartin";
const pass = "1234";

//datos de usuario2
let id_usuario2 = 2;
let nombre_completo2 = "Juan Belgrano";
let pass2 = "1234";

let apeynom ="";
let salida = true
let cantidad = 0;
let comida = "0";

while(salida){
    let Nusuario = prompt("Bienvenido al Bufet!!! <Ingreso de PEDIDO> \n\nSocios       - <Ingrese su numero de socio>\nInvitados   - <Ingrese 0>\nSalir         - <Presione X>\n\n\nSocios 20% de descuento ").trim();
    if (Nusuario == "x" || Nusuario == "X"){
        salida=false;
        }
    /*else{
         if (Nusuario==0) {
             apeynom=prompt("Ingrese su nombre y apellido");      
         } else {
            switch(Nusuario){
                case "1":
                    break;
                case "2":
                    break;
            }
         }  
        let password = prompt ("Ingrese su contraseña").trim();
        }
        */

}
