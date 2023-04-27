
// ma trận toàn cục điều khiển mọi hoạt động của game
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9,],
];

// các biến toàn\ cục dùng để tính giờ
var secs = 0;
var currentSeconds = 0;
var currentMinutes = 0;
var timer;

$(document).ready(function () {
  $("#lever").click(function () { 
    $("#levers .list-levers").toggleClass("show");
  });
});

// gọi sự kiện bắt đầu game khi ấn nút play
$("li #play").each(function(){
  $(this).click(function () { 
    let lv = $(this).attr("class");
    initialize(lv);
    $(this).addClass("active");
    beginTime();
    $("#alert_puzzle").text("");
  });
});

// Khi click vào 1 sô thì gọi đến hàm move để di chuyển
$("#puzzle .cell-puzzle").bind("click",function() {
  if(secs > 0){
    var obj = $(this);
    move(obj);
  }
});

// hàm init game, gọi 1 dãy số từ 1 đến 9 bất kì, sắp xếp các element theo dãy số đó để bắt đầu game
function initialize(func){
  if(func == "lv1"){
    reset();
    var arrRandomNumber = lvMot();
  }
  if(func == "lv25"){
    reset();
    var arrRandomNumber = lv25();
  }
  if(func == "lv26"){
    reset();
    var arrRandomNumber = lv26();
  }
  if(func == "lv27"){
    reset();
    var arrRandomNumber = lv27();
  }
  if(func == "lv28"){
    reset();
    var arrRandomNumber = lv28();
  }
  if(func == "lv29"){
    reset();
    var arrRandomNumber = lv29();
  }
  if(func == "lv31"){
    reset();
    var arrRandomNumber = lv31();
  }
  if(func == "lv37"){
    reset();
    var arrRandomNumber = lv37();
  }
  if(func == "lvMax"){
    reset();
    var arrRandomNumber = lvMax();
  }
  var count = 0;

  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      var number = arrRandomNumber[count];
      matrix[i][j] = number;
      $("#puzzle .cell-puzzle[number=" + number + "]").css("top", i * 60 + "px");
      $("#puzzle .cell-puzzle[number=" + number + "]").css("left", j * 60 + "px");
      count++;
    }
  } 
}
function reset() {
  $("#container").find("*").removeClass("red active bg-green top left right bottom thang-right thang-top thang-left thang-bottom");
}
 function lvMot(){
  alert("li vờ 1");
    goUpLeft(5);
    topLeft(4);
    bottomRight(8);
    $("#8").addClass("red");
    bottomLeftGreen(7);
    ngang(6);
    topRightGreen(3);
    goUpTop(2);
    topLeft(1);
    var arr = [5,4,8,7,6,3,2,1,0];
    return arr;
}
function lv25() {
  alert("li vờ 25");
  goUpBottom(1);
  bottomRight(2);
    $("#5").addClass("red");
    bottomRightGreen(3);
    bottomLeft(7);
    doc(8);
    topRightGreen(4);
    goUpTop(5);
    topRight(6);
    var arr = [5,4,8,7,6,3,2,1,0];
    return arr;
}

function lv26() {
  alert("li vờ 26");

  goUpBottom(1);
  bottomRight(2);
  topLeft(3);
  topRight(6);
  $("#6").addClass("red");
    ngang(7);
    doc(8);
    bottomLeftGreen(4);
    topRightGreen(5);
    var arr = [5,4,8,7,6,3,2,1,0];
    return arr;
}

