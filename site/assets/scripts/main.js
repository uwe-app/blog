const run = () => {
  const search = document.querySelector(".search-wrapper");
  const search_toggle = document.querySelector('[href="#search"]');
  search_toggle.addEventListener('click', (e) => {
    e.preventDefault();
    search.classList.toggle('hidden');
  });
}

run();
