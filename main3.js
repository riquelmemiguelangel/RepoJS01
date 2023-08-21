//calculadora basica


let respuesta = confirm ("Desea hacer una operacion matematica ?");
//mientras que el usuario responda aceptar se repite  
while (respuesta) {


    let num1 = parseInt(prompt("Ingrese un numero"));
    let ope = prompt("Indique operacion: + , - , * , /").trim();
    let num2 = parseInt(prompt("Ingrese otro numero"));

    if (!isNaN(num1) && !isNaN(num2) && ope != "" ){

        //verifico que operacion tengo que hacer
        switch (ope) {

            case "+" :
                document.write(num1 + " + " +num2 + " = " + (num1 + num2) + "<br>");
                break;
            case "-" :
                document.write(num1 + " - " +num2 + " = " + (num1 - num2)+ "<br>");
                break; 
            case "*" :
                document.write(num1 + " * " +num2 + " = " + (num1 * num2)+ "<br>");
                break;   
            case "/" :
                document.write(num1 + " / " +num2 + " = " + (num1 / num2)+ "<br>");
                break; 
            default :
                alert("operacion invalida");          


        }


    }else{

        alert("No ingresaste datos correctos");

    }

    //confirmo con el usuario nuevamente
    respuesta = confirm("Queres hacer otra operacion matematica ?")


}