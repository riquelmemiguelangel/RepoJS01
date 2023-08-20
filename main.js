//datos de usuarios
const id_user1 = 1;
const nomyape1= "Manuel Sanmartin";
const pass = "1234";

let apeynom =""
//datos de usuario2
let id_usuario2 = 2;
let nombre_completo2 = "Juan Belgrano";

let pass2 = "1234";
let salida = true


let cantidad = 0;
let comida = "0";

while(salida){
    let Nusuario = prompt("Bienvenido al Bufet!!! <Ingreso de PEDIDO> \n\nSocios       - <Ingrese su numero de socio>\nInvitados   - <Ingrese 0>\nSalir         - <Presione X>\n\n\nSocios 20% de descuento ").trim();
    if (Nusuario == x || Nusuario == X){
        salida=false
               
        }
    else{
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

}

let password2 = prompt ("Seleccione su comida: \n 1 Hamburguesa - 550$\nPancho   400$ \n3 Empanada 650$\n4 sin consumo\n x Cancela pedido");

cantidad = prompt ("Ingrese la cantidad de "+comida);
//valido que el usuario haya completado los dos datos
if (usuario != "" && password != "" ){

    //chequeo si los datos corresponder al primer usuario
    if (usuario == user && password == pass  ){
        let mensaje = "Bienvenido "+nombre_completo;
        mensaje += "\nid: "+id_usuario; 
        mensaje += "\nsaldo en cuenta: "+saldo; 
        alert (mensaje);

        //pregunto si queire hacer uan transferencia
        let respuesta = confirm("Desea hacer una transferencia?");
        if (respuesta){

            // le pido el monto a transferir
            let monto = parseFloat(prompt("Ingrese el monto a transferir"));

            if (isNaN(monto)){

                alert ("Transferencia abortada");

            }else {


                let id = prompt("Ingrese id del usuario destino").trim();

                //cheuqueo si el id del usuario es igual al del usuaario2
                if (id == id_usuario2){

                    //chequeo si puede hacer la transferencia
                    if (monto <= saldo){

                        saldo = saldo - monto ;
                        saldo2 = saldo2 + monto ;

                        let mensaje = "Tranferencia exitosa";
                        mensaje += "\n: "+nombre_completo; 
                        mensaje += "\nsaldo en cuenta: "+saldo;
                        mensaje += "\n----------------"; 
                        mensaje += "\n: "+nombre_completo2; 
                        mensaje += "\nsaldo en cuenta: "+saldo2; 
                        alert (mensaje);


                    }else {


                        alert("Monto insuficiente");

                    }



                }else {

                    alert ("error");
                }

            }

        }


    }else if (usuario == user2 && password == pass2){
        let mensaje = "Bienvenido "+nombre_completo2;
        mensaje += "\nid: "+id_usuario2; 
        mensaje += "\nsaldo en cuenta: "+saldo2; 
        alert (mensaje);


        

    }else{

        alert("Credenciales incorrectas");
    }

}else {

    alert("No ingresaste todos los datos");
}











