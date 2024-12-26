// عندما يضغط المستخدم على زر "إرسال الطلب"
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();  // منع إعادة تحميل الصفحة عند إرسال الطلب

  // جلب البيانات المدخلة من قبل المستخدم
  const userName = document.getElementById('userName').value;
  const userLocation = document.getElementById('userLocation').value;
  const userPhone = document.getElementById('userPhone').value;

  // عرض البيانات في الـ Console
  console.log('تم إرسال الطلب:');
  console.log('الاسم:', userName);
  console.log('المكان:', userLocation);
  console.log('رقم الهاتف:', userPhone);
});

