/* =========================
   YOUTUBE PLAYER
========================= */

let player;
let playerReady = false;

/* carrega API do YouTube */

const tag = document.createElement('script');

tag.src =
  "https://www.youtube.com/iframe_api?origin=" +
  window.location.origin;

document.body.appendChild(tag);

/* função obrigatória da API */

function onYouTubeIframeAPIReady() {

  player = new YT.Player('youtube-player', {

    height: '1',
    width: '1',

    /* vídeo */
    videoId: 'GJNdR_MKuDM',

    playerVars: {

      autoplay: 0,
      controls: 0,

      loop: 1,
      playlist: 'GJNdR_MKuDM',

      playsinline: 1,

      origin: window.location.origin,

      /* trecho da música */

      start: 34,
      end: 75
    },

    events: {

      onReady: function () {

        playerReady = true;

        console.log('YouTube pronto ✅');
      },

      onError: function (err) {

        console.log('Erro YouTube:', err);
      }
    }
  });
}

/* =========================
   SPLASH BUTTON
========================= */

document
  .getElementById('splashBtn')
  .addEventListener('click', () => {

    /* fecha splash */

    const splash = document.getElementById('splash');

    splash.classList.add('hide');

    setTimeout(() => {

      splash.remove();

    }, 1000);

    /* toca música */

    if (!playerReady) {

      console.log('Player ainda carregando...');

      return;
    }

    try {

      player.setVolume(100);

      player.unMute();

      player.seekTo(34);

      player.playVideo();

      console.log('Tocando música 🎵');

    } catch (err) {

      console.log(err);
    }
});