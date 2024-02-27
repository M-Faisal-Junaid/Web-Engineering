const myp1 = document.getElementById("p1")
alert(myp1.innerText);
myp1.style.color = "red";
myp1.innerText = "I am Faisal";
const myb1 = document.getElementById("b1");
myb1.style.color = "blue";
function sayhi(){
    alert(myp1.innerText="Hi")
}
myb1.onclick = sayhi;