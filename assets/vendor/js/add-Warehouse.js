$(document).ready(function() {
    initializeSelect2();

//table-size
 // Add new row when plus button is clicked
 $('#my-table-tow').on('click', '.btnaddsize', function () {
    var newRowe = `
    <tr>
    <td></td>
            <td style="width: 40%">
                <select class="form-select form-s select2">
                    <option value="AK">الاصناف</option>
                    <option value="HI">1</option>
                    <option value="CA">1</option>
                    <option value="NV">1</option>
                    <option value="OR">1</option>
                </select>
            </td>
            <td style="width: 40%">
                <select class="form-select form-s select2">
                    <option value="AK">SIZE</option>
                    <option value="HI">1</option>
                    <option value="CA">1</option>
                    <option value="NV">1</option>
                    <option value="OR">1</option>
                </select>
            </td>
            <td><input type="text" class="form-control" /></td>
            <td><input type="text" class="form-control" /></td>
            <td><input type="text" class="form-control" /></td>
            <td><input type="text" class="form-control" /></td>
            <td><input type="text" class="form-control" /></td>
            <td><input type="text" class="form-control" /></td>
             <td><input type="text" class="form-control" /></td>
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
