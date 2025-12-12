(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        // Cek input form
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert('Terima kasih! Pesan Anda berhasil terkirim. (Simulasi)');
          form.reset();
          form.classList.remove('was-validated');
          return;
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();
