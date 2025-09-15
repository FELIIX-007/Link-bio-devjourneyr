// ===== Utilidades =====
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));

// ===== Ano automático =====
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Copiar @ =====
const copyBtn = $('#copy');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('@devjourneyr');
      toast('Usuário copiado!');
    } catch {
      toast('❌ Não foi possível copiar :(');
    }
  });
}

// ===== Toast =====
const toastEl = $('#toast');
let toastTimer;

function toast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
}
// ===== Acessibilidade: foco visível ===== 
document.addEventListener('keydown', (e)=>{ if(e.key === 'Tab') document.body.classList.add('outline'); });


