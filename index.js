//Người chăn cừu
// [13,42,34,26,45,37,29,41,16,11]
// mỗi tháng lông cừu lên 20%
// khi lượng lông con cừu >= 50 thì cắt còn 10
// lượng lông cắt được cho vào kho
//hãy tính lượng tiền sau khi bán được lông cừu trong kho sau 2 năm
//biết 1 đơn vị lông bán 100k
function create() {
    sheep = document.getElementById("type").value;
    if (sheep >= 50 || sheep < 10) {
        alert(">=10 and < 50");
    }
    else {
        arraySheep.push(sheep);
        if (arraySheep.length == 10) {
            document.getElementById("type").style.display = "none"
            document.getElementById("button").style.display = "none"
            begin();
        }
    }
}
var sheep = null;
var arraySheep = [];
var storage = 0;
var plus = null;
var a = null;
function begin() {
    for (var b = 0; b < 24; b++) {
        for (var i = 0; i < arraySheep.length; i++) {
            a = arraySheep[i] * 1.2;
            if (a >= 50) {
                plus = a - 50;
                storage += plus;
                arraySheep[i] = 10;
            }
            else {
                arraySheep[i] = a;
            }
        }
    }
    var answer = null
    setTimeout(function () {
        answer = storage * 100000;
        console.log(answer);
    }, 100)
}