var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    makeHTML(this.responseText);
  }
};
xhttp.open("GET", "https://akaban01.github.io/hours/hours.json", true);
xhttp.send();

var year = window.location.href.split("?")[1];

function makeHTML(data){
  data = JSON.parse(data);
  data = data[year]["data"];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    var temp = "<tr><td>{date}</td><td>{hours}</td><td>{comments}</td></tr>";
    temp = temp.replace("{date}",element["Days"]);
    temp = temp.replace("{hours}",element["Hours"]);
    temp = temp.replace("{comments}",element["Comments"]);
    var month = new Date(element["Days"]).getMonth()+1;
    $("#"+month).append(temp);
    $("."+month).removeClass("d-none");
  }
  $(".year").text(year);
}