$(document).ready(function() {
 // Function to initialize select2 for a specific table
 function initializeSelect2ForTable(table) {
    $(table).find('.select2').select2({
        placeholder: "اختر خيارًا", // إضافة placeholder
        allowClear: true // السماح بإزالة الاختيار
    });
}
// Function to update row numbering
function updateRowNumbersee() {
    $('#my-table-Perished tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
//table-Perished
 // Add new row when plus button is clicked
 $('#my-table-Perished').on('click', '.add-Perished', function () {
    var newRowe = `
    <tr>
    <td></td>
        <td>  
                                  <select  class="form-select  form-control select2" >
                                    <option value="AK" selected>   	اختر اسم المنتج</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                
                                  </select>
                                </td>
                                <td>  
                                  <select  class="form-select  form-control select2" >
                                    <option value="AK" selected>   	CHOOSE THE SIZE</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                
                                  </select>
                                </td>
                                <td>
                                  <input type="number"class="form-control">
                                </td>
                               
        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-size" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table-Perished tbody').append(newRowe);

    // Reinitialize select2 for all dropdowns including the new one
    // Initialize select2 for the new row only
    initializeSelect2ForTable($('#my-table-Perished'));
 // Update row numbering
 updateRowNumbersee();
});

// Delete row when delete button is clicked
$('#my-table-Perished').on('click', '.delete-size', function () {
    $(this).closest('tr').remove();
});
// Function to initialize select2
// Initialize select2 for the table on page load
initializeSelect2ForTable($('#my-table-Perished'));

//

//my-table-Cost
 // Add new row when plus button is clicked
 $('#my-table-Cost').on('click', '.add-Cost', function () {
    var newRowe = `
    <tr>
    <td></td>
      <td>  
                                  <select  class="form-select  form-control select2" >
                                    <option value="AK" selected>   	اختر  التكلفة</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                
                                  </select>
                                </td>
                               
                                <td>
                                  <input type="number"class="form-control">
                                </td>
        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-size" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table-Cost tbody').append(newRowe);

    // Reinitialize select2 for all dropdowns including the new one
    // Initialize select2 for the new row only
    initializeSelect2ForTable($('#my-table-Cost'));
 // Update row numbering
 updateRowNumberse();
});
// Function to update row numbering
function updateRowNumberse() {
    $('#my-table-Cost tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
// Delete row when delete button is clicked
$('#my-table-Cost').on('click', '.delete-size', function () {
    $(this).closest('tr').remove();
});
// Function to initialize select2
// Initialize select2 for the table on page load
initializeSelect2ForTable($('#my-table-Cost'));


});
$(document).ready(function() {
  
  // تهيئة Select2 لجميع الـ selects داخل الجدول الذي يحتوي على الكلاس table-size
  function initializeSelect2ForTable(table) {
    $(table).find('.select2').select2({
      placeholder: "اختر خيارًا", // إضافة placeholder
      allowClear: true // السماح بإزالة الاختيار
    });
  }

  // استدعاء الدالة لتطبيق Select2 على الجدول الذي يحتوي على الكلاس table-size
  initializeSelect2ForTable('.table-size'); // استدعاء الدالة على العنصر المناسب

  // إضافة تغيير العرض للـ tabel-prodect عند الاختيار من الـ select2
  $('#productSelect').on('change', function() {
    var productTable = $(".tabel-prodect");

    // إذا تم اختيار منتج مختلف عن "اختر اسم المنتج"
    if (this.value !== "AK") {
      productTable.show();  // إظهار الجدول
    } else {
      productTable.hide();  // إخفاء الجدول
    }
  });

  // إخفاء الجدول في البداية (إذا كان مطلوبًا)
  $(".tabel-prodect").hide();
  
});

  
  