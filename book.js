const searchBook = () => {
    const textField = document.getElementById("search-field");
    const searchText = textField.value;
    textField.value = '';


    if (searchText == '') {

    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(respone => respone.json())
            .then(data => displayBook(data.docs));
    }

}





const displayBook = (books) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    
    <div class="card h-100">
    <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.author_name}</p>
      <h5> First-publish:${book.first_publish_year}</h5>
      
    </div>
   
  </div>
                

    `;
        searchResult.appendChild(div);
    });

}
