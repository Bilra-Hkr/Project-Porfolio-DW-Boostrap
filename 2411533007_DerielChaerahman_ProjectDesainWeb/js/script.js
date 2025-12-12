document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      items.forEach((item) => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          item.classList.add('animate__fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
