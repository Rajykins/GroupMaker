//Generate
$('.btn-group').on('click', function(e) {
	e.preventDefault();

  if ($('.numgroups').val() > 0) {

	var namespergroup = ($('.pergroup').val()),
		allnames = $('.names').val().split('\n'),
		allnameslen = allnames.length;

	var numgroups = Math.ceil(allnameslen / namespergroup);
	
  if($('.numgroups').val()){
  numgroups = ($('.numgroups').val());
  namespergroup = allnameslen / numgroups;
	}

	$('.groups').empty();

	for (i = 0; i < numgroups; i++) {
		$('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
	}

	$('.group').each(function() {
		for (j = 0; j < namespergroup; j++) {
			var randname = Math.floor(Math.random() * allnames.length);
			if(allnames[randname]){
				$(this).append('<p>' + allnames[randname] + '</p>');
			}
			allnames.splice(randname, 1);
			console.log(allnames);
		}
	});
  }


if ($('.pergroup').val() > 0) {
var namespergroup = parseInt($('.pergroup').val()),
		allnames = $('.names').val().split('\n'),
		allnameslen = allnames.length;

	var numgroups = Math.ceil(allnameslen / namespergroup);
	

	$('.groups').empty();

	for (i = 0; i < numgroups; i++) {
		$('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
	}

	$('.group').each(function() {
		for (j = 0; j < namespergroup; j++) {
			var randname = Math.floor(Math.random() * allnames.length);
			if(allnames[randname]){
				$(this).append('<p>' + allnames[randname] + '</p>');
			}
			allnames.splice(randname, 1);
			console.log(allnames);
		}
	});
}
});



$('.toggle-wrap a').on('click', function(e){
	e.preventDefault();
	$('.wrap').toggleClass('alt');
  output.innerHTML = 0;
  output1.innerHTML = 0;
	$('.pergroup-wrap, .numgroups-wrap').find('input').val('0');

});






//Students per Group
var slider = document.getElementById("Students");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//Number of Groups
var slider1 = document.getElementById("Groups");
var output1 = document.getElementById("demo1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;

}


//APEND LIST


$('.plus').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
});



var input_textarea = document.querySelector('.names');

$('.append').on('click', function(e) {
  if($('.plus').val()) {
    $('#students').append('\n');
    $('#students').append($('#plus').val());
    document.getElementById("plus").value = '';
    updateOutput();

    var text = $(".names").val();   
    var lines = text.split("\n");
    var count = lines.length;
    console.log(count);
    var max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;
  }
});

	input_textarea.textContent = localStorage.getItem('students');


function updateOutput() {
	localStorage.setItem('students', input_textarea.textContent);
}


	var text = $(".names").val();   
    var lines = text.split("\n");
    var count = lines.length;
    console.log(count);
    var max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;