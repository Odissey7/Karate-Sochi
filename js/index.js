
document.querySelector('.burger').onclick = function() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger_content').classList.toggle('burger_content_active');
}
