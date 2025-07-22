document.addEventListener("DOMContentLoaded", function() {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('mouseover', () => {
      cta.style.backgroundColor = '#ff9800';
    });
    cta.addEventListener('mouseout', () => {
      cta.style.backgroundColor = '#ffcc00';
    });
  }
});