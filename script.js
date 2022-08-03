function calcimc(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var imc = peso / (altura*altura).toFixed(2);
    console.log(imc)
    

    html = `<h1 id= imcshow> Seu IMC é: ${imc.toFixed(2)}</h1>`;
    $('#imcshow').html(html)

    html = `<h2 id= imc2></h2>`;
    $('#imc1').html(html)

    html = `<h3 id= imc3></h3>`;
    $('#imc2').html(html)

    html = `<h4 id= imc4></h4>`;
    $('#imc3').html(html)

    html = `<h5 id= imc5></h5>`;
    $('#imc4').html(html)

    html = `<h6 id= imc6></h6>`;
    $('#imc5').html(html)
    


    if (imc < 18.5){

        html = `<h2 id= imc1> Categoria: Magreza </h2>`;
    $('#imc1').html(html)
}

    else if (imc > 18.5 && imc < 24.9){
        html = `<h3 id= imc2>  Categoria: Normal </h3>`;
        $('#imc2').html(html)

    }

    else if (imc > 25 && imc < 29.9){
        html = `<h4 id= imc4> Categoria: Sobrepeso</h4>`;
        $('#imc3').html(html)

    }

    
    else if (imc >= 30 && imc <= 39.9){
        html = `<h5 id= imc4> Categoria:Obesidade </h5>`;
        $('#imc4').html(html)

    }

    else if (imc >= 40 ){
        html = `<h6 id= imc4=5> Categoria: Obesidade grave </h6>`;
        $('#imc5').html(html)

    }
    


    }



