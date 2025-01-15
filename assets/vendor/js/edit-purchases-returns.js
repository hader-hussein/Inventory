
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
  $('#my_table').on('click', '.btnaddsize', function () {
    const newRow = `
      <tr>
        <td>${$('#my_table tbody tr').length + 1}</td>
       
              <td class="px-1">
                                        <select  class="form-select select2 form-control">
                                          <option value="AK" selected> اختر
                                            الصنف</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>

                                        </select>
                                      </td>
                                      <td class="px-1" style="width: 20%;">
                                        <select class="select2 form-select" data-allow-clear="true">
                                          <option value="AK" selected>SIZE</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>
                                        </select>
                                      </td>
                                      <td class="px-1" style="width: 20%;">
                                        <select class="select2 form-select" data-allow-clear="true">
                                          <option value="AK" selected>اسم
                                            الرف</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>
                                        </select>
                                      </td>
                                      <td class="px-1" style="width: 10%;"> <input type="number" class="form-control"></td>
                                      <td class="px-1" style="width: 10%;"><input type="number" class="form-control"></td>
                                      <td class="px-1" style="width: 10%;"><input type="date" class="form-control"></td>

                                      <td class="px-1" style="width: 20%;"> <input type="text" class="form-control">
                                      </td>
                                      <td class="px-1"> <input type="text" class="form-control"> </td>

                                      <td class="px-1"> <input type="text" class="form-control"> </td>

        <td class="d-flex">
          <button type="button" class="button btn btn-danger btn-delete p-1">
            <i class="fa-solid fa-trash fs-4"></i>
          </button>
        </td>
      </tr>
    `;

    $('#my_table tbody').append(newRow);
 // حدث الحذف عند النقر على زر الحذف
 $('#my_table').on('click', '.btn-delete', function () {
    // حذف السطر الأب للزر
    $(this).closest('tr').remove();

    // تحديث الترقيم (التسلسل) بعد الحذف
    $('#my_table tbody tr').each(function (index) {
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

  // تهيئة Select2 لجميع العناصر التي لم يتم تهيئتها بعد عند تحميل الصفحة
// حدث إضافة سطر جديد باستخدام الزر
document.getElementById("addCostBtn").addEventListener("click", function () {
  const templateRow = document.querySelector(".template-row");

  if (!templateRow) {
    console.error("العنصر ذو الكلاس 'template-row' غير موجود.");
    return;
  }

  const newRow = templateRow.cloneNode(true);
  newRow.classList.remove("d-none", "template-row");

  // إعداد زر الحذف
  newRow.querySelector(".deleteRowBtn").addEventListener("click", function () {
    newRow.remove();
  });

  // إضافة الصف الجديد
  document.getElementById("additionalCostsContainer").appendChild(newRow);

 // تهيئة Select2 للعناصر الجديدة داخل الصف
 newRow.querySelectorAll('.select2').forEach(select => {
  initializeSelect2(select); // تهيئة Select2 للعنصر الجديد
});
});



});



