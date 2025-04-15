// FAQ page

// Handle tab switching
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Deactivate all tabs
    tabLinks.forEach(l => l.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Activate current
    link.classList.add('active');
    document.getElementById(link.dataset.tab).classList.add('active');
  });
});

// FAQ toggle with +/–
document.addEventListener('click', (e) => {
  const question = e.target.closest('.faq-question');
  if (question) {
    const item = question.parentElement;
    const faqSection = item.parentElement;
    const allItems = faqSection.querySelectorAll('.faq-item');

    allItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.toggle-icon').textContent = '+';
      }
    });

    const isActive = item.classList.toggle('active');
    const icon = item.querySelector('.toggle-icon');
    icon.textContent = isActive ? '–' : '+';
  }
});
