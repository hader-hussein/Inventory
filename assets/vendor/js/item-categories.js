
  $(document).ready(function() {
    $('.select2').select2();

    // Function for Add Modal
    $('#Bond-type-add').on('change', function() {
      if ($(this).val() === 'الفرعية') {
        $('#sub-category-div-add').show();
      } else {
        $('#sub-category-div-add').hide();
      }
    });

    // Function for Edit Modal
    $('#Bond-type-edit').on('change', function() {
      if ($(this).val() === 'الفرعية') {
        $('#sub-category-div-edit').show();
      } else {
        $('#sub-category-div-edit').hide();
      }
    });
  });
  $(document).ready(function() {
    // عند فتح أي مودال يحتوي على فئة معينة
    $('.modal').on('shown.bs.modal', function () {
      // تهيئة الـ select2 لجميع العناصر داخل هذا المودال
      $(this).find('.select2').select2({
        dropdownParent: $(this) // تخصيص الـ modal الحالي كأب للقائمة المنسدلة
      });
    });
  });
