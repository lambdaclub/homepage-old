// particlesJS("particles-js",
//   {"particles":
//     {"number":
//       {
//         "value":60,
//         "density":
//           {
//             "enable":true,
//             "value_area":631.3181133058181}
//           },
//         "color":
//           {"value":"#7d1959"},
//         "shape":{"type":"edge","stroke":{"width":1,"color":"#111dde"},
//         "polygon":{"nb_sides":3},"image":{"src":"images/14/pic.svg","width":100,"height":100}},
//         "opacity":{"value":0.49716301422833176,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
//         "size":{"value":5.7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
//         "line_linked":{"enable":true,"distance":160.3412060865523,"color":"#ec2a3b","opacity":0.4008530152163807,"width":1},
//         "move":{"enable":true,"speed":3,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":1763.753266952075,"rotateY":1603.4120608655228}}},
//         "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.156297557645007}},
//         "bubble":{"distance":400,"size":40,"duration":2,"opacity":0.09744926547616141,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
//         "retina_detect":true});


particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 631.3181133058181
        }
      },
      "color": {
        "value": "#541446"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 1,
          "color": "#a989a2"
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a989a2",
        "opacity": 0.7,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924"
    }
  }

);
