

// Función para validar fecha de expiración
const expirationDateFun = element =>{
  let dateValue = element.value; 
  element.className = "success";
  return true;
}


//Función para validar CVV

const cvvFunc = element =>{
    let cvvValue = element.value;
    if(cvvValue > 100 && cvvValue.length === 3 && cvvValue == 0){
        element.className = "success";
       return true;
    }else{
        let cvvValue = element.value;
        return false;
    }
}

//Función para validar el nombre

const validateName = element =>{
    let nameValue = element.value;
    if(nameValue.length <= 30){
        element.className = "success";
        return true;    
    }else{
        element.className = "error";
    }   
}


//Función para validar tarjeta 

const cardNum = element => {
    let countsum = 0;

    //Guardar el valor en una variable y al nuevo array darle reverse
    let numberCart = Array.from(element.value);
    let numArray = numberCart.map(num => { return Number(num); }).reverse();
    
    

    //Los números en posiciones pares mulplicarlos por dos, de ser dos digitos sumarlos, los nones se quedan igual y todo se suma
    numArray.forEach((num, index) =>{
      if (index % 2 != 0) { 
        let numEven = num * 2;
        if (numEven > 9) { 
            numEven = numEven.toString();
            let sum1 = Number(numEven[0]);
            let sum2 = Number(numEven[1]);
            let sumTotal =  sum1 + sum2; 
            countsum = countsum + sumTotal; 
            } else {
                countsum = countsum + numEven;
                }
            } else { 
        countsum = countsum + num;
        }
    });

// Con la suma se divide en 10, si es 0 es correcto de lo contrario marcar error
  if (countsum % 10 === 0){
    element.className = 'success'
    return true;
    } else {
    element.className = 'error'
    }
  }



const validateCardDetails = element => {//element sera el form completo
    const formArray = Array.from(form);
    //console.log(formArray);
    let cardNumber = formArray[0];
    //console.log(cardNumber);
    let expirationDate = formArray[1];
    //console.log(expirationDate);
    let cvv = formArray[2];
    //console.log(cvv);  
    let name = formArray[3];
    //console.log(name);  

//Veficar que todo sea verdadero
   if(cardNum(cardNumber) && validateName(name) && cvvFunc(cvv) && expirationDateFu(expirationDate)){
       return true;
        }else{
        return false;
        }
}


const form = document.querySelector("form");


form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});




