(function() {
  $(document).ready(function(){
    $.get("http://localhost:3000/table", function( data ) {
      console.log("DATA = " + data);
      var $tableHead = $("#main-table-head");
      var $tableBody = $("#main-table-body");

      var headData = data[0];
      var headHtml = "<tr>";
      for(var i = 0; i < headData.length; i++) {
        console.log(headData[i]);
        headHtml += "<th>" + headData[i] + "</th>";
      }
      headHtml += "</tr>";
      $tableHead.append(headHtml);

      var bodyHtml = "";
      for(var i = 1; i < data.length; i++) {
        var bodyData = data[i];
        bodyHtml += '<tr class="pure-table-odd">';
        for(var j = 0; j < bodyData.length; j++) {
          bodyHtml += '<td>' + bodyData[j] + '</td>';
        }
        bodyHtml += '</tr>';
      }
      $tableBody.append(bodyHtml);

      //console.log($tableHead);
      //console.log($tableBody);

    });
  });
  
})() 

function myFunction() {
    // Table filtering: http://www.w3schools.com/howto/howto_js_filter_table.asp    
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("main-table");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      var counter = 0;
      td = tr[i].getElementsByTagName("td")[0];
      // Loops through each cell in each row
      while(td != undefined){
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
        td = tr[i].getElementsByTagName("td")[counter++]; 
      }
    }
  }
