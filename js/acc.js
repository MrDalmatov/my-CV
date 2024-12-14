document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const isOpen = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

    if (!isOpen) {
      accordionItem.classList.add('active');
    }
  })
})

