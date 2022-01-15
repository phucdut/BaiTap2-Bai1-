let inputR;
let inputD;
const PI = 3.14;
inputR = prompt("Nhập R");
inputD = prompt("Nhập D");
let R = parseInt(inputR);
let D = parseInt(inputD);
let C1 = 2 * PI * R;
let C2 = D * PI;

let S = PI* R * R;
alert("Chu vi hình tròn 01 " + C1);
document.write("Chu vi hình tròn 01 " + C1 + "    ");
alert("Chu vi hình tròn 02 " + C2);
document.write("Chu vi hình tròn 02 " + C2 + "    ");

alert("Diện tích hình tròn " + S);
document.write("Diện tích hình tròn " + S + "    ");