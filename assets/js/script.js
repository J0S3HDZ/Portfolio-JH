window.location.href = "https://portafolio-josehernandez.netlify.app/";

window.addEventListener('load', () => {
        const fr = document.querySelector('iframe').style.display = 'none';

        const elements1 = document.querySelectorAll('#left_op');
        const reversedElements = Array.prototype.slice.call(elements1).reverse();
        reversedElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('moveUp');
            }, (index + 1) * 300);
        });

        const elements2 = document.querySelectorAll('#right_op');
        elements2.forEach((elementr, index) => {
        setTimeout(() => {
            elementr.classList.add('moveUp');
        }, (index + 1) * 300);
        });
        
        const logo = document.getElementById('logo_op');
        logo.classList.add('moveUp');
    });
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
