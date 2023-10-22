import React from 'react'
import {useState ,useEffect,Suspense} from 'react'
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF} from '@react-three/drei'
const Computers = ({ismobile}) => {
  const computer = useGLTF('./computer/scene.gltf')
  return (
   <mesh>
    
    <hemisphereLight intensity={0.15} groundColor="black"/>
    <pointLight intensity={1}/>
    <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize = {1024}></spotLight>
    <primitive object={computer.scene} 
    scale={ ismobile ? 0.7 : 0.75}
    position={[ ismobile ? [0.-3,-2.2] :0,-3.25,-1.5]}
    rotation={[-0.01,-0.2,-0.1]}
    
    /> 

   </mesh>
  )
}
const ComputersCanvas =()=>{
  const[ismobile , setismobile] = useState(false);
  useEffect(()=>{
    const mediaquery = window.matchMedia('(max-width : 500px)');
    setismobile(mediaquery.matches);

    const handlemediaquerychange = ((event)=>{
      setismobile(event.matches);

    mediaquery.addEventListener('change',handlemediaquerychange);
    return()=>{
      mediaquery.removeEventListener('change',handlemediaquerychange);
    }
    ,[]})


  })
  return(
    <Canvas frameloop="demand" shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}></OrbitControls>
        <Computers ismobile = {ismobile}/>
      </Suspense>
      <Preload all></Preload>
    </Canvas>
  )
}

export default ComputersCanvas