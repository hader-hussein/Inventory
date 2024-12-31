
$(document).ready(function () {
  $('.select2').select2();
 // بيانات المنتج المجمع
// Function to add a new row
window.addField = function () {
    var newRow = `
        <tr>
            <td></td>
            <td style="width: 50%;">
                <select class="select2 form-select" data-allow-clear="true">
                    <option value="LETTER" selected>1</option>
                    <option value="VIDEO">2</option>
                    <option value="PHOTO">3</option>
                    <option value="SI">4</option>
                    <option value="CERTIFICATE">5</option>
                    <option value="OTHER">6</option>
                </select>
            </td>
            <td class="p-1">
                <select class="select2 form-select" data-allow-clear="true">
                    <option value="AK" selected>SIZE</option>
                    <option value="HI">1</option>
                    <option value="CA">1</option>
                    <option value="NV">1</option>
                    <option value="OR">1</option>
                </select>
            </td>
            <td><input type="text" class="form-control"></td>
            <td class="d-flex">
                <button type="button" class="bg-danger btn text-bg-danger btnDelete-to p-1 d-flex align-items-center justify-content-center me-3 rounded" title="حذف">
                    <i class="ti ti-trash fs-4"></i>
                </button>
            </td>
        </tr>`;

    $('#tbl').append(newRow);

    // Re-initialize select2 for the newly added select elements
    $('#tbl tr:last-child .select2').select2({
        dropdownParent: $('body'), // Ensures dropdown is within body
        width: '100%' // Ensures the select2 element uses 100% width of its container
    });


    // Update row numbering
    updateRowNumbers();
};

// Function to update row numbering
function updateRowNumbers() {
    $('#tbl tr').each(function (index, row) {
        $(row).find('td:first').text(index + 1);
    });
}

// Function to delete a row
$(document).on('click', '.btnDelete', function () {
    $(this).closest('tr').remove();
    updateRowNumbers();
});

//بيانات اصناف التعبئة والتغليف
// Function to add a new row
window.addFieldtow = function () {
    var newRow = `
        <tr>
            <td></td>
            <td style="width: 50%;">
                <select class="select2 form-select" data-allow-clear="true">
                    <option value="LETTER" selected>1</option>
                    <option value="VIDEO">2</option>
                    <option value="PHOTO">3</option>
                    <option value="SI">4</option>
                    <option value="CERTIFICATE">5</option>
                    <option value="OTHER">6</option>
                </select>
            </td>
            <td class="p-1">
                <select class="select2 form-select" data-allow-clear="true">
                    <option value="AK" selected>SIZE</option>
                    <option value="HI">1</option>
                    <option value="CA">1</option>
                    <option value="NV">1</option>
                    <option value="OR">1</option>
                </select>
            </td>
            <td><input type="text" class="form-control"></td>
            <td class="d-flex">
                <button type="button" class="bg-danger btn text-bg-danger btnDelete-to p-1 d-flex align-items-center justify-content-center me-3 rounded" title="حذف">
                    <i class="ti ti-trash fs-4"></i>
                </button>
            </td>
        </tr>`;

    $('#tb2').append(newRow);

    // Re-initialize select2 for the newly added select elements
    $('#tb2 tr:last-child .select2').select2({
        dropdownParent: $('body'), // Ensures dropdown is within body
        width: '100%' // Ensures the select2 element uses 100% width of its container
    });


    // Update row numbering
    updateRowNumbers();
};

// Function to update row numbering
function updateRowNumbers() {
    $('#tb2 tr').each(function (index, row) {
        $(row).find('td:first').text(index + 1);
    });
}

// Function to delete a row
$(document).on('click', '.btnDelete-to', function () {
    $(this).closest('tr').remove();
    updateRowNumbers();
});

});
// Function to add a new row
// Counter to ensure unique IDs for radio buttons
var radioCounter = 1;

// Function to add a new row
function addFieldthere(button) {
    // Get the table body
    var table = document.getElementById("tb3");

    // Get the number of rows (for the sequence number)
    var rowCount = table.rows.length;

    // Create a new row
    var newRow = table.insertRow();

    // Add the sequence number cell
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = rowCount + 1;

    // Add the empty item code cell
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = '';

    // Add the size select2 dropdown
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `
        <select class="form-select select2">
            <option value="AK" selected>CHOOSE THE SIZE</option>
            <option value="HI">1</option>
            <option value="CA">1</option>
            <option value="NV">1</option>
            <option value="OR">1</option>
        </select>
    `;

    // Add other input fields
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<input type="number" class="form-control">`;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<input type="text" class="form-control">`;

    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<input type="number" class="form-control">`;

    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<input type="text" class="form-control">`;

    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<input type="text" class="form-control">`;

    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<input type="text" class="form-control">`;

    var cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<input type="text" class="form-control">`;

    // Assign unique IDs for radio buttons
    var basicSizeId = `colla-basic-${radioCounter}`;
    var subSizeId = `sub-size-${radioCounter}`;
    radioCounter++;

    var cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<input name="collap-type-${radioCounter}" class="form-check-input" type="radio" id="${basicSizeId}">`;

    var cell12 = newRow.insertCell(11);
    cell12.innerHTML = `<input name="collap-type-${radioCounter}" class="form-check-input" type="radio" id="${subSizeId}">`;

    // Add the action buttons (delete and add)
    var cell13 = newRow.insertCell(12);
    cell13.classList.add("d-flex");
    cell13.innerHTML = `
        <button type="button" class="bg-danger btn btnDelete-to text-bg-danger remove_row-2 p-1 d-flex align-items-center justify-content-center me-3 rounded" title="حذف">
            <i class="ti ti-trash fs-4"></i>
        </button>
        
    `;

    // Reinitialize select2 for the new fields
    $('.select2').select2();

    // Add delete functionality to the delete button
    var deleteButton = newRow.querySelector('.btnDelete-to');
    deleteButton.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1);
    };
}
