document.addEventListener("DOMContentLoaded", function () {

    var loader = document.querySelector('.loader');
    loader.style.display = 'block';


    setTimeout(function () {
      loader.style.display = 'none';
    }, 2000);
  });

  window.addEventListener('load', function () {

  });
