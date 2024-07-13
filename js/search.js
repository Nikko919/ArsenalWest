document.querySelector('#search__input').addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#search__input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.list__item-search');

    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    })

}