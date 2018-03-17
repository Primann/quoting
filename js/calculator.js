function calcsum(){


        
    //carpentry
    var cHours = parseInt(document.getElementById("cHours").value);
    var cCostHour = parseInt(document.getElementById("cCostHour").value);
    document.getElementById("cTotal").innerHTML = cHours*cCostHour; 
    //sanding
    var sHours = parseInt(document.getElementById("sHours").value);
    var sCostHour = parseInt(document.getElementById("sCostHour").value);
    document.getElementById("sTotal").innerHTML = sHours*sCostHour;
    
    // Total Labor
    var cTotal = parseInt(document.getElementById("cTotal").value);
    var sTotal = parseInt(document.getElementById("sTotal").value);
    document.getElementById("totalL").innerHTML = cTotal+sTotal;
}

