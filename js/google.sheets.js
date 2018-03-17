var script_url = "https://script.google.com/macros/s/AKfycby84-a89kbKG2IeJb9mKymgmN7_TLO9CoYbin1cnBmo6AJO2oA/exec";
  
  // Make an AJAX call to Google Script
  function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

    var id1=	$("#id").val();
	var name= $("#name").val();
    var qty= $("#qty").val();
    var marketprice= $("#marketprice").val();
    var category= $("#category").val();
    var desc= $("#desc").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&qty="+qty+"&marketprice="+marketprice+"&category="+category+"&desc="+desc+"&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }


  
  
 
  
  
  function update_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	
    var id1=	$("#id").val();
	var name= $("#name").val();
    var qty= $("#qty").val();
    var marketprice= $("#marketprice").val();
    var category= $("#category").val();
    var desc= $("#desc").val();
    
	
   var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&qty="+qty+"&marketprice="+marketprice+"&category="+category+"&desc="+desc+"&action=update";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

	
  }

  
 
  
  
  function delete_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
var id1=	$("#id").val();
	var name= $("#name").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=delete";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }


  
  
  // print the returned data
  function ctrlq(e) {
  
	
	$("#re").html(e.result);
	$("#re").css("visibility","visible");
	read_value();
	
  }
  
  

  
function read_value() {

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
	
		cell1.innerHTML = "<b>ID</b>";
		cell2.innerHTML = "<b>Name</b>";
        cell3.innerHTML = "<b>qty</b>";
        cell4.innerHTML = "<b>marketprice</b>";
        cell5.innerHTML = "<b>category</b>";
        cell6.innerHTML = "<b>desc</b>";
        
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].ID;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].NAME;
                tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].qty;
                tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].marketprice;
                tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].category;
                tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].desc;
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
    });
	}