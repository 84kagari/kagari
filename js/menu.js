document.getElementById('hamburger').onclick = function() {
  document.getElementById('nav-menu').classList.toggle('active');
};
document.querySelectorAll('.expand-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // 直後の兄弟要素を取得
    let content = btn.nextElementSibling;
    // 画像クリック時はpタグを飛ばしてdivを取得
    if (btn.tagName === 'IMG') {
      content = btn.parentElement.querySelector('.expand-content');
    }
    if (content && content.classList.contains('expand-content')) {
      content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    }
  });
});