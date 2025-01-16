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
   
     // Add new row with Select2 elements
     $('#my-table-value').on('click', '.btnaddvalue', function () {
       const newRow = `
         <tr>
           <td>${$('#my-table-value tbody tr').length + 1}</td>
                         <td>  
                                      <select  class="form-select select2 form-control"data-allow-clear="true" >
                                        <option value="AK" selected>   	اسم المندوب</option>
                                        <option value="HI">1</option>
                                        <option value="CA">1</option>
                                        <option value="NV">1</option>
                                        <option value="OR">1</option>
                                    
                                      </select>
                                    </td>
                                    <td>
                                      <input type="date"class="form-control">
                                    </td>
                                    <td>  <input type="number"class="form-control"></td>

                                    <td>  <input type="number"class="form-control"></td>
                                    <td>  <input type="number"class="form-control"></td>

                                    <td>  <input type="number"class="form-control"></td>
                                    <td>  <input type="number"class="form-control"></td>

                                    <td>  <input type="number"class="form-control"></td>
                                    <td>  <input type="number"class="form-control"></td>
           <td class="d-flex justify-content-center align-items-center">
             <button type="button" class="button btn btn-danger btn-delete p-1">
               <i class="fa-solid fa-trash fs-4"></i>
             </button>
           </td>
         </tr>
       `;
   
       $('#my-table-value tbody').append(newRow);
   
       // Reinitialize Select2 for new elements
       const currentModal = $('#edit-modeil').is(':visible') ? $('#edit-modeil') : $('#exampleModal');
       $('.select2', currentModal).select2({
         dropdownParent: currentModal, // Set the parent dynamically
         allowClear: true,
         placeholder: "اختر عنصرًا",
       });
     });
   
     // Delete row functionality
     $('#my-table-value').on('click', '.btn-delete', function () {
       $(this).closest('tr').remove(); // Remove the row
   
       // Update the row numbering
       $('#my-table-value tbody tr').each(function (index) {
         $(this).find('td:first').text(index + 1);
       });
     });

     //edit
       // Add new row with Select2 elements
       $('#my-table-edit').on('click', '.btnaddvalueedit', function () {
        const newRow = `
          <tr>
            <td>${$('#my-table-edit tr').length + 1}</td>
                          <td>  
                                       <select  class="form-select select2 form-control"data-allow-clear="true" >
                                         <option value="AK" selected>   	اسم المندوب</option>
                                         <option value="HI">1</option>
                                         <option value="CA">1</option>
                                         <option value="NV">1</option>
                                         <option value="OR">1</option>
                                     
                                       </select>
                                     </td>
                                     <td>
                                       <input type="date"class="form-control">
                                     </td>
                                     <td>  <input type="number"class="form-control"></td>
 
                                     <td>  <input type="number"class="form-control"></td>
                                     <td>  <input type="number"class="form-control"></td>
 
                                     <td>  <input type="number"class="form-control"></td>
                                     <td>  <input type="number"class="form-control"></td>
 
                                     <td>  <input type="number"class="form-control"></td>
                                     <td>  <input type="number"class="form-control"></td>
            <td class="d-flex justify-content-center align-items-center">
              <button type="button" class="button btn btn-danger btn-delete-edit p-1">
                <i class="fa-solid fa-trash fs-4"></i>
              </button>
            </td>
          </tr>
        `;
    
        $('#my-table-edit tbody').append(newRow);
    
        // Reinitialize Select2 for new elements
        const currentModal = $('#edit-modeil').is(':visible') ? $('#edit-modeil') : $('#exampleModal');
        $('.select2', currentModal).select2({
          dropdownParent: currentModal, // Set the parent dynamically
          allowClear: true,
          placeholder: "اختر عنصرًا",
        });
      });
    
      // Delete row functionality
      $('#my-table-edit').on('click', '.btn-delete-edit', function () {
        $(this).closest('tr').remove(); // Remove the row
    
        // Update the row numbering
        $('#my-table-edit tbody tr').each(function (index) {
          $(this).find('td:first').text(index + 1);
        });
      });
   });
   
   