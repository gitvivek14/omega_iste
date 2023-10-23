import React from 'react'
import {useState ,useEffect,Suspense} from 'react'
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF ,Decal , Float , useTexture} from '@react-three/drei'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
   <primitive object={earth.scene} scale={2.5} 
   position-y={0} 
   rotation-y={0}></primitive>
  )
}
const EarthCanvas = ()=>{
  return(
    <Canvas shadows frameloop='demand'
    gl={{preserveDrawingBuffer:true}} 
    camera={{fov:45 ,near:0.1 , far:200 , position:[-4,3,6 ]}}>
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls autoRotate
        enableZoom={false} maxPolarAngle={Math.PI/2}
         minPolarAngle={Math.PI/2}></OrbitControls>
         <Earth></Earth>
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas