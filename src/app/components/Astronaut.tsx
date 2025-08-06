// // "use client";

// // import * as THREE from "three";
// // import React, { useRef } from "react";
// // import { useGLTF, useAnimations } from "@react-three/drei";
// // import { GLTF } from "three-stdlib";
// // import type { ThreeElements } from "@react-three/fiber";

// // type GLTFResult = GLTF & {
// //   nodes: {
// //     Cube001_0: THREE.SkinnedMesh;
// //     Cube005_0: THREE.SkinnedMesh;
// //     Cube002_0: THREE.SkinnedMesh;
// //     Plane_0: THREE.SkinnedMesh;
// //     Cube008_0: THREE.SkinnedMesh;
// //     Cube004_0: THREE.SkinnedMesh;
// //     Cube003_0: THREE.SkinnedMesh;
// //     Cube_0: THREE.SkinnedMesh;
// //     Cube009_0: THREE.SkinnedMesh;
// //     Cube011_0: THREE.SkinnedMesh;
// //     metarig_rootJoint: THREE.Bone;
// //   };
// //   materials: {
// //     ["AstronautFallingTexture.png"]: THREE.MeshBasicMaterial;
// //   };
// // };

// // type ActionName = "Idle";
// // type GLTFActions = Record<ActionName, THREE.AnimationAction>;

// // export function Astronaut(props: ThreeElements["group"]) {
// //   const group = useRef<THREE.Group>(null!);
// //   const { nodes, materials, animations } = useGLTF(
// //     "/models/tenhun_falling_spaceman_fanart.glb"
// //   ) as unknown as GLTFResult;
// //   const { actions } = useAnimations(animations, group);
// //   return (
// //     <group ref={group} {...props} dispose={null}>
// //       <group name="Sketchfab_Scene">
// //         <group
// //           name="Sketchfab_model"
// //           rotation={[-Math.PI / 2, 0, 0]}
// //           scale={0.193}
// //         >
// //           <group name="Root">
// //             <group name="metarig">
// //               <primitive object={nodes.metarig_rootJoint} />
// //               <skinnedMesh
// //                 name="Cube001_0"
// //                 geometry={nodes.Cube001_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube001_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube005_0"
// //                 geometry={nodes.Cube005_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube005_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube002_0"
// //                 geometry={nodes.Cube002_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube002_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Plane_0"
// //                 geometry={nodes.Plane_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Plane_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube008_0"
// //                 geometry={nodes.Cube008_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube008_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube004_0"
// //                 geometry={nodes.Cube004_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube004_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube003_0"
// //                 geometry={nodes.Cube003_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube003_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube_0"
// //                 geometry={nodes.Cube_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube009_0"
// //                 geometry={nodes.Cube009_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube009_0.skeleton}
// //               />
// //               <skinnedMesh
// //                 name="Cube011_0"
// //                 geometry={nodes.Cube011_0.geometry}
// //                 material={materials["AstronautFallingTexture.png"]}
// //                 skeleton={nodes.Cube011_0.skeleton}
// //               />
// //               <group name="Cube001" />
// //               <group name="Cube005" />
// //               <group name="Cube002" />
// //               <group name="Plane" />
// //               <group name="Cube008" />
// //               <group name="Cube004" />
// //               <group name="Cube003" />
// //               <group name="Cube" />
// //               <group
// //                 name="Cube009"
// //                 rotation={[-2.708, 0.013, -1.447]}
// //                 scale={1.307}
// //               />
// //               <group name="Cube011" />
// //             </group>
// //           </group>
// //         </group>
// //       </group>
// //     </group>
// //   );
// // }

// // useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");

// import * as THREE from "three";
// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
// import type { ThreeElements } from "@react-three/fiber";

// type GLTFResult = GLTF & {
//   nodes: {
//     Cube001_0: THREE.SkinnedMesh;
//     Cube005_0: THREE.SkinnedMesh;
//     Cube002_0: THREE.SkinnedMesh;
//     Plane_0: THREE.SkinnedMesh;
//     Cube008_0: THREE.SkinnedMesh;
//     Cube004_0: THREE.SkinnedMesh;
//     Cube003_0: THREE.SkinnedMesh;
//     Cube_0: THREE.SkinnedMesh;
//     Cube009_0: THREE.SkinnedMesh;
//     Cube011_0: THREE.SkinnedMesh;
//     metarig_rootJoint: THREE.Bone;
//   };
//   materials: {
//     ["AstronautFallingTexture.png"]: THREE.MeshBasicMaterial;
//   };
// };

