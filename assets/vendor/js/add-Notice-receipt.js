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
    $('#my-table-tow tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
//table-size
 // Add new row when plus button is clicked
 $('#my-table-tow').on('click', '.add-purchases', function () {
    var newRowe = `
    <tr>
    <td></td>
     <td>  
                                  <select  class="form-select select2 form-control"  data-allow-clear="true">
                                    <option value="AK" selected>   	CHOOSE THE SIZE</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                
                                  </select>
                                </td>
                                <td>
                                  <select class="select2 form-select" data-allow-clear="true">
                                    <option value="AK" selected>SIZE</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                </select>
                                </td>
                                <td>  <input type="text"class="form-control"></td>
                                <td><input type="number"class="form-control"></td>
                                <td> <input type="text"class="form-control"> </td>
                                <td class="p-1">  
                                  
                                  <select class="select2 form-select" data-allow-clear="true">
                                  <option value="AK" selected>SIZE</option>
                                  <option value="HI">1</option>
                                  <option value="CA">1</option>
                                  <option value="NV">1</option>
                                  <option value="OR">1</option>
                              </select></td>
                                <td> <input type="text"class="form-control"> </td>
                                <td> <input type="text"class="form-control"> </td>

        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-size" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table-tow tbody').append(newRowe);

    // Reinitialize select2 for all dropdowns including the new one
    // Initialize select2 for the new row only
    initializeSelect2ForTable($('#my-table-tow'));
 // Update row numbering
 updateRowNumbersee();
});

// Delete row when delete button is clicked
$('#my-table-tow').on('click', '.delete-size', function () {
    $(this).closest('tr').remove();
});
// Function to initialize select2
// Initialize select2 for the table on page load
initializeSelect2ForTable($('#my-table-tow'));
});