function lv27() {
  alert("li vờ 27");
  topRight(1);
  bottomLeft(2);
  goUpLeft(3);
  goUpRight(6);
  $("#6").addClass("red");
    topLeft(7);
    bottomLeftGreen(8);
    topRightGreen(4);
    doc(5);
    var arr = [5,4,0,8,7,6,3,2,1];
    return arr;
}
function lv28() {
  alert("li vờ 28");
  doc(1);
  bottomLeft(2);
  topRight(3);
  $("#3").addClass("red");
  goUpRight(6);
  bottomLeftGreen(7);
  topRight(8);
  goUpLeft(4);
  topLeftGreen(5);
  var arr = [5,4,8,7,6,3,2,1,0];
  return arr;
}
function lv29() {
  alert("li vờ 29");
  $("#8").addClass("red");
  goUpLeft(8);
  ngang(7);
  bottomLeftGreen(6);
  bottomRight(5);
  goUpLeft(4);
  topLeftGreen(3);
  topRight(2);
  bottomLeft(1);
    var arr = [0,1,2,3,4,5,6,7,8];
    return arr;
}
function lv31() {
  alert("li vờ 31");
  $("#7").addClass("red");
  bottomRight(8);
  topLeft(7);
  goUpRight(6);
  topRight(5);
  goUpLeft(4);
  ngang(3);
  topRightGreen(2);
  bottomRightGreen(1);
    var arr = [0,1,2,3,4,5,6,7,8];
    return arr;
}
function lv37() {
  alert("li vờ 31");
  $("#1").addClass("red");
  bottomRightGreen(8);
  goUpLeft(7);
  bottomLeftGreen(6);
  goUpBottom(5);
  topRight(4);
  doc(3);
  topRight(2);
  topLeft(1);
    var arr = [1,2,3,0,4,5,6,7,8];
    return arr;
}
function topLeftGreen(num) {
  $("#" + num + " .can2").addClass("left");
  $("#" + num + " .can1").addClass("top");
  $("#" + num).addClass("bg-green");
}
function topRightGreen(num) { 
  $("#" + num + " .can1").addClass("right");
  $("#" + num + " .can2").addClass("top");
  $("#" + num).addClass("bg-green");
}
function bottomLeftGreen(num) {
    $("#" + num + " .can1").addClass("left");
    $("#" + num + " .can2").addClass("bottom");
    $("#" + num).addClass("bg-green");
}
function bottomRightGreen(num) {
  
  $("#" + num + " .can1").addClass("right");
  $("#" + num + " .can2").addClass("bottom");
  $("#" + num).addClass("bg-green");
}

function topLeft(num) {
  $("#" + num + " .can2").addClass("left");
  $("#" + num + " .can1").addClass("top");
}
function topRight(num) { 
  
  $("#" + num + " .can1").addClass("right");
  $("#" + num+ " .can2").addClass("top");
}
function bottomLeft(num) {
  
    $("#" + num + " .can1").addClass("left");
    $("#" + num + " .can2").addClass("bottom");

}
function bottomRight(num) {
  
  $("#" + num + " .can1").addClass("right");
  $("#" + num + " .can2").addClass("bottom");
}

function goUpTop(num) {
  $("#" + num + " .can1").addClass("left");
  $("#" + num + " .can2").addClass("right");
  $("#"+ num + " #thang").addClass("thang-top");
}
function goUpBottom(num) {
  $("#" + num + " .can1").addClass("left");
  $("#" + num + " .can2").addClass("right");
  $("#" + num + " #thang").addClass("thang-bottom");
}
function goUpLeft(num) {
  $("#" + num + " .can1").addClass("top");
  $("#" + num + " .can2").addClass("bottom");
  $("#" + num + " #thang").addClass("thang-left");
}
function goUpRight(num) {
  $("#" + num + " .can1").addClass("top");
  $("#" + num + " .can2").addClass("bottom");
  $("#" + num + " #thang").addClass("thang-right");
}
function ngang(num) {
    $("#" + num + " .can1").addClass("top");
    $("#" + num + " .can2").addClass("bottom");
    $("#" + num).addClass("bg-green");
}
function doc(num) {
    $("#" + num + " .can1").addClass("left");
    $("#" + num + " .can2").addClass("right");
    $("#" + num).addClass("bg-green");
}

