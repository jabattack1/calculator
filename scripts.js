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
var second = null

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
    var value = $('#one').val();
    var place = $('#answer').val();

     if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#one').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function two(){
    var value = $('#two').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#two').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function three(){
    var value = $('#three').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#three').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function four(){
    var value = $('#four').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#four').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function five(){
    var value = $('#five').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#five').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function six(){
    var value = $('#six').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#six').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function seven(){
    var value = $('#seven').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#seven').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function eight(){
    var value = $('#eight').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#eight').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function nine(){
    var value = $('#nine').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#nine').disabled = true;
	}
	else {$('#answer').val(value);}
	// $('#equals').trigger('click');
}

function zero(){
    var value = $('#zero').val();
    var place = $('#answer').val();

    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#zero').disabled = true;
	}
	else {$('#answer').val(value);}

	$('#equals').trigger('click');
}

function period(){
    var value = $('#period').val();
    var place = $('#answer').val();


    if(place && place.toString().length < 6) {
    $('#answer').val(place + value);
	}
	else if (place.toString().length > 5) {
		$('#period').disabled = true;
	}
	else {$('#answer').val(0 + value);
	}
}

function c(){
	$('#answer').val("");
}

function ac(){
	$('#answer').val("");
}

function add(){
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	operator = $('#add').val();
	// $('#answer1').val("");
	$('#answer').val("");
}

function subtract(){
	var place = $('#answer').val();
	sessionStorage.setItem("first", place);
	first = sessionStorage.getItem("first");
	operator = $('#subtract').val();
	// $('#answer1').val("");
	if(second === null) {
	$('#answer').val("");}
	else{var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) - parseFloat(second));
	}

}

function equals(){
	if(operator === '+') {
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) + parseFloat(second));
	}
	else if(operator === '-') {
	var place2 = $('#answer').val();
	sessionStorage.setItem("second", place2);
	second = sessionStorage.getItem("second");
	number = $('#answer').val(parseFloat(first) - parseFloat(second));
	}
}




