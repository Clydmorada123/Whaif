const giftBox = document.getElementById('giftBox');
const videoContainer = document.getElementById('videoContainer');

giftBox.addEventListener('click', () => {
  giftBox.classList.add('open');

  setTimeout(() => {
    videoContainer.classList.add('show-video');
  }, 900);
});
