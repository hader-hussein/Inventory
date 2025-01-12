$(document).ready(function () {
  function initializeDropDownTree(selector) {
    $(selector).each(function () {
      if (!$(this).data("kendoDropDownTree")) {
        $(this).kendoDropDownTree({
          placeholder: "Select ...",
          filter: "startswith",
          dataSource: [
            {
              text: "Furniture",
              expanded: true,
              items: [
                { text: "Tables & Chairs" },
                { text: "Sofas" },
                { text: "Occasional Furniture" },
              ],
            },
            {
              text: "Decor",
              expanded: true,
              items: [
                { text: "Bed Linen" },
                { text: "Curtains & Blinds" },
                { text: "Carpets" },
              ],
            },
          ],
          select: function (e) {
            var dataItem = this.dataItem(e.node);

            if (dataItem.hasChildren) {
              e.preventDefault();
              alert(
                "لا يمكنك اختيار العناصر الرئيسية، يرجى اختيار عنصر فرعي."
              );
            }
          },
        });
      }
    });
  }

  // Initialize DropDownTree for existing elements
  initializeDropDownTree(".dropdowntree");
  initializeDropDownTree(".dropdowntree-tow");

  $(".add-row").on("click", function () {
    var $row = $(this).closest("tr"); // السطر الحالي
    var $newRow = $row.clone(); // نسخ السطر

    // إزالة محتويات الحقول في السطر الجديد
    $newRow.find("input").val("");

    // إزالة زر الإضافة من السطر الجديد وإضافة زر الحذف
    $newRow.find(".add-row")
      .removeClass("add-row btn-primary")
      .addClass("delete-row bg-danger text-bg-danger")
      .attr("title", "حذف")
      .html('<i class="ti ti-trash"></i>');

    // إضافة السطر الجديد بعد السطر الأخير
    $("#my-table tbody").append($newRow);

    // إعادة تهيئة DropDownTree للسطر الجديد
    initializeDropDownTree($newRow.find(".dropdowntree"));
    initializeDropDownTree($newRow.find(".dropdowntree-tow"));
      // تحديث ترقيم الصفوف
  updateRowNumberse();
  });
 // تحديث ترقيم الصفوف
 function updateRowNumberse() {
  $('#my-table tbody tr').each(function (index, row) {
      $(row).find('td:first').text(index + 1); // الترقيم يبدأ من 1
  });
}
  // حذف السطر عند الضغط على زر الحذف
  $(document).on("click", ".delete-row", function () {
    $(this).closest("tr").remove();
  });
  //edit
  $(".add-row-edit").on("click", function () {
    var $row = $(this).closest("tr"); // السطر الحالي
    var $newRow = $row.clone(); // نسخ السطر

    // إزالة محتويات الحقول في السطر الجديد
    $newRow.find("input").val("");

    // إزالة زر الإضافة من السطر الجديد وإضافة زر الحذف
    $newRow.find(".add-row-edit")
      .removeClass("add-row btn-primary")
      .addClass("delete-row-edit bg-danger text-bg-danger")
      .attr("title", "حذف")
      .html('<i class="ti ti-trash"></i>');

    // إضافة السطر الجديد بعد السطر الأخير
    $("#my-table-edit tbody").append($newRow);
  
    // إعادة تهيئة DropDownTree للسطر الجديد
    initializeDropDownTree($newRow.find(".dropdowntree"));
    initializeDropDownTree($newRow.find(".dropdowntree-tow"));
    // تحديث ترقيم الصفوف
  updateRowNumbers();
  });
 // تحديث ترقيم الصفوف
 function updateRowNumbers() {
  $('#my-table-edit tbody tr').each(function (index, row) {
      $(row).find('td:first').text(index + 1); // الترقيم يبدأ من 1
  });
}
  // حذف السطر عند الضغط على زر الحذف
  $(document).on("click", ".delete-row-edit", function () {
    $(this).closest("tr").remove();
  });
});