// type ActionName = "Idle";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;

// export function Astronaut(props: ThreeElements["group"]) {
//   const group = useRef<THREE.Group>(null);
//   const { nodes, materials, animations } = useGLTF(
//     "/models/tenhun_falling_spaceman_fanart.glb"
//   ) as unknown as GLTFResult;
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     if (animations.length > 0) {
//       actions[animations[0].name];
//     }
//   }, [actions, animations]);
//   return (
//     <group
//       ref={group}
//       {...props}
//       dispose={null}
//       rotation={[-Math.PI / 2, -0.2, 2.2]}
//       scale={props.scale || 0.3}
//       position={props.position || [1.3, -1, 0]}
//     >
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model">
//           <group name="Root">
//             <group name="metarig">
//               <primitive object={nodes.metarig_rootJoint} />
//               <skinnedMesh
//                 name="Cube001_0"
//                 geometry={nodes.Cube001_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube001_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube005_0"
//                 geometry={nodes.Cube005_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube005_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube002_0"
//                 geometry={nodes.Cube002_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube002_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Plane_0"
//                 geometry={nodes.Plane_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Plane_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube008_0"
//                 geometry={nodes.Cube008_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube008_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube004_0"
//                 geometry={nodes.Cube004_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube004_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube003_0"
//                 geometry={nodes.Cube003_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube003_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube_0"
//                 geometry={nodes.Cube_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube009_0"
//                 geometry={nodes.Cube009_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube009_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube011_0"
//                 geometry={nodes.Cube011_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube011_0.skeleton}
//               />
//               <group name="Cube001" />
//               <group name="Cube005" />
//               <group name="Cube002" />
//               <group name="Plane" />
//               <group name="Cube008" />
//               <group name="Cube004" />
//               <group name="Cube003" />
//               <group name="Cube" />
//               <group
//                 name="Cube009"
//                 rotation={[-2.708, 0.013, -1.447]}
//                 scale={1.307}
//               />
//               <group name="Cube011" />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");

"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: wallmasterr (https://sketchfab.com/wallmasterr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5
Title: Tenhun Falling spaceman (FanArt)
*/

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
import { useMotionValue, useSpring } from "motion/react";

type GLTFResult = GLTF & {
  nodes: {
    Cube001_0: THREE.SkinnedMesh;
    Cube005_0: THREE.SkinnedMesh;
    Cube002_0: THREE.SkinnedMesh;
    Plane_0: THREE.SkinnedMesh;
    Cube008_0: THREE.SkinnedMesh;
    Cube004_0: THREE.SkinnedMesh;
    Cube003_0: THREE.SkinnedMesh;
    Cube_0: THREE.SkinnedMesh;
    Cube009_0: THREE.SkinnedMesh;
    Cube011_0: THREE.SkinnedMesh;
    metarig_rootJoint: THREE.Object3D;
  };
  materials: {
    "AstronautFallingTexture.png": THREE.MeshStandardMaterial;
  };
};

type AstronautProps = ThreeElements["group"] & {
  scale?: number;
  position?: [number, number, number];
};

export function Astronaut({
  scale = 0.3,
  position = [1.3, -1, 0],
  ...props
}: AstronautProps) {
  const group = useRef<THREE.Group>(null!);

  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!animations.length) return;

    const clip = animations[0];
    const action = actions?.[clip.name] ?? null;

    action?.reset().fadeIn(0.3).play();

    return () => {
      if (action) {
        action.fadeOut(0.2);
        action.stop();
      }
    };
  }, [actions, animations]);

  const y = useMotionValue(5);
  const ySpring = useSpring(y, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    const g = group.current;
    if (g) g.position.y = ySpring.get();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={scale}
      position={position}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={nodes.Cube005_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube005_0.skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube002_0.skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={nodes.Cube008_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube008_0.skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={nodes.Cube004_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube004_0.skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={nodes.Cube003_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube003_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube_0.skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={nodes.Cube009_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube009_0.skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube011_0.skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
