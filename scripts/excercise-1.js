const categorieItemRefs = document.querySelectorAll('#categories .item');

console.log(`В списке ${categorieItemRefs.length} категории.`);

// const asd = document.querySelector('.item h2').textContent;

categorieItemRefs.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  const firstItemList = item.querySelector('ul');
  console.log(
    `Количество элементов: ${firstItemList.querySelectorAll('li').length}`,
  );
});
