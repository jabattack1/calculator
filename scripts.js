console.log('cool');

// var answer2 = "<input  onfocus=\"this.blur()\" readonly=\"readonly\" type='number' step=\"any\" id=\'answer\' maxlength=\"6\" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input>"

// var answer = $('#answer').text()[0];


// if ($('#answer').text() != null) {
// 	console.log('yay');}

// if ($('#answer').text() === '15') {
// 	console.log('fifteen');}	


// equals
// $(document).ready(function(){
//     $('#TextBoxId').keypress(function(e){
//       if(e.keyCode==13)
//       $('#linkadd').click();
//     });
// });


var second = null;
var first = null;
number = null;
var operator = null;
var after_operator = 1;
var oppo = null;
var place = null;
var placeMinus = null;

var trick = "<input  onfocus='this.blur()' readonly='readonly' type='number' step='any' id='trick' maxlength='6' onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input>";
var e = "<p id='e'>E</p>";


$('#answer').keydown(false);

$('#answer').maxLength=6;

$( document ).ready(function() {
    $('#textarea-wrapper').append(trick);
	$('#trick').val(0);
});
if (isNaN() === true) {
	console.log('NaN');
	$('#textarea-wrapper').append(trick);
	$('#trick').val(0);
	$('#textarea-wrapper').append(e);
	}

// for (i = 0; i < $('#answer').val().length; i++) { 
// 		var loop = $('#answer').val();
// 		debugger
//     if(loop[i] === "."){
//     	$('#period').disabled = true;
// 		}
// }

function one(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		(console.log('yo'))
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#one').val();
    var place = $('#answer').val();


    if (place && place.toString().length < 6) {
    	$('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#one').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
	// $('#equals').trigger('click');
}

function two(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#two').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#two').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function three(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#three').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#three').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function four(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#four').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#four').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function five(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#five').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#five').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function six(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#six').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#six').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function seven(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#seven').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#seven').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function eight(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#eight').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#eight').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function nine(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#nine').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#nine').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function zero(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#zero').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#zero').disabled = true;
	}
	else {$('#answer').val(value);}
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
}

function period(){
	$("#trick").remove();
	$("#e").remove();
	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

    var value = $('#period').val();
    var place = $('#answer').val();


    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#period').disabled = true;
	}
	else {$('#answer').val(0 + value);
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
	}
}

function c(){
	second = null;
	first = null;
	$("#trick").remove();
	$("#e").remove();
	$('#answer').val("");

	if($('#trick').length == 0){
		console.log("trick");
	$('#textarea-wrapper').append(trick);
	$('#trick').val(0);
	}
	else{
		console.log("already");
		null;}
}

function ac(){
	second = null;
	first = null;
	$("#trick").remove();
	$("#e").remove();
	$('#answer').val("");

	if($('#trick').length == 0){
		console.log("trick");
	$('#textarea-wrapper').append(trick);
	$('#trick').val(0);
	}
	else{
		console.log("already");
		null;}
}

function add(){
	$('#textarea-wrapper').append(trick);
	$('#trick').val($('#answer').val());

	if(operator === $('#subtract').val()){
		first = parseFloat(first) - parseFloat($('#answer').val());
	} 
	else if(operator === $('#times').val()){
		first = parseFloat(first) * parseFloat($('#answer').val());
	}
	else if(operator === $('#division').val()){
		first = parseFloat(first) / parseFloat($('#answer').val());
	}  
	else if(first != null && number === null && operator === $('#add').val()) {
		console.log("is");
		first = parseFloat(first) + parseFloat($('#answer').val());
	}
	else if(first != null && number != null) {
		first = parseFloat(number.val());
	}
	else{
	console.log("store");

	var place = $('#answer').val();
	$('#answer').val();$('#answer').val();
		sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	}

	operator = $('#add').val();
	// $('#answer1').val("");
	$('#answer').val("");
	$('#add').attr('disabled','disabled');
}

