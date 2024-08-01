

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
$('.tabel-table').on('keydown','tr td',function (e) {
    var keyCode = e.keyCode;
    if (keyCode !== 9) return;

    var $this = $(this),
        $lastTr = $('tr:last', $('.tabel-table')),
        $lastTd = $('td:last', $lastTr);

    
    if (($(e.target).closest('td')).is($lastTd)) {
     

        $lastTr.after($lastTr.clone());
      
    }
    
});

// $(document).ready(function() {
//     $('.select2').select2();
    
//   });

//   function addField(n) {
//     var tr = n.parentNode.parentNode.cloneNode(true);
    
//     var rows = document.querySelectorAll('#tbl tr');
//     var newIndex = rows.length + 1;
//     tr.querySelector('td').textContent = newIndex; 
    
  
//    var addButton = tr.querySelector("button.btn-primary");
//    addButton.parentNode.removeChild(addButton);
   
   

   
//    document.getElementById('tbl').appendChild(tr);

// }

  
function addFieldt(n,index)
{
    var tr = n.parentNode.parentNode.cloneNode(true);
    document.getElementById('tb2').appendChild(tr);
    var removeButton = tr.getElementsByTagName("button")[1];
    removeButton.parentNode.removeChild(removeButton);
   

  
  
}

function addFieldtow(n,index)
{
        var tr = n.parentNode.parentNode.cloneNode(true);
        document.getElementById('tb3').appendChild(tr);
        var removeButton = tr.getElementsByTagName("button")[1];
        removeButton.parentNode.removeChild(removeButton);
    
 
  
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });
  /////////////////
  function show1(){
    document.getElementById('div1').style.display ='none';
    }
    function show2(){
    document.getElementById('div1').style.display = 'block';
    }
    $(document).ready(function(){
        $("#my_table").on('click','.btnDelete',function(){
            $(this).closest('tr').remove();
         });
         $("#my-table-tow").on('click','.btnDelete-to',function(){
            $(this).closest('tr').remove();
         });
         $("#my_table-tow").on('click','.btnDelete-t',function(){
            $(this).closest('tr').remove();
         });
     });
     $(document).ready(function() {
        // تهيئة select2 للصف الأول
        // $('#tbl tr:first select').select2({
        //     placeholder: 'اختر عنصرًا',
        //     allowClear: false
        // });

        // دالة لإضافة صف جديد إلى الجدول
        function addField() {
            // نسخ الصف الأول
            var tr = $('#tbl tr:first').clone();

            // تحديث رقم التسلسل في الصف المستنسخ
            var newIndex = $('#tbl tr').length + 1;
            tr.find('td:first').text(newIndex);

            // إعادة تعيين المدخلات والقيم
            tr.find('input').val('');
            tr.find('select').val(null).trigger('change');

            // إعادة تطبيق select2 على العنصر الجديد
            tr.find('select').select2({
                placeholder: 'اختر عنصرًا',
                allowClear: false
            });

            // إزالة زر الإضافة من الصف المستنسخ
            tr.find('.addRowButton').remove();

            // إضافة الصف الجديد إلى الجدول
            $('#tbl').append(tr);
        }

        // دالة لحذف الصف
        function removeField(button) {
            button.closest('tr').remove();
            updateSequenceNumbers();
        }

        // دالة لتحديث أرقام التسلسل
        function updateSequenceNumbers() {
            $('#tbl tr').each(function(index, tr) {
                $(tr).find('td:first').text(index + 1);
            });
        }

        // مستمع للنقر على زر الإضافة
        $('#tbl').on('click', '.addRowButton', function() {
            addField();
        });

        // مستمع للنقر على زر الحذف
        $('#tbl').on('click', '.removeRowButton', function() {
            removeField($(this));
        });
    });
    