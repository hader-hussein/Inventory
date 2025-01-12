$(document).ready(function () {
    // تهيئة select2 للعناصر داخل الجدول عند تحميل الصفحة فقط
    initializeSelect2();

    // إضافة صف جديد عند النقر على زر الإضافة
    $('#my-table-price').on('click', '.addField-price', function () {
        var newRow = ` 
        <tr>
            <td></td>
            <td style="width: 50%;"> 
                <select class="form-select select2"> <!-- إضافة select2 هنا -->
                    <option value="LETTER">1</option>
                    <option value="VIDEO">2</option>
                    <option value="PHOTO">3</option>
                    <option value="SI">4</option>
                    <option value="CERTIFICATE">5</option>
                    <option value="OTHER">6</option>
                </select>
            </td>
            <td class="p-1"> 
                <select class="form-select select2"> <!-- إضافة select2 هنا -->
                    <option value="AK">SIZE</option>
                    <option value="HI">1</option>
                    <option value="CA">1</option>
                    <option value="NV">1</option>
                    <option value="OR">1</option>
                </select>
            </td>
            <td>
                <input type="text" class="form-control">
            </td>
            <td class="d-flex justify-content-center">
                <a class="bg-danger text-bg-danger p-1 d-flex align-items-center justify-content-center rounded delete-price" href="javascript:void(0);" title="حذف">
                    <i class="fa-solid fa-trash fs-5"></i>
                </a>
            </td>
        </tr>`;

        // إضافة الصف الجديد إلى الجدول
        $('#my-table-price tbody').append(newRow);

        // تهيئة Select2 للصف الجديد بعد إضافته
        initializeSelect2();

        // تحديث ترقيم الصفوف
        updateRowNumbers();
    });

    // تحديث ترقيم الصفوف
    function updateRowNumbers() {
        $('#my-table-price tbody tr').each(function (index, row) {
            $(row).find('td:first').text(index + 1); // الترقيم يبدأ من 1
        });
    }

    // حذف الصف عند النقر على زر الحذف
    $('#my-table-price').on('click', '.delete-price', function () {
        $(this).closest('tr').remove();
        updateRowNumbers(); // تحديث ترقيم الصفوف
    });

    // تهيئة select2 فقط للعناصر داخل #my-table-price
    function initializeSelect2() {
        $('#my-table-price .select2').each(function () { // التأكد من استخدام الكلاس select2
            $(this).select2({
                placeholder: "اختر خيارًا", // إضافة placeholder
                allowClear: true // السماح بإزالة الاختيار
            });
        });
    }
});




