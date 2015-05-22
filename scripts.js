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
	else {$('#answer').val(value);}
}

function two(){
    var value = $('#two').val();
    var place = $('#answer').val();

    if(place && place < 100000) {
    $('#answer').val(place + value);
	}
	else {$('#answer').val(value);}
}