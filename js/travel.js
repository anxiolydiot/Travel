$(document).ready(function() {
  $("#myModal").on("hide.bs.modal", function() {
    $("[data-target='#modalSearch']").fadeTo("slow", 0.25);

  })

$("#searchHotelModal").on("hide.bs.modal", function() {
    $("[data-target='#modalSearch']").fadeTo("slow", 0.25);
  
 })

$("#slider-range").on("hide.bs.modal", function() {
    $("[data-target='#modalSearch']").fadeTo("slow", 0.25);
  
 })

var options = {
    max_value: 5,
    step_size: 0.5,
}
$(".rating").rate(options);
    
 //$(".well-searchbox").addClass("picker");//
//$("#checkinPicker").addClass("picker");
// })

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

//check for blank required fields//

var checkInDate = $("#input_from").val().trim();
var checkOutDate = $("#input_to").val().trim();
var city = $("#input_city").val().trim();

$("#searchButton").click(function() {
  if (checkInDate === "" || checkOutDate === "" || city === ""){
       $("#blankRequired").slideup(500);
      return;
    };
  })
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
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  })
});