// hàm tạo dãy số bất kì từ 1 đến 8
function shuffleMatrix(){
  var arr = [] ;
  while(arr.length < 8){
    var r = Math.floor(Math.random() * 8) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

// hàm bắt đầu đếm giờ
function beginTime() {
  secs = 0;
  currentSeconds = 0;
  currentMinutes = 0;
  clearTimeout(timer);
  intervalTime();
}

// hàm đếm giờ
function intervalTime() {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;

  if(currentMinutes <= 9) {
    currentMinutes = "0" + currentMinutes;
  }

  if(currentSeconds <= 9) {
    currentSeconds = "0" + currentSeconds;
  }

  secs++;
  $("#board-time").text(currentMinutes + ":" + currentSeconds);
  timer = setTimeout('intervalTime()', 1000);
  console.log(secs);
}

// hàm di chuyển các ô.
function move(obj) {
    var numberCell = parseFloat(obj.attr("number"));
    var win = false;
        $(document).ready(function() {
            $("#puzzle .cell-puzzle").dblclick(function() {
              // Xóa class "red" của tất cả phần tử HTML
                $("#puzzle .cell-puzzle").removeClass("red");
              
              // Thêm class "red" vào phần tử HTML được kích đúp chuột
                $(this).addClass("red");
            });
          });
            $(document).ready(function() {
                $(".winn").dblclick(function() {
              // Xóa class "red" của tất cả phần tử HTML
                    $("#puzzle .cell-puzzle").removeClass("red");
              
              // Thêm class "red" vào phần tử HTML được kích đúp chuột
                    $(this).addClass("red");
                });
            });
    
    for(var i = 0 ; i < 3 ; i++) {
        for(var j = 0 ; j < 3 ; j++) {
            if(matrix[i][j] == numberCell) {
                if (!$("#puzzle .cell-puzzle[number=" + numberCell + "]").hasClass("red")) {
            // alert("This element has class red!");
                    if(j > 0 && matrix[i][j-1] == 0) {
                        $("#puzzle .cell-puzzle[number=0]").css("left", j * 60 + "px");
                        obj.animate({
                            'left': (j - 1) * 60 + 'px'
                        }, 300);

                        matrix[i][j - 1] = numberCell;
                        matrix[i][j] = 0;

                        } else if(j < 3 && matrix[i][j + 1] == 0) {
                            $("#puzzle .cell-puzzle[number=0]").css("left",j * 60 + "px");
                            obj.animate({
                                'left': (j + 1) * 60 + 'px'
                        }, 300);

                        matrix[i][j + 1] = numberCell;
                        matrix[i][j] = 0;
          
        } else if(i > 0 && matrix[i - 1][j] == 0) {
            $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
          obj.animate({
            'top': (i - 1) * 60 + 'px'
        },300);
        
        matrix[i-1][j] = numberCell;
        matrix[i][j] = 0;
        
    } else if(i<3 && matrix[i+1][j]==0) {
          $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
          obj.animate({
              'top': (i + 1) * 60 + 'px'
            },300);

          matrix[i + 1][j] = numberCell;
          matrix[i][j]=0;
        }
        if ($("#winn").hasClass("red")) {
            win = checkWin();
        }
        if (win){
            break;
        }
        
        return; 
        }
    }
}
}
}

// checkWin()
// hàm kiểm tra và báo chiến thắng
function checkWin(){
  var winner =false;
//   var winString = "1,2,3,4,5,6,7,8,0";
//   var loseString = "1,2,3,4,5,6,8,7,0";

//   var matrixStr = matrix.toString();
// $(document).ready(function() {
    // $("button").click(function() {
      // Kiểm tra xem phần tử HTML không có class "red" hay không
        if ($("#winn").hasClass("red")) {
            winner = 1;
        }
    // });
//   });
  if(winner == 1) {
    clearTimeout(timer);
    $("#alert_puzzle").text("Bạn đã chiến thắng. Kỷ lục của bạn là " + $("#board-time").text());

//   } else if (loseString == matrixStr) {
//     $("#alert_puzzle").text('Bạn không có hy vọng để chiến thắng. Ấn nút "click to play" để chơi game mới');
  }
}
function lvMax(){
    doc(5)
    
    topLeft(4);
    
    topRightGreen(8);
    
    goUpLeft(7);
    $("#7").addClass("red");

    bottomRight(6);
    
    goUpRight(3);

    bottomLeft(2);

    bottomLeftGreen(1);

    var arr = [5,4,8,7,6,3,2,1,0];
    return arr;
}