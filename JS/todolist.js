
function todoDisplay()
{

//Creating an XHR Object
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() 
{
 if (this.readyState == 4 && this.status == 200) 
    {
      document.getElementById("head").innerHTML="List of Tasks";
      var response=JSON.parse(this.responseText);
      var output="<table id=myTable >"+
                        "<tr>"+
                            "<th>"+"User ID"+"</th>"+
                            "<th>"+"ID"+"</th>"+
                            "<th>"+"Task"+"</th>"+
                            "<th>"+"Status of Completion"+"</th>"+

                        "</tr>";
      for (var j=0;j<response.length;j++)
      {
           
        output=output + "<tr>"+
               "<td>"+response[j].userId+"</td>"+
               "<td>"+response[j].id+"</td>"+
               "<td>"+response[j].title+"</td>";
        if(response[j].completed==true)
               {
               output=output +
                      "<td>"+"<input type=checkbox checked disabled=true>" +"</td>"+
                      "</tr>";
                
               }
        else
               {
               output=output +
                      "<td>"+"<input type= checkbox>" +"</td>"+
                      "</tr>";
               }    
      }
      output=output+"</table>";
      document.getElementById("demo").innerHTML=output;
    }

};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

countTick();
}


//counting number of ticked boxes
function countTick()
{

var count=0;
var noRows=document.getElementById("myTable").rows.length;
for(var i = 1; i < noRows ; i++)
            {
                var x = document.getElementById("myTable").rows[i].cells[2].firstChild.checked;
                if(x==true)
                {
                      count=count+1;

                }
            }
counting(count);
}




//Display alert.
function counting(count)
{
if(count==5)
  {
    // window.alert("Congratulations! Successfully completed 5 tasks.");
    document.getElementById("head").innerHTML="List Tasks";
  }


}








