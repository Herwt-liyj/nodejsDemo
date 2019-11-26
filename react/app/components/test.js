module.exports = function() {
    var title = document.createElement('h1');
    console.log('components test.js ',title)
    title.innerText='webpack React from test.js11';
    return title;
}