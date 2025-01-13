$(document).ready(function () {
  // Function to initialize select2 for a specific table
  function initializeSelect2ForTable(table) {
      $(table).find('.select2').select2({
          placeholder: "اختر خيارًا", // إضافة placeholder
          allowClear: true // السماح بإزالة الاختيار
      });
  }

  // Function to update row numbering
  function updateRowNumbers() {
      $('#add-table-product tbody tr').each(function (index, row) {
          $(row).find('td:first').text(index + 1); // يبدأ الترقيم من 1
      });
  }

  // Add new row when the "add-product" button is clicked
  $('#add-table-product').on('click', '.add-product', function () {
      var newRow = `
      <tr>
          <td></td>
          <td style="width: 20%">
              <select class="form-select form-s select2" data-allow-clear="true">
                  <option value="AK">الاصناف</option>
                  <option value="HI">1</option>
                  <option value="CA">1</option>
                  <option value="NV">1</option>
                  <option value="OR">1</option>
              </select>
          </td>
          <td>
              <input type="date" class="form-control">
          </td>
          <td style="width: 10%">
              <select class="form-select form-s select2" data-allow-clear="true">
                  <option value="AK">الحجم</option>
                  <option value="HI">1</option>
                  <option value="CA">1</option>
                  <option value="NV">1</option>
                  <option value="OR">1</option>
              </select>
          </td>
          <td style="width: 20%">
              <select class="form-select form-s select2" data-allow-clear="true">
                  <option value="AK">اسم الرف</option>
                  <option value="HI">1</option>
                  <option value="CA">1</option>
                  <option value="NV">1</option>
                  <option value="OR">1</option>
              </select>
          </td>
          <td style="width: 20%">
              <select class="form-select form-s select2" data-allow-clear="true">
                  <option value="AK">الى رف</option>
                  <option value="HI">1</option>
                  <option value="CA">1</option>
                  <option value="NV">1</option>
                  <option value="OR">1</option>
              </select>
          </td>
          <td class="px-1" style="width: 10%">
              <input type="text" class="form-control" />
          </td>
          <td>
              <input type="text" class="form-control" />
          </td>
          <td>
              <input type="text" class="form-control" />
          </td>
          <td class="d-flex justify-content-center">
              <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-size" href="javascript:void(0);" title="حذف">
                  <i class="fa-solid fa-trash fs-5"></i>
              </a>
          </td>
      </tr>`;

      // Append the new row to the table
      $('#add-table-product tbody').append(newRow);

      // Initialize select2 for the new row only
      initializeSelect2ForTable($('#add-table-product'));

      // Update row numbering
      updateRowNumbers();
  });

  // Delete row when the "delete-size" button is clicked
  $('#add-table-product').on('click', '.delete-size', function () {
      $(this).closest('tr').remove();
      updateRowNumbers(); // Update numbering after deletion
  });

  // Initialize select2 for the table on page load
  initializeSelect2ForTable($('#add-table-product'));
});
