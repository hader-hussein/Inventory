
$(document).ready(function () {
     // تهيئة Select2 لجميع القوائم
    

     // إصلاح محتمل للخطأ عند استخدام allowClear
     $.fn.select2.amd.require(['select2/selection/allowClear'], function (AllowClear) {
       AllowClear.prototype._handleClear = function (evt) {
         if (this.$element[0] && this.$element[0].id) { // تحقق من وجود id
           AllowClear.__super__._handleClear.call(this, evt);
         }
       };
     });

     // إظهار أو إخفاء القسم الفرعي عند اختيار النوع
     $('.Bond-type-add').on('change', function () {
       if ($(this).val() === 'الفرعية') {
         $('#sub-category-div-add').slideDown(); // عرض القسم بتأثير
       } else {
         $('#sub-category-div-add').slideUp(); // إخفاء القسم بتأثير
       }
     });
 // إظهار أو إخفاء القسم الفرعي عند اختيار النوع
 $('.Bond-type-edit').on('change', function () {
     if ($(this).val() === 'الفرعية') {
       $('#sub-category-div-edit').slideDown(); // عرض القسم بتأثير
     } else {
       $('#sub-category-div-edit').slideUp(); // إخفاء القسم بتأثير
     }
   });
    
   });
 
