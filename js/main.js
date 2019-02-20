window.onscroll = function() {myFunction()};
var navbar = document.getElementById("header_fixed");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function sendAjaxForm() {
    jQuery.ajax({
        url:     'calc.php', 
        type:     "POST",
        dataType: "html", 
        data: jQuery("#calc_form").serialize(), 
        success: function(response) { 
        	alert('Well done!');
			//location.reload('calc.html');
			// getDataTable();
    	},
    	error: function(response) { 
    		$("#message_box" ).append( 'Ошибка' );
    	}
 	});
}