function subtract(){
	$('#textarea-wrapper').append(trick);
	$('#trick').val($('#answer').val());

	if(operator === $('#add').val()){
		first = parseFloat(first) + parseFloat($('#answer').val());
	}
	else if(operator === $('#times').val()){
		first = parseFloat(first) * parseFloat($('#answer').val());
	}
	else if(operator === $('#division').val()){
		first = parseFloat(first) / parseFloat($('#answer').val());
	}  
	else if(first != null && number === null && operator === $('#subtract').val()) {
		console.log('second')
		first = parseFloat(first) - parseFloat($('#answer').val());
	}
	else if(first != null && number != null) {
		console.log('number')
		first = parseFloat(number.val());
	}
	else{
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	}

	operator = $('#subtract').val();
	// $('#answer1').val("");
	$('#answer').val("");
	$('#subtract').attr('disabled','disabled');
	// var place = $('#answer').val();
	// sessionStorage.setItem("first", place);
	// first = sessionStorage.getItem("first");
	// operator = $('#subtract').val();
	// if(second === null) {
	// $('#answer').val("");}
	// else{
	// var place2 = $('#answer').val();
	// sessionStorage.setItem("second", place2);
	// second = sessionStorage.getItem("second");
	// var number = $('#answer').val(parseFloat(first) - parseFloat(second));
	// }
}

function times(){
	$('#textarea-wrapper').append(trick);
	$('#trick').val($('#answer').val());
	
	if(operator === $('#add').val()){
		first = parseFloat(first) + parseFloat($('#answer').val());
	}
	else if(operator === $('#subtract').val()){
		first = parseFloat(first) - parseFloat($('#answer').val());
	}
	else if(operator === $('#division').val()){
		first = parseFloat(first) / parseFloat($('#answer').val());
	}  
	else if(first != null && number === null && operator === $('#times').val()) {
		console.log('second')
		first = parseFloat(first) * parseFloat($('#answer').val());
	}
	else if(first != null && number != null) {
		console.log('number')
		first = parseFloat(number.val());
	}
	else{
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	}

	operator = $('#times').val();

	$('#answer').val("");
	$('#times').attr('disabled','disabled');
}

function division(){
	$('#textarea-wrapper').append(trick);
	$('#trick').val($('#answer').val());
	
	if(operator === $('#add').val()){
		first = parseFloat(first) + parseFloat($('#answer').val());
	}
	else if(operator === $('#times').val()){
		first = parseFloat(first) * parseFloat($('#answer').val());
	}
	else if(operator === $('#subtract').val()){
		first = parseFloat(first) - parseFloat($('#answer').val());
	}  	
	else if(first != null && number === null && operator === $('#division').val()) {
		console.log('second')
		first = parseFloat(first) / parseFloat($('#answer').val());
	}
	else if(first != null && number != null) {
		console.log('number')
		first = parseFloat(number.val());
	}
	else{
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	}

	operator = $('#division').val();
	
	$('#answer').val("");
	$('#division').attr('disabled','disabled');
}

function equals(){
	
	if(number != null && operator === '+') {
	var place1 = $('#answer').val();
		console.log(place1);
		console.log("place1");
	number = $('#answer').val(parseFloat(place1) + parseFloat(second));
	first = null;
	}
	else if(operator === '+') {
		console.log("store2");
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) + parseFloat(second));
	var op = operator;
	sessionStorage.setItem("oper", op);
	oppo = sessionStorage.getItem("oper");
	first = null;
	operator = null;
	}
	
	if(number != null && operator === '-') {
	var place1 = $('#answer').val();
	number = $('#answer').val(parseFloat(place1) - parseFloat(second));
	first = null;
	}
	else if(operator === '-') {
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) - parseFloat(second));
	first = null;
	var op = operator;
	sessionStorage.setItem("oper", op);
	oppo = sessionStorage.getItem("oper");
	operator = null;
	}

	if(number != null && operator === '*') {
	var place1 = $('#answer').val();
	number = $('#answer').val(parseFloat(place1) * parseFloat(second));
	first = null;
	}
	else if(operator === '*') {
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) * parseFloat(second));
	first = null;
	operator = null;
	}

	if(number != null && operator === '/') {
	var place1 = $('#answer').val();
	number = $('#answer').val(parseFloat(place1) / parseFloat(second));
	first = null;
	}
	else if(operator === '/') {
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) / parseFloat(second));
	first = null;
	operator = null;
	}
}

function mplus (){


	if(place != null) {
		console.log("is");
		place = parseFloat(place) + parseFloat($('#answer').val());
		sessionStorage.setItem("memory", place);
		sessionStorage.getItem("memory");
		$('#answer').val(place);
		$('#add').removeAttr('disabled');
		$('#subtract').removeAttr('disabled');
		$('#times').removeAttr('disabled');
		$('#division').removeAttr('disabled');
	}
	else if($('#answer').val().length === 0 ){
		console.log("sohee");
		place = $('#answer').val(0);
		sessionStorage.setItem("memory", place);
		sessionStorage.getItem("memory");
		$('#answer').val(place);
		$('#add').removeAttr('disabled');
		$('#subtract').removeAttr('disabled');
		$('#times').removeAttr('disabled');
		$('#division').removeAttr('disabled');	
	}
	else{place = $('#answer').val();
		sessionStorage.setItem("memory", place);
		sessionStorage.getItem("memory");
		$('#answer').val(place);
		$('#add').removeAttr('disabled');
		$('#subtract').removeAttr('disabled');
		$('#times').removeAttr('disabled');
		$('#division').removeAttr('disabled');
	}
}

