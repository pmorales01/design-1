document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('menu');
    var toggle = document.getElementById('toggle');
  
    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });
  