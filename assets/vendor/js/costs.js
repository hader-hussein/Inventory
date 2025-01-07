
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
            var dataItem = this.dataItem(e.node); // الحصول على العنصر المحدد

            // منع اختيار العناصر التي تحتوي على عناصر فرعية
            if (dataItem.hasChildren) {
              e.preventDefault(); // منع اختيار العنصر الرئيسي
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
    var $row = $(this).closest("tr");
    var $newRow = $row.clone();
    // Remove the plus button from the new row
    $newRow.find(".add-row").remove();

    // إضافة زر حذف للصف الجديد
   

    // Clear values
    $newRow.find("input").val("");

    // Append the new row to the table body
    $("#my-table tbody").append($newRow);
    // Initialize DropDownTree for new row
    initializeDropDownTree($newRow.find(".dropdowntree"));
    initializeDropDownTree($newRow.find(".dropdowntree-tow"));
    // حذف الصف عند الضغط على زر الحذف
    $(document).on("click", ".delete-row", function () {
      $(this).closest("tr").remove();
    });
  });
  //////////////
  $(".add-row-edit").on("click", function () {
    var $rowedit = $(this).closest("tr");
    var $newRowedit = $rowedit.clone();
    // Remove the plus button from the new row
    $newRowedit.find(".add-row-edit").remove();

    // إضافة زر حذف للصف الجديد
   

    // Clear values
    $newRowedit.find("input").val("");

    // Append the new row to the table body
    $("#my-table-edit tbody").append($newRowedit);
    // Initialize DropDownTree for new row
    initializeDropDownTree($newRowedit.find(".dropdowntree"));
    initializeDropDownTree($newRowedit.find(".dropdowntree-tow"));
    // حذف الصف عند الضغط على زر الحذف
    $(document).on("click", ".delete-row", function () {
      $(this).closest("tr").remove();
    });
  });
})
