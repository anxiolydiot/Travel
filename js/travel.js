$(document).ready(function() {
  //revealing modal search box and search parameters//
  $("#myModal").on("hide.bs.modal", function() {
    $("[data-target='#modalSearch']").fadeTo("slow", 0.25);

  })

$('.alert').hide();
$("#resultsSection").hide();
$('#slider-range').show();



$("#showNYC").click(function() { 
 $("#resultsSection").show();
 $("#amsterdam").hide();
 $("#vegas").hide();


})

//$('.alert .close').on("click", function(y) {
//y.stopPropagation();
//y.preventDefault();
//$(this).parent().hide();
//})
  
//end revealing modal search box and search parameters//
//star rating//
var options = {
    max_value: 5,
    step_size: 0.5,
}
$(".rating").rate(options);
//end star rating//    
 

 //$(".well-searchbox").addClass("picker");//
//$("#checkinPicker").addClass("picker");
// })

//date picker//
var from_$input = $('#input_from').pickadate(),
    from_picker = from_$input.pickadate('picker')

var to_$input = $('#input_to').pickadate(),
    to_picker = to_$input.pickadate('picker')



// Check if there’s a “from” or “to” date to start with.
if ( from_picker.get('value') ) {
  to_picker.set('min', from_picker.get('select'))
}
if ( to_picker.get('value') ) {
  from_picker.set('max', to_picker.get('select'))
}

// When something is selected, update the “from” and “to” limits.
from_picker.on('set', function(event) {
  if ( event.select ) {
    to_picker.set('min', from_picker.get('select'))    
  }
  else if ( 'clear' in event ) {
    to_picker.set('min', false)
  }
})
to_picker.on('set', function(event) {
  if ( event.select ) {
    from_picker.set('max', to_picker.get('select'))
  }
  else if ( 'clear' in event ) {
    from_picker.set('max', false)
  }
})
//end date picker//

//check for blank date fields//

var checkInDate = $("#input_from").val().trim();
var checkOutDate = $("#input_to").val().trim();


//$("#searchButton").click(function() {
  //if (checkInDate === "" || checkOutDate === "" || city === ""){
       //$("#blankRequired").slidedown(500);
     // return;
   // };
 // })
 //price slider//
 
//price slider//
 $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    })
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  })
//price slider end//
//Modal Dropdown for Picking Cities//
$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
})

$("#btnSearch").click(function(){
  alert($('.btn-select').text()+", "+$('.btn-select2').text());
})
// End Modal Dropdown for Picking Cities//

//detect if no city is selcted and display message to inform the user, if this is the case//
$("#searchButton").click(function(event) {
  if ($("#requiredCity").find('option:selected').length < 1) {
      ($("#blankRequired")).show();
      
      return;
    }
  else window.location.href = "travel.html";

  })   
});
// end detect if no city is selcted and display message to inform the user, if this is the case//
