const maps = {};

// وظيفة لتهيئة الخرائط داخل النوافذ المنبثقة
function initializeMapForModal(modalId) {
  const mapId = modalId === 'exampleModal' ? 'map1' : 'map2';
  const map = L.map(mapId).setView([24.7136, 46.6753], 10); // الرياض
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  maps[modalId] = { map: map, circle: null, radiusInput: modalId === 'exampleModal' ? 'radius' : 'radius2' };

  // إضافة دائرة عند النقر على الخريطة
  map.on('click', function (e) {
    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);
    const radius = parseInt(document.getElementById(maps[modalId].radiusInput).value, 10) || 1000;

    // إزالة الدائرة السابقة إذا كانت موجودة
    if (maps[modalId].circle) {
      map.removeLayer(maps[modalId].circle);
    }

    // إضافة الدائرة الجديدة
    maps[modalId].circle = L.circle([lat, lng], {
      radius: radius,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.3
    }).addTo(map);

    // تكبير الخريطة لتلائم الدائرة
    map.fitBounds(maps[modalId].circle.getBounds());

    // تحديث القيم في الفورم (لـ exampleModal و edit-modal)
    if (modalId === 'exampleModal') {
      document.querySelector('#name-areas').value = "منطقة " + lat + ", " + lng; // تحديث اسم المنطقة
      document.querySelector('.longitude').value = lng; // تحديث خط الطول
      document.querySelector('.latitude').value = lat; // تحديث خط العرض
      document.querySelector('#radius').value = radius; // تحديث نصف القطر
    } else if (modalId === 'edit-modal') {
      document.querySelector('#name-areas2').value = "منطقة " + lat + ", " + lng; // تحديث اسم المنطقة
      document.querySelector('.longitude2').value = lng; // تحديث خط الطول
      document.querySelector('.latitude2').value = lat; // تحديث خط العرض
      document.querySelector('#radius2').value = radius; // تحديث نصف القطر
    }
  });
  map.invalidateSize(); // تحديث حجم الخريطة
}

// تهيئة الخرائط عند فتح النوافذ المنبثقة
$('#exampleModal').on('shown.bs.modal', function () {
  if (!maps['exampleModal']) {
    initializeMapForModal('exampleModal');
  }
});

$('#edit-modal').on('shown.bs.modal', function () {
  if (!maps['edit-modal']) {
    initializeMapForModal('edit-modal');
  }
});


