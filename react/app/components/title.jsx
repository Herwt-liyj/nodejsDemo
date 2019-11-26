
//title.jsx文件

module.exports = function() {
    var title = document.createElement('h1');
    title.innerText='webpack React demo  from title.jsx';
    document.title='webpack React demo  from title.jsx';
    console.log('hot udpate')
    return title;
}

