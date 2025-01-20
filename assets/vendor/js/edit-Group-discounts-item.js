
$(document).ready(function () {
  // Initialize Select2 inside modal
  $('#edit-modeil').on('shown.bs.modal', function () {
    $('.select2').select2({
      dropdownParent: $('#edit-modeil'), // Ensure dropdown stays within modal
      allowClear: true, // Enable clear functionality
      placeholder: "اختر عنصرًا", // Set a placeholder
    });
  });
 // Initialize Select2 inside modal
 $('#add-modeil').on('shown.bs.modal', function () {
  $('.select2').select2({
    dropdownParent: $('#add-modeil'), // Ensure dropdown stays within modal
    allowClear: true, // Enable clear functionality
    placeholder: "اختر عنصرًا", // Set a placeholder
  });
});
  // Example: Reinitialize Select2 for dynamically added rows
  $('#my-table-tow').on('click', '.btnaddsize', function () {
    const newRow = `
      <tr>
        <td>${$('#my-table-tow tbody tr').length + 1}</td>
       
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

                                    <td>  <input type="text"class="form-control"></td>
                                 
                                                                              
        <td class="d-flex">
          <button type="button" class="button btn btn-danger btn-delete p-1">
            <i class="fa-solid fa-trash fs-4"></i>
          </button>
        </td>
      </tr>
    `;

    $('#my-table-tow tbody').append(newRow);
 // حدث الحذف عند النقر على زر الحذف
 $('#my-table-tow').on('click', '.btn-delete', function () {
    // حذف السطر الأب للزر
    $(this).closest('tr').remove();

    // تحديث الترقيم (التسلسل) بعد الحذف
    $('#my-table-tow tbody tr').each(function (index) {
      $(this).find('td:first').text(index + 1);
    });
  })
    // Reinitialize Select2 for new elements
    $('.select2').select2({
    dropdownParent: $('#edit-modeil'),
    allowClear: true,
    placeholder: "اختر عنصرًا"
  });
  });
  //add
  // Example: Reinitialize Select2 for dynamically added rows
  $('#my-table-add').on('click', '.btnadd', function () {
    const newRow = `
      <tr>
        <td>${$('#my-table-add tbody tr').length + 1}</td>
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

                                    <td>  <input type="text"class="form-control"></td>
                                 
                                                   
        <td class="d-flex">
          <button type="button" class="button btn btn-danger btn-delete-add p-1">
            <i class="fa-solid fa-trash fs-4"></i>
          </button>
        </td>
      </tr>
    `;

    $('#my-table-add tbody').append(newRow);
 // حدث الحذف عند النقر على زر الحذف
 $('#my-table-add').on('click', '.btn-delete-add', function () {
    // حذف السطر الأب للزر
    $(this).closest('tr').remove();

    // تحديث الترقيم (التسلسل) بعد الحذف
    $('#my-table-add tbody tr').each(function (index) {
      $(this).find('td:first').text(index + 1);
    });
  })
    // Reinitialize Select2 for new elements
    $('.select2').select2({
    dropdownParent: $('#add-modeil'),
    allowClear: true,
    placeholder: "اختر عنصرًا"
  });
  });
});
