function Encriptar(){
    
    document.getElementById("Resultado_Imagen").style.display = "none";
    let texto = document.getElementById("Input").value;
    let texto_enc = '';
    texto_enc = texto.replace (/a|e|i|o|u/g, function(cambio) {
        
        switch (cambio) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                 return 'ufat';
        }
    });
    
    console.log(texto_enc);

    

    Escribir(texto_enc);

}

function Desencriptar(){
    document.getElementById("Resultado_Imagen").style.display = "none";
    let texto = document.getElementById("Input").value;
    var texto_denc = '';
    texto_denc = texto.replace(/ai|enter|imes|ober|ufat/g, function(cambio) {
        switch (cambio) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                 return 'u';
        }
    });
    
    console.log(texto_denc);

    Escribir(texto_denc);

}

function Escribir(texto){

    document.getElementById("boton_copiar").style.display = "block";
    document.getElementById("Respuesta").textContent = texto;

}
function copiar(){
    let texto = document.getElementById("Respuesta").textContent;
    console.log(texto);
    navigator.clipboard.writeText(texto);
}
