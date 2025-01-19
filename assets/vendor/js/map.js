const maps = {};

// وظيفة لتهيئة الخرائط داخل النوافذ المنبثقة والـ accordion-item
function initializeMap(containerId, radiusInputId) {
  const map = L.map(containerId).setView([24.7136, 46.6753], 10); // الرياض
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  maps[containerId] = { map: map, circle: null, radiusInput: radiusInputId };

  // إضافة دائرة عند النقر على الخريطة
  map.on('click', function (e) {
    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);
    const radius = parseInt(document.getElementById(radiusInputId).value, 10) || 1000;

    // إزالة الدائرة السابقة إذا كانت موجودة
    if (maps[containerId].circle) {
      map.removeLayer(maps[containerId].circle);
    }

    // إضافة الدائرة الجديدة
    maps[containerId].circle = L.circle([lat, lng], {
      radius: radius,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.3
    }).addTo(map);

    // تكبير الخريطة لتلائم الدائرة
    map.fitBounds(maps[containerId].circle.getBounds());

    // تحديث القيم في الحقول بناءً على مصدر الاستدعاء
    const nameInput = document.querySelector(`#name-areas${containerId === 'map1' ? '' : '2'}`);
    const longitudeInput = document.querySelector(`.longitude${containerId === 'map1' ? '' : '2'}`);
    const latitudeInput = document.querySelector(`.latitude${containerId === 'map1' ? '' : '2'}`);
    const radiusField = document.querySelector(`#radius${containerId === 'map1' ? '' : '2'}`);

    if (nameInput && longitudeInput && latitudeInput && radiusField) {
      nameInput.value = "منطقة " + lat + ", " + lng;
      longitudeInput.value = lng;
      latitudeInput.value = lat;
      radiusField.value = radius;
    }
  });

  map.invalidateSize(); // تحديث حجم الخريطة
}

// تهيئة الخرائط عند فتح النوافذ المنبثقة
$('#exampleModal').on('shown.bs.modal', function () {
  if (!maps['map1']) {
    initializeMap('map1', 'radius');
  } else {
    maps['map1'].map.invalidateSize(); // تحديث حجم الخريطة
  }
});

$('#edit-modal').on('shown.bs.modal', function () {
  if (!maps['map2']) {
    initializeMap('map2', 'radius2');
  } else {
    maps['map2'].map.invalidateSize(); // تحديث حجم الخريطة
  }
});

// تهيئة الخريطة عند فتح الـ accordion-item
$('#collapseTwo').on('shown.bs.collapse', function () {
  if (!maps['map2']) {
    initializeMap('map2', 'radius2');
  } else {
    maps['map2'].map.invalidateSize(); // تحديث حجم الخريطة
  }
});