/* =========================================================
   SUAVE — interações (fade suave, sem exageros)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('aberto');
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('aberto'));
  });

  /* ---------- Fade-in ao rolar (uniforme, sem stagger perceptível) ---------- */
  const revelaveis = document.querySelectorAll('.suave-in');
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('on');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  revelaveis.forEach(el => observer.observe(el));

  /* ---------- Abas de dias (agenda) — cross-fade suave ---------- */
  const abas = document.querySelectorAll('.aba-dia');
  const listas = document.querySelectorAll('.lista-agenda');

  abas.forEach(aba => {
    aba.addEventListener('click', () => {
      const dia = aba.dataset.dia;

      abas.forEach(a => a.classList.remove('ativa'));
      aba.classList.add('ativa');

      listas.forEach(lista => {
        if (lista.dataset.diaConteudo === dia) {
          lista.classList.add('ativa');
        } else {
          lista.classList.remove('ativa');
        }
      });
    });
  });

});
