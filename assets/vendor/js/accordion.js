

$('.accordion-button').on('keydown',function (e) {
 
 
    $('.accordion-collapse').collapse("toggle")
   
    
  })

/** */
// 
/**** */
function optionCheck() {
   var i, len, optionVal, helpDiv,
       selectOptions = document.getElementById("select-Lawyer-type");

   // loop through the options in case there
   // are multiple selected values
   for (i = 0, len = selectOptions.options.length; i < len; i++) {

       // get the selected option value
       optionVal = selectOptions.options[i].value;

       // find the corresponding help div
       helpDiv = document.getElementById("help" + optionVal);

       // move on if we didn't find one
       if (!helpDiv) { continue; }

       // set CSS classes to show/hide help div
       if (selectOptions.options[i].selected) {
           helpDiv.className = "helpText helpTextShow";
       } else {
           helpDiv.className = "helpText";
       }
   }
}
/************************ */



function readURL(input, previewElement) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(previewElement).css('background-image', 'url(' + e.target.result + ')');
      $(previewElement).hide();
      $(previewElement).fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// التأكد من تطبيق الحدث لجميع مدخلات الصور
$(document).on('change', '.imageUpload', function () {
  var previewElement = $(this).closest('.img-porfoil').find('.imagePreview');
  readURL(this, previewElement);
});



  /////////////////
  function show1(){
    document.getElementById('div1').style.display ='none';
    }
    function show2(){
    document.getElementById('div1').style.display = 'block';
    }
   
  

// Function to add a new row

// Reinitialize select2 for the new fields with a small delay


