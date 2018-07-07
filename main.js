function getfile(file,callback){
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("applicaation/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == '200'){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
})
var child2=document.querySelector(".childtwo");
function career(careerInfo){
  //console.log(careerInfo);
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="career Objective";
var careerHr=document.createElement("hr");
child2.appendChild(careerHr);
var ch=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);
}
function education(edu){
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="Educational Qualification";
  child2.appendChild(eduHeading);
  var eduqual=document.createElement("hr");
  child2.appendChild(eduqual);
  var eduTable=document.createElement("table");
  eduTable.border="1";
  var tr1="<tr><td>degree</td><td>institute</td><td>data</td></tr>";
  eduTable.innerHTML=tr1;
  child2.appendChild(eduTable)
}
