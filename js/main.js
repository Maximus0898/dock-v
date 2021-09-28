const btn = document.getElementById('mobile-btn');
const mobilesidebar = document.getElementById('mobile-nav');

btn.addEventListener('click', (e) => {
  mobilesidebar.classList.toggle('hidden');

  if (mobilesidebar.classList.contains('w-0')) {
    mobilesidebar.classList.replace('w-0', 'w-full');
  } else {
    mobilesidebar.classList.replace('w-full', 'w-0');
  }
});
