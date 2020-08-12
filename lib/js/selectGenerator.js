const selectElem = document.querySelectorAll('.category-select');
console.log(selectElem)
const categories = ["All", "Advice", "Instruments", "Electronics", "Toys", "Jewelry", "Clothing", "Sports", "Furniture"];

selectElem.forEach(select => {
    categories.forEach(category => {
        let option = document.createElement('option');
        option.value = category;
        option.innerHTML = category;
    
        select.appendChild(option);
    });
});
