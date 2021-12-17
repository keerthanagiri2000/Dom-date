var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var btn=document.createElement('button');
btn.innerHTML="Diaplay data";
btn.className="btn btn-primary";
btn.setAttribute('type','button');
btn.addEventListener('click',displayData);
document.body.append(btn);



function displayData(){
    let input=document.getElementById("date").value;
    if(Date.parse(input)){
        var inputdate=new Date(input);
        var currentdate=new Date();
        
        console.log("Given input date is"+" "+inputdate);

        var millisec=currentdate.getTime()-inputdate.getTime();
        console.log(millisec);

        var sec=Math.floor(millisec/1000);
        console.log(sec);

        var min=Math.floor(sec/60);
        console.log(min);

        var hour=Math.floor(min/60);
        console.log(hour);

        var day=Math.floor(hour/24);
        console.log(day);

        var year=currentdate.getFullYear()-inputdate.getFullYear();
        console.log(year);

        var month=(year*12)+(currentdate.getMonth()-inputdate.getMonth());
        console.log(month);
        
        }
        else{
            console.log("give a proper valid date");

        }

        var div=document.createElement('div');
div.innerHTML=`Given input date is ${inputdate}<br>
Milli Seconds ${millisec}<br>
Seconds ${sec}<br>
Minute ${min}<br>
Hour ${hour}<br>
Day ${day}<br>
Year ${year}<br>
Month ${month}`;
               
document.body.append(div); 
}
