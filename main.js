function calPowerWithModuls(M,N,O){
    return Math.pow(M,N) % O;
}

function myFunction()
{
        p1 = document.getElementById("p1").value;
        p2 = document.getElementById("p2").value;

        x = document.getElementById("x").value;
        y = document.getElementById("y").value;
        
        // Alice gets the generated key
        A = calPowerWithModuls( p2, x, p1);  
        
        // Bob gets the generated key
        B = calPowerWithModuls(p2, y, p1);  

        // Generating the secret key after the exchange of keys 
        var k1 = calPowerWithModuls(B, x, p1); // Secret key for Alice 
        var k2 = calPowerWithModuls(A, y, p1); // Secret key for Bob 

        alert("Secret key for Alice is "+ k1+ "\n" +"Secret key for Bob is " + k2);
    
        //document.getElementById("result").innerHTML = "Secret key for Alice is "+ k1 + "<br>" + " Secret key for Bob is  "+ k2;
}
