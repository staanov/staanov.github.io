let ruLang = document.querySelector('.ru-lang');
let enLang = document.querySelector('.en-lang');

let home = document.querySelector('.home');
let resume = document.querySelector('.resume');
let projects = document.querySelector('.projects');
let books = document.querySelector('.books');
let articles = document.querySelector('.articles');

ruLang.onclick = function() {
    home.textContent = 'Главная';
    resume.textContent = 'Резюме';
    projects.textContent = 'Проекты';
    books.textContent = 'Книги';
    articles.textContent = 'Статьи';
}

enLang.onclick = function() {
    home.textContent = 'Home';
    resume.textContent = 'Resume';
    projects.textContent = 'Projects';
    books.textContent = 'Books';
    articles.textContent = 'Articles';
}
