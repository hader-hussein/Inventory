
$(document).ready(function () {
  // Initialize Select2 inside modal
  $('#edit-modeil').on('shown.bs.modal', function () {
    $('.select2').select2({
      dropdownParent: $('#edit-modeil'), // Ensure dropdown stays within modal
      allowClear: true, // Enable clear functionality
      placeholder: "اختر عنصرًا", // Set a placeholder
    });
  });

  // Example: Reinitialize Select2 for dynamically added rows
  $('#my_table-product').on('click', '.add_another', function () {
    const newRow = `
      <tr>
        <td>${$('#my_table-product tbody tr').length + 1}</td>
       
        <td style="width: 20%">
                            <select class="form-select form-s select2" data-allow-clear="true">
                              <option value="AK">الاصناف</option>
                              <option value="HI">1</option>
                              <option value="CA">1</option>
                              <option value="NV">1</option>
                              <option value="OR">1</option>
                            </select>
                          </td>
                          
                          <td style="width: 20%">
                            <select  class="form-select form-s select2" data-allow-clear="true">
                              <option value="AK"> الحجم</option>
                              <option value="HI">1</option>
                              <option value="CA">1</option>
                              <option value="NV">1</option>
                              <option value="OR">1</option>
                            </select>      
                          
                          </td>
                         
                          <td><input type="text" class="form-control" /></td>
                          <td><input type="text" class="form-control" /></td>
                          <td><input type="text" class="form-control" /></td>
  
        <td class="d-flex">
          <button type="button" class="button btn btn-danger btn-delete p-1">
            <i class="fa-solid fa-trash fs-4"></i>
          </button>
        </td>
      </tr>
    `;

    $('#my_table-product tbody').append(newRow);
 // حدث الحذف عند النقر على زر الحذف
 $('#my_table-product').on('click', '.btn-delete', function () {
    // حذف السطر الأب للزر
    $(this).closest('tr').remove();

    // تحديث الترقيم (التسلسل) بعد الحذف
    $('#my_table-product tbody tr').each(function (index) {
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
});

