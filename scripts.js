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


$('#answer').keydown(false);

$('#answer').maxLength=4;

$( document ).ready(function() {
    console.log( "ready!" );
});

// for (i = 0; i < $('#answer').val().length; i++) { 
// 		var loop = $('#answer').val();
// 		debugger
//     if(loop[i] === "."){
//     	$('#period').disabled = true;
// 		}
// }

function one(){

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
	// $('#equals').trigger('click');
}

function three(){
	
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
	// $('#equals').trigger('click');
}

function four(){
	
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
	// $('#equals').trigger('click');
}

function five(){
	
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
	// $('#equals').trigger('click');
}

function six(){
	
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
	// $('#equals').trigger('click');
}

function seven(){
	
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
	// $('#equals').trigger('click');
}

function eight(){
	
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
	// $('#equals').trigger('click');
}

function nine(){
	
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
	// $('#equals').trigger('click');
}

function zero(){
	
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
	// $('#equals').trigger('click');
}

function period(){
	
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
	$('#answer').val("");
}

function ac(){
	second = null;
	first = null;
	$('#answer').val("");
}

function add(){

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
		first = parseFloat(first) + parseFloat($('#answer').val());
	}
	else if(first != null && number != null) {
		first = parseFloat(number.val());
	}
	else{
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	}

	operator = $('#add').val();
	// $('#answer1').val("");
	$('#answer').val("");
	$('#add').attr('disabled','disabled');
}

function subtract(){

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
	// $('#answer1').val("");
	$('#answer').val("");
	$('#times').attr('disabled','disabled');
}

function division(){

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
	// $('#answer1').val("");
	$('#answer').val("");
	$('#division').attr('disabled','disabled');
}

function equals(){
	
	if(number != null && operator === '+') {
	var place1 = $('#answer').val();
	number = $('#answer').val(parseFloat(place1) + parseFloat(second));
	first = null;
	}
	else if(operator === '+') {
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
	var place = $('#answer').val();
	sessionStorage.setItem("memory", place);
	sessionStorage.getItem("memory");
	$('#answer').val("");
}

function mminus (){
	sessionStorage.removeItem("memory")
}



