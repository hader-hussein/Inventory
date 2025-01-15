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
     $('#my_table').on('click', '.btnaddsize', function () {
       const newRow = `
         <tr>
           <td>${$('#my_table tbody tr').length + 1}</td>
           <td class="p-1">
             <input type="text" class="form-control">
           </td>
           <td class="p-1" style="width: 20%;">
             <select class="form-select select2" data-allow-clear="true">
               <option value="AK">الفرع</option>
               <option value="HI">1</option>
               <option value="CA">1</option>
               <option value="NV">1</option>
               <option value="OR">1</option>
             </select>
           </td>
           <td class="p-1">
             <select class="form-select select2" data-allow-clear="true">
               <option value="AK">أسلوب الدفع</option>
               <option value="HI">1</option>
               <option value="CA">1</option>
               <option value="NV">1</option>
               <option value="OR">1</option>
             </select>
           </td>
           <td class="p-1">
             <select class="form-select select2" data-allow-clear="true">
               <option value="AK">العميل الافتراضي</option>
               <option value="HI">1</option>
               <option value="CA">1</option>
               <option value="NV">1</option>
               <option value="OR">1</option>
             </select>
           </td>
           <td class="d-flex justify-content-center align-items-center">
             <button type="button" class="button btn btn-danger btn-delete p-1">
               <i class="fa-solid fa-trash fs-4"></i>
             </button>
           </td>
         </tr>
       `;
   
       $('#my_table tbody').append(newRow);
   
       // Reinitialize Select2 for new elements
       const currentModal = $('#edit-modeil').is(':visible') ? $('#edit-modeil') : $('#exampleModal');
       $('.select2', currentModal).select2({
         dropdownParent: currentModal, // Set the parent dynamically
         allowClear: true,
         placeholder: "اختر عنصرًا",
       });
     });
   
     // Delete row functionality
     $('#my_table').on('click', '.btn-delete', function () {
       $(this).closest('tr').remove(); // Remove the row
   
       // Update the row numbering
       $('#my_table tbody tr').each(function (index) {
         $(this).find('td:first').text(index + 1);
       });
     });
   });
   
   