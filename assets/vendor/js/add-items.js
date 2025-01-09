$(document).ready(function() {
    initializeSelect2();
 // Add new row when plus button is clicked
 $('#my-table').on('click', '.add-row', function () {
    var newRow = `
    <tr>
     <td>  </td>
                                  <td style="width: 50%;"> 
                                        <select  class="select2 form-select" data-allow-clear="true">
                                          <option value="LETTER">1  </option>
                                          <option value="VIDEO">2 </option>
                                          <option value="PHOTO">3 </option>
                                          <option value="SI">4 </option>
                                          <option value="CERTIFICATE">5</option>
                                          <option value="OTHER">6</option>
                                        </select>
                                      </td>
                                      <td class="p-1"> 
                                      
                                          <select class="form-select select2" data-allow-clear="true">
                                            <option value="AK"> SIZE</option>
                                            <option value="HI">1</option>
                                            <option value="CA">1</option>
                                            <option value="NV">1</option>
                                            <option value="OR">1</option>
                                        
                                          </select>
                                      
                                      
                                      </td>
                                      <td>
                                        <input type="text"class="form-control">
                                      </td>
        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-row" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table tbody').append(newRow);

    // Reinitialize select2 for all dropdowns including the new one
    initializeSelect2();
 // Update row numbering
 updateRowNumbers();
});
// Function to update row numbering
function updateRowNumbers() {
    $('#my-table tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
// Delete row when delete button is clicked
$('#my-table').on('click', '.delete-row', function () {
    $(this).closest('tr').remove();
});
//table-tow
 // Add new row when plus button is clicked
 $('#my-table-item').on('click', '.addField', function () {
    var newRow = `
    <tr>
     <td>  </td>
                                  <td style="width: 50%;"> 
                                        <select  class="select2 form-select" data-allow-clear="true">
                                          <option value="LETTER">1  </option>
                                          <option value="VIDEO">2 </option>
                                          <option value="PHOTO">3 </option>
                                          <option value="SI">4 </option>
                                          <option value="CERTIFICATE">5</option>
                                          <option value="OTHER">6</option>
                                        </select>
                                      </td>
                                      <td class="p-1"> 
                                      
                                          <select class="form-select select2" data-allow-clear="true">
                                            <option value="AK"> SIZE</option>
                                            <option value="HI">1</option>
                                            <option value="CA">1</option>
                                            <option value="NV">1</option>
                                            <option value="OR">1</option>
                                        
                                          </select>
                                      
                                      
                                      </td>
                                      <td>
                                        <input type="text"class="form-control">
                                      </td>
        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-Field" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table-item tbody').append(newRow);

    // Reinitialize select2 for all dropdowns including the new one
    initializeSelect2();
 // Update row numbering
 updateRowNumberse();
});
// Function to update row numbering
function updateRowNumberse() {
    $('#my-table-item tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
// Delete row when delete button is clicked
$('#my-table-item').on('click', '.delete-Field', function () {
    $(this).closest('tr').remove();
});

//table-size
 // Add new row when plus button is clicked
 $('#my-table-tow').on('click', '.btnaddsize', function () {
    var newRowe = `
    <tr>
     <td> </td>
                                <td> 
                                  <input type="text"class="form-control">
                                
                                </td>
                                <td>  
                                  <select  class="form-select form-control select2"  data-allow-clear="true">
                                    <option value="AK" selected>CHOOSE THE SIZE</option>
                                    <option value="HI">1</option>
                                    <option value="CA">1</option>
                                    <option value="NV">1</option>
                                    <option value="OR">1</option>
                                
                                  </select>
                                </td>
                                <td>
                                  <input type="number"class="form-control">
                                </td>
                                <td>  <input type="text"class="form-control"></td>
                                <td><input type="number"class="form-control"></td>
                                <td> <input type="text"class="form-control"> </td>
                                <td><input type="text"class="form-control"></td>
                                <td> <input type="text"class="form-control"> </td>
                                <td><input type="text"class="form-control"></td>
                                <td class="text-center">  
                                  <input name="collap-type-${Date.now()}" class="form-check-input" type="radio">
                                </td>
                                <td class="text-center">
                                  <input name="collap-type-${Date.now()}" class="form-check-input" type="radio">
                                </td>
        <td class="d-flex justify-content-center">
            <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-size" href="javascript:void(0);" title="حذف">
                <i class="fa-solid fa-trash fs-5"></i>
            </a>
        </td>
    </tr>`;

    // Append the new row
    $('#my-table-tow tbody').append(newRowe);

    // Reinitialize select2 for all dropdowns including the new one
    initializeSelect2();
 // Update row numbering
 updateRowNumbersee();
});
// Function to update row numbering
function updateRowNumbersee() {
    $('#my-table-tow tr').each(function (index, row) {
        $(row).find('td:first').text(index + 0); // الترقيم يبدأ من 1
    });
}
// Delete row when delete button is clicked
$('#my-table-tow').on('click', '.delete-size', function () {
    $(this).closest('tr').remove();
});
// Function to initialize select2
function initializeSelect2() {
    $('.select2').select2({
        placeholder: "اختر خيارًا", // إضافة placeholder
        allowClear: true // السماح بإزالة الاختيار
    });
}
});
