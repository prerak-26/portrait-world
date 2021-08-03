const urlstring = window.location.href
const parameter = urlstring.split('=')[1]
const imgsrc = parameter.split("&")[0]
const year = parameter.split("&")[1]
document.getElementById('big-img').src="../assets/img/"+imgsrc
document.getElementById('year').innerHTML=year