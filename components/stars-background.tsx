"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

function Stars() {
  const ref = useRef<THREE.Points>(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    const sizes = new Float32Array(3000)
    
    for (let i = 0; i < 3000; i++) {
      const radius = Math.random() * 30 + 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Varying star sizes for depth
      sizes[i] = Math.random() * 1.5 + 0.5
    }
    
    return { positions, sizes }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Very slow rotation for subtle movement
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#ffffff" : "#3b82f6"}
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.8 : 0.5}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export function StarsBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0e27] via-[#0d1117] to-black' 
          : 'bg-gradient-to-b from-blue-50 via-white to-blue-100'
      }`} />
      
      {/* Subtle Radial Glow */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.05)_0%,_transparent_50%)]'
          : 'bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_50%)]'
      }`} />
      
      {/* 3D Stars */}
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Stars />
      </Canvas>
      
      {/* Twinkling Overlay Stars */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-60' : 'opacity-30'}`}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-twinkle ${
              isDark ? 'bg-white' : 'bg-blue-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
