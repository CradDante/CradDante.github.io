const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.focus();
  }
});


const musicPlayer = document.querySelector('.music-player');
const musicAudio = musicPlayer.querySelector('audio');
const musicStatus = musicPlayer.querySelector('.music-status');
musicAudio.addEventListener('play', () => {
  musicPlayer.classList.add('is-playing');
  musicStatus.textContent = '正在播放《荒》 · 徐大圣的 AI 音乐';
});
musicAudio.addEventListener('pause', () => {
  musicPlayer.classList.remove('is-playing');
  musicStatus.textContent = '已暂停，随时继续收听。';
});
musicAudio.addEventListener('ended', () => {
  musicPlayer.classList.remove('is-playing');
  musicStatus.textContent = '《荒》播放完毕，感谢收听。';
});
musicAudio.addEventListener('error', () => {
  musicPlayer.classList.remove('is-playing');
  musicStatus.textContent = '音乐暂时无法加载，请稍后重试。';
});
const musicStart = musicPlayer.querySelector('.music-start');
musicStart.addEventListener('click', () => {
  musicAudio.play().catch(() => {
    musicStatus.textContent = '播放失败，请检查网络后重试。';
  });
});
musicAudio.addEventListener('play', () => { musicStart.hidden = true; });

