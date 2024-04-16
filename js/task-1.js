const categoriesEl = document.querySelectorAll('.item');
console.dir(`Number of categories ${categoriesEl.length}`);
Array.from(categoriesEl).forEach((category, index) => {
  const title = category.querySelector('.list-title')
  const listEl = category.querySelectorAll('.list-item');
  console.log(`Category: ${title.textContent}`);
  console.log(`Element: ${listEl.length}`);
});