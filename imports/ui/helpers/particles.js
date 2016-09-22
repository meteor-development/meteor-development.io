const initParticlesJs = () => {
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      color_random: false,
      shape: 'circle',
      opacity: {
        opacity: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: 3,
      size_random: true,
      nb: 50,
      line_linked: {
        enable_auto: false,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
      anim: {
        enable: true,
        direction: 'left',
        speed: 2,
      },
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 300,
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab', // "grab" of false
      line_linked: {
        opacity: 0.5,
      },
      events: {
        onclick: {
          enable: false,
          mode: 'push', // "push" or "remove"
          nb: 4,
        },
        onresize: {
          enable: false,
          mode: 'out', // "out" or "bounce"
          density_auto: false,
          density_area: 800,
        },
      },
    },
    /* Retina Display Support */
    retina_detect: true,
  });
};

export default initParticlesJs;
