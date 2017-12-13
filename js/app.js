var num_nuevo = "";
var num_ant = 0;
var opt = "";
var result = 0;
var indi = false;
var pantalla = document.getElementById("display");
var botones = document.getElementsByClassName("tecla");
for(i = 0; i < botones.length; i++){
  botones[i].addEventListener("click", function(event){
      id = event.target.getAttribute('id');
      ancho = event.target.style.width;
      alto = event.target.style.height;
      opacidad = event.target.style.opacity;
      event.target.style.width = "25%";
      event.target.style.height = "25%";
      event.target.style.opacity = "0.5";

      function cambio(){
        event.target.style.width = ancho;
        event.target.style.height = alto;
        event.target.style.opacity = opacidad;

      };
      setTimeout (cambio, 100);
      switch (id){
          case "on":
              pantalla.innerHTML = "0";
              num_ant = 0;
              num_nuevo = "";
              indi = false;
              break;

          case "mas":
              if(result !== 0){
                  num_ant = parseFloat(result);
              }
              else{
                  num_ant = parseFloat(num_nuevo);
              }
              num_nuevo = "";
              pantalla.innerHTML = num_nuevo;
              opt = "mas";
              break;

          case "menos":
              if(result !== 0){
                num_ant = parseFloat(result);
              }
              else{
                  num_ant = parseFloat(num_nuevo);
              }
              num_nuevo = "";
              pantalla.innerHTML = num_nuevo;
              opt = "menos";
              break;

          case "por":
              if(result !== 0){
                num_ant = parseFloat(result);
              }else{
                num_ant = parseFloat(num_nuevo);
              }
              num_nuevo = "";
              pantalla.innerHTML = num_nuevo;
              opt = "por";
              break;

          case "dividido":
              if(result !== 0){
                num_ant = parseFloat(result);
              }else{
                num_ant = parseFloat(num_nuevo);
              }
              num_nuevo= "";
              pantalla.innerHTML = num_nuevo;
              opt = "dividido";
              break;

          case "igual":
              if(indicador === true){
                if(opt === "mas"){
                  result = parseFloat(num_nuevo) + parseFloat(num_ant);
                }
                if( opt === "menos"){
                  result = parseFloat(num_nuevo) - parseFloat(num_ant);
                }
                if( opt === "por"){
                  result = parseFloat(num_nuevo) * parseFloat(num_ant);
                }
                if(opt==="dividido"){
                  result = parseFloat(num_nuevo) / parseFloat(num_ant);
                }

                num_nuevo=result;
              }else{
                  num_ant = num_nuevo;
                  num_nuevo = result;
                  indicador = true;
                }

                result = result.toString();
                if(result.length > 7){
                    result = parseFloat(result);
                    result = result.toExponential(2);
                    pantalla.innerHTML = result;
                }else{
                    pantalla.innerHTML = result;
                  }
              break;

          case "sign":
              if(pantalla.innerHTML !== "0" || pantalla.innerHTML !== ""){
                if(num_nuevo !== ""){
                  num_nuevo = parseFloat(num_nuevo);
                  num_nuevo =- num_nuevo;
                  pantalla.innerHTML = num_nuevo;
                }
              }
              break;

          case "punto":
              id = ".";
              for(i = 0; i < num_nuevo.length; i++){
                if(num_nuevo[i] === "."){
                  id = "";
                }
              }
              if(pantalla.innerHTML !== "0"){
                num_nuevo = num_nuevo + id;
                pantalla.innerHTML = num_nuevo
              }
              break;
          default:
            indicador = false;
            num_nuevo = num_nuevo.toString();
            if(num_nuevo.length <= 7){
                if(pantalla.innerHTML === "0" && id === "0"){

                }else{
                    num_nuevo = num_nuevo + id;
                    pantalla.innerHTML = num_nuevo;}
                  }

              if(opt === "mas"){
                result = num_ant + parseFloat(num_nuevo);
              }
              if(opt === "menos"){
                result=num_ant-parseFloat(num_nuevo);
              }
              if(opt === "por"){
                result = num_ant * parseFloat(num_nuevo);
              }
              if(opt === "dividido"){
                result = num_ant / parseFloat(num_nuevo);
              }
            break;
      }
  });
};
