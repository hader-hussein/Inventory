$(document).ready(function () {
     // Initialize Select2 inside modals dynamically
     $('#edit-modeil, #exampleModal').on('shown.bs.modal', function () {
       const currentModal = $(this); // The modal that triggered the event
       $('.select2', currentModal).select2({
         dropdownParent: currentModal, // Set the parent to the current modal
         allowClear: true, // Enable clear functionality
         placeholder: "اختر عنصرًا", // Set a placeholder
       });
     });
   
     //edit
       // Add new row with Select2 elements
       $('#my-table-size').on('click', '.btnaddvalueedit', function () {
        const newRow = `
          <tr>
            <td>${$('#my-table-size tr').length + 0}</td>
     <td>
                                        <select  class="form-select select2 form-control" data-allow-clear="true">
                                          <option value="AK" selected> اختر
                                            الصنف</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>

                                        </select>
                                      </td>
                                      <td style="width: 30%;">
                                        <select class="select2 form-select" data-allow-clear="true">
                                          <option value="AK" selected>SIZE</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>
                                        </select>
                                      </td>
                                      <td style="width: 30%;">
                                        <select class="select2 form-select" data-allow-clear="true">
                                          <option value="AK" selected>اسم
                                            الرف</option>
                                          <option value="HI">1</option>
                                          <option value="CA">1</option>
                                          <option value="NV">1</option>
                                          <option value="OR">1</option>
                                        </select>
                                      </td>
                                      <td style="width: 10%;"> <input type="number" class="form-control px-0"></td>
                                      <td style="width: 10%;"><input type="date" class="form-control px-0"></td>

                                      <td style="width: 10%;"> <input type="text" class="form-control px-0">
                                      </td>
                                      <td> <input type="text" class="form-control px-0"> </td>
            <td class="d-flex justify-content-center align-items-center">
              <button type="button" class="button btn btn-danger btn-delete-edit p-1">
                <i class="fa-solid fa-trash fs-4"></i>
              </button>
            </td>
          </tr>
        `;
    
        $('#my-table-size tbody').append(newRow);
    
        // Reinitialize Select2 for new elements
        const currentModal = $('#edit-modeil').is(':visible') ? $('#edit-modeil') : $('#exampleModal');
        $('.select2', currentModal).select2({
          dropdownParent: currentModal, // Set the parent dynamically
          allowClear: true,
          placeholder: "اختر عنصرًا",
        });
      });
    
      // Delete row functionality
      $('#my-table-size').on('click', '.btn-delete-edit', function () {
        $(this).closest('tr').remove(); // Remove the row
    
        // Update the row numbering
        $('#my-table-size tbody tr').each(function (index) {
          $(this).find('td:first').text(index + 1);
        });
      });
   });
   
   