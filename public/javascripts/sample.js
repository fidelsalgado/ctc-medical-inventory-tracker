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
        headHtml += "<td>" + headData[i] + "</td>";
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
