const timeDisplay = $('#timeDisplay')
let now = moment().format("dddd MMM Mo YYYY hh:mm a");
let nowHours = Number(moment().format("H"));

timeDisplay.text(now);

$(".saveButton").on("click", function(){
    let savedEvent = $(this).prev().val();
    localStorage.setItem($(this).val(), savedEvent);
    this.blur();
});

$(".saveButton").on("click", function(){
    let savedEvent = $(this).prev().val();
    localStorage.setItem($(this).val(), savedEvent);
    this.blur();
});

changeClass(7, "#hourSevenAm");
changeClass(8, "#hourEigAm");
changeClass(9, "#hourNineAm");
changeClass(10, "#hourTenAm");
changeClass(11, "#hourElevenAm");
changeClass(12, "#hourTwelvePm");
changeClass(13, "#hourOnePm");
changeClass(14, "#hourTwoPm");
changeClass(15, "#hourThreePm");
changeClass(16, "#hourFourPm");
changeClass(17, "#hourFivePm");

$("#hourSevenAm").val(localStorage.getItem("7"));
$("#hourEigAm").val(localStorage.getItem("8"));
$("#hourNineAm").val(localStorage.getItem("9"));
$("#hourTenAm").val(localStorage.getItem("10"));
$("#hourElevenAm").val(localStorage.getItem("11"));
$("#hourTwelvePm").val(localStorage.getItem("12"));
$("#hourOnePm").val(localStorage.getItem("13"));
$("#hourTwoPm").val(localStorage.getItem("14"));
$("#hourThreePm").val(localStorage.getItem("15"));
$("#hourFourPm").val(localStorage.getItem("16"));
$("#hourFivePm").val(localStorage.getItem("17"));