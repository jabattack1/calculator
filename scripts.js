console.log('cool');

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




$('#answer').maxLength=4;

function one(){
    var value = $('#one').val();
    var place = $('#answer').val();

     if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#one').disabled = true;
	}
	else {$('#answer').val(value);}
}

function two(){
    var value = $('#two').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#two').disabled = true;
	}
	else {$('#answer').val(value);}
}

function three(){
    var value = $('#three').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#three').disabled = true;
	}
	else {$('#answer').val(value);}
}

function four(){
    var value = $('#four').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#four').disabled = true;
	}
	else {$('#answer').val(value);}
}

function five(){
    var value = $('#five').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#five').disabled = true;
	}
	else {$('#answer').val(value);}
}

function six(){
    var value = $('#six').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#six').disabled = true;
	}
	else {$('#answer').val(value);}
}

function seven(){
    var value = $('#seven').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#seven').disabled = true;
	}
	else {$('#answer').val(value);}
}

function eight(){
    var value = $('#eight').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#eight').disabled = true;
	}
	else {$('#answer').val(value);}
}

function nine(){
    var value = $('#nine').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#nine').disabled = true;
	}
	else {$('#answer').val(value);}
}

function zero(){
    var value = $('#zero').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else if (place > 10000) {
		$('#zero').disabled = true;
	}
	else {$('#answer').val(value);}
}

