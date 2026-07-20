document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.hero__btn, .card__btn');

  buyButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      let productName = 'Pop-It (Акция)';

      if (card) {
        const titleElement = card.querySelector('.card__title');
        if (titleElement) {
          productName = titleElement.textContent.trim();
        }
      }

      alert(`Товар "${productName}" успешно добавлен в корзину!`);
    });
  });

  const navLinks = document.querySelectorAll('.header__link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
