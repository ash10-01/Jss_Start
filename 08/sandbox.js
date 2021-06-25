const page=document.querySelector('article');
console.log(page.children);
console.log(Array.from(page.children));
Array.from(page.children).forEach((child) => {
  child.classList.add('greenbox')
});
