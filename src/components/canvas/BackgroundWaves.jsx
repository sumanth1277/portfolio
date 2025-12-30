import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    float strength = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0,2,4)).r;
    float wave = sin(vUv.x * 10.0 + uTime) * 0.1;
    vec3 finalColor = uColor * (vUv.y + wave) * strength;
    gl_FragColor = vec4(finalColor * 0.2, 1.0);
  }
`;

export default function BackgroundWaves() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#4338ca") } // Deep Purple/Blue
        }}
        transparent
      />
    </mesh>
  );
}