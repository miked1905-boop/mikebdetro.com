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

const headerDiscord = document.querySelector('#header-discord');
const discordHandle = document.querySelector('#discord-handle');
headerDiscord.addEventListener('click', () => {
  const open = headerDiscord.getAttribute('aria-expanded') !== 'true';
  headerDiscord.setAttribute('aria-expanded', String(open));
  discordHandle.hidden = !open;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { headerDiscord.setAttribute('aria-expanded','false'); discordHandle.hidden = true; }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.discord-menu')) { headerDiscord.setAttribute('aria-expanded','false'); discordHandle.hidden = true; }
});
