/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 10.5,
      anim: {
        enable: false,
        speed: 9,
        opacity_min: 0,
        sync: false
      }
    },
    size: 2,
    size_random: false,
    nb: 200,
    line_linked: {
      enable_auto: false,
      distance: 100,
      color: '#ccc',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: false,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: false, // "grab" or false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: false,
        mode: 'bounce', // "out" or "bounce"
        density_auto: true,
        density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true

});