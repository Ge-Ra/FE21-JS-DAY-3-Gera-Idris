function stars() {
    document.getElementById("stars").innerHTML = "";
    for(var i = 1; i <= 6; i++){
        for(let j = 0; j < i; j++) {
            document.getElementById("stars").innerHTML += '*';
        }    
        document.getElementById("stars").innerHTML += '<br>';
    }
}
stars();