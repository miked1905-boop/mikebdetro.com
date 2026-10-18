const discord = document.querySelector('#copy-discord');
const toast = document.querySelector('#toast');
let toastTimer;
discord.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(discord.dataset.copy);
    discord.querySelector('.copy-label').textContent = 'COPIED ✓';
    toast.textContent = 'Discord username copied: return3';
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove('visible'); discord.querySelector('.copy-label').textContent = 'COPY ↗'; }, 2600);
  } catch {
    toast.textContent = 'Discord: @return3';
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 5000);
  }
});
