const menu = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');

  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });

  window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

    document.querySelectorAll('section').forEach(sec => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 200;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        document.querySelectorAll('.navbar ul li a').forEach(link => {
          link.classList.remove('active');
        });

        const currentLink = document.querySelector(`.navbar ul li a[href="#${id}"]`);
        if (currentLink) currentLink.classList.add('active');
      }
    });
  });
