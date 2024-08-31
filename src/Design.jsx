import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="w-full h-full">
      <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Design;
















// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// const Design = () => {
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     //await loadFull(engine);
//     await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);


// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Design = ({ id, options, className }) => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//   return (
//     <div className="w-full h-full">
//       <Particles
//       id={id}
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={options}
//       className={className}
//         // className="w-full h-screen"
//         // id="tsparticles"
//         // init={particlesInit}
//         // loaded={particlesLoaded}
//         particleOptions={{
//           fullScreen: false,
//           background: {
//             // color: {
//             //   value: "#0d47a1",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",

//                 distance: 400,
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 120,
//               enable: true,
//               opacity: 0.6,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };

// export default Design;















// import React from 'react'
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// //import { loadFull } from "tsparticles"; // if you are going to use loadFull, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use loadSlim, install the "tsparticles-slim" package too.

// const Design = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
       
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);
//   return (
//     <div>
//       <Particles
//             // className="w-full h-screen" // added
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
            
//             options={{
//                 // fullScreen : false,// added
//                 background: {
//                     color: {
//                         value: "black",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push", 
//                         },
//                         onHover: {
//                             enable: true,
//                             // mode: "repulse",
//                             mode:"grab",
//                             distance:400, // added
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4,
//                         },
//                         grab:{                  // added this grab page
//                             distance : 200,
//                             link_linked :{
//                                 opacity : 0.5,
//                             }
//                         }
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     move: {
//                         direction: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 6,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 3 }, // max value was 5
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     </div>
//   )
// }

// export default Design










// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles";

// const Design = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);
//   return (
//     <div className="w-full h-full">
//       <Particles
//         className="w-full h-screen"
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           fullScreen: false,
//           background: {
//             // color: {
//             //   value: "#0d47a1",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",

//                 distance: 400,
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 120,
//               enable: true,
//               opacity: 0.6,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };

// export default Design;

// mode: "grab",
// grab: {
//   distance: 300,
//   line_linked: {
//     opacity: 0.5,
//   },
// },










// import React from 'react'
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// const Design = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
       
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);
//   return (
//     <div className="w-full h-full">
//       <Particles
//         className="w-full h-screen"
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           fullScreen: false,
//           background: {
//             // color: {
//             //   value: "#0d47a1",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",

//                 distance: 400,
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 120,
//               enable: true,
//               opacity: 0.6,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   )
// }

// export default Design


// import React from 'react'
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use loadFull, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use loadSlim, install the "tsparticles-slim" package too.

// const Design = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);
//   return (
//     <div className="w-full h-full">
//       <Particles
//         className="w-full h-screen"
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           fullScreen: false,
//           background: {
//             // color: {
//             //   value: "#0d47a1",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",

//                 distance: 400,
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 120,
//               enable: true,
//               opacity: 0.6,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };



// const Design = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
       
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);
//   return (
//     <div className="w-full h-full">
//       <Particles
//         className="w-full h-screen"
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           fullScreen: false,
//           background: {
//             // color: {
//             //   value: "#0d47a1",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",

//                 distance: 400,
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 120,
//               enable: true,
//               opacity: 0.6,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   )
// }

// export default Design