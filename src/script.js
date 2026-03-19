const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const scrollBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('btnSubmit').addEventListener('click', () => {
      const nome    = document.getElementById('nome').value.trim();
      const email   = document.getElementById('email').value.trim();
      const obj     = document.getElementById('objetivo').value;

      if (!nome || !email || !obj) {
        alert('Por favor, preencha Nome, E-mail e Objetivo antes de enviar.');
        return;
      }

      document.getElementById('formFields').style.display = 'none';
      const success = document.getElementById('formSuccess');
      success.style.display = 'block';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(
      '.service-card, .vantagem-item, .depo-card, .stat-card, .contato-item'
    ).forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });