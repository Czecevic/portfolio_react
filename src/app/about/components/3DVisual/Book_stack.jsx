/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\book_stack.glb 
Author: Paubr (https://sketchfab.com/paubr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/book-stack-90944ea5739248f6b707d6c2b0955c3b
Title: Book Stack
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Book(props) {
  const { nodes, materials } = useGLTF("./models/book_stack.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.cover}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.paper}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.cover}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.paper}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.cover}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.paper}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.cover}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.paper}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.cover}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.paper}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/book_stack.glb");
