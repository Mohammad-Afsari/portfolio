import Particles from "react-tsparticles";
import '../styles/Particles.css'

const ParticlesBackground = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return ( 
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "background": {
                  "color": {
                    "value": "#15191e"
                  },
                  "position": "50% 50%",
                  "repeat": "no-repeat",
                  "size": "cover"
                },
                "fullScreen": {
                  "zIndex": 1
                },
                "interactivity": {
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "bubble"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 400,
                      "duration": 0.3,
                      "opacity": 1,
                      "size": 4
                    },
                    "grab": {
                      "distance": 400,
                      "links": {
                        "opacity": 0.5
                      }
                    }
                  }
                },
                "motion": {
                  "reduce": {
                    "factor": 1
                  }
                },
                "particles": {
                  "links": {
                    "color": {
                      "value": "#ffffff"
                    },
                    "distance": 500,
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "angle": {
                      "offset": 30,
                      "value": 0
                    },
                    "attract": {
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "top",
                    "enable": true,
                    "gravity": {
                      "acceleration": 0,
                      "maxSpeed": 1
                    },
                    "path": {},
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "speed": 1,
                    "spin": {}
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "area": 1000
                    },
                    "value": 50
                  },
                  "opacity": {
                    "random": {
                      "enable": true,
                      "minimumValue": 1
                    },
                    "value": {
                      "min": 0.1,
                      "max": 1
                    },
                    "animation": {
                      "speed": 1,
                      "minimumValue": 0.1
                    }
                  },
                  "orbit": {
                    "animation": {
                      "speed": 0.5
                    }
                  },
                  "size": {
                    "random": {
                      "enable": true
                    },
                    "value": {
                      "min": 1,
                      "max": 3
                    },
                    "animation": {
                      "speed": 1,
                      "minimumValue": 0.1
                    }
                  }
                }
              }}
            />
        );
    };

 
export default ParticlesBackground;