function mminus (){
		if(placeMinus != null) {
		console.log("is");
		placeMinus = parseFloat($('#answer').val()) - parseFloat(placeMinus);
		sessionStorage.setItem("memory", placeMinus);
		sessionStorage.getItem("memory");
		$('#answer').val(placeMinus);
		$('#add').removeAttr('disabled');
		$('#subtract').removeAttr('disabled');
		$('#times').removeAttr('disabled');
		$('#division').removeAttr('disabled');
		}

	else{placeMinus = $('#answer').val();
		sessionStorage.setItem("memory", placeMinus);
		sessionStorage.getItem("memory");
		$('#answer').val(placeMinus);
		$('#add').removeAttr('disabled');
		$('#subtract').removeAttr('disabled');
		$('#times').removeAttr('disabled');
		$('#division').removeAttr('disabled');
		}
}

function mc (){
	sessionStorage.clear();
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');

	place = null;
	placeMinus = null;
	second = null;
	first = null;
	$("#trick").remove();
	$("#e").remove();
	$('#answer').val("");

	if($('#trick').length == 0){
		console.log("trick");
	$('#textarea-wrapper').append(trick);
	$('#trick').val(0);
	}
	else{
		console.log("already");
		null;}
}

function mr (){
	console.log(sessionStorage.getItem("memory"));
	var value = $('#answer').val(sessionStorage.getItem("memory"));
	var value2 = parseFloat(value.val());
	var place = $('#answer').val();

	$("#trick").remove();
	$("#e").remove();

	if (number) {
		$('#answer').val("");
		$('#answer').val(value);
		number = null;
	}

  	if (place.toString().length > 5) {
		console.log("wtfff");
		$('#mr').disabled = true;
	}

	else {
		console.log("wtf");
		$('#answer').val(value2);
	}

	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');

}

function percentage (){

	if(operator === $('#add').val()){
		first = parseFloat(first) + parseFloat($('#answer').val());
		var number1 = first;
	} 
	else if(operator === $('#subtract').val()){
		first = parseFloat(first) - parseFloat($('#answer').val());
		var number1 = first;
	}
	else if(operator === $('#times').val()){
		first = parseFloat(first) * parseFloat($('#answer').val());
		var number1 = first;
	}
	else if(operator === $('#division').val()){
		first = parseFloat(first) / parseFloat($('#answer').val());
		var number1 = first;
	} 
	else {
		number1 = parseFloat($('#answer').val());
	} 
	
	var n = parseFloat(number1);
  	var v = n/Math.pow(10, 2);
	number = $('#answer').val(v);

	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
	operator = null;
}

function swoosh(){

	if(operator === $('#add').val()){
		first = parseFloat(first) + parseFloat($('#answer').val());
		var number1 = first;
	} 
	else if(operator === $('#subtract').val()){
		first = parseFloat(first) - parseFloat($('#answer').val());
		var number1 = first;
	}
	else if(operator === $('#times').val()){
		first = parseFloat(first) * parseFloat($('#answer').val());
		var number1 = first;
	}
	else if(operator === $('#division').val()){
		first = parseFloat(first) / parseFloat($('#answer').val());
		var number1 = first;
	} 
	else {
		var number1 = parseFloat($('#answer').val());
	} 
	// else if(first != null && number === null && operator === $('#add').val()) {
	// 	first = parseFloat(first) + parseFloat($('#answer').val());
	// }
	// else if(first != null && number != null) {
	// 	first = parseFloat(number.val());
	// }
	
	var n = parseFloat(number1);
	var v = Math.sqrt(n);
	

	if (isNaN(v) === true) {
	console.log('NaN');
	$('#textarea-wrapper').append(trick);
	$('#trick').val(0);
	$('#textarea-wrapper').append(e);
	}
	else {
	number = $('#answer').val(v);
	$('#add').removeAttr('disabled');
	$('#subtract').removeAttr('disabled');
	$('#times').removeAttr('disabled');
	$('#division').removeAttr('disabled');
	operator = null;
	}
}


