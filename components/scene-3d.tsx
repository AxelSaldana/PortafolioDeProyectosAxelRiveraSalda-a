"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ArchitectureNodes() {
    const count = 40;
    const connectionsForNode = 3;

    // Generate random node positions
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push(new THREE.Vector3(
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ));
        }
        return temp;
    }, []);

    // Generate lines connecting nodes
    const lines = useMemo(() => {
        const points = [];
        for (let i = 0; i < count; i++) {
            // Connect each node to nearest neighbors or random ones
            // For visual "chaos" but structure, random is okay for now
            for (let j = 0; j < connectionsForNode; j++) {
                const targetIndex = Math.floor(Math.random() * count);
                if (targetIndex !== i) {
                    points.push(nodes[i]);
                    points.push(nodes[targetIndex]);
                }
            }
        }
        return points;
    }, [nodes]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Nodes */}
            {nodes.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
                </mesh>
            ))}

            {/* Connections using LineSegments for better performance than individual Line components if possible, 
          but for simplicity in React Three Fiber, we can use <Line> or standard THREE.LineSegments */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[new Float32Array(lines.flatMap(v => [v.x, v.y, v.z])), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#6366f1" transparent opacity={0.3} />
            </lineSegments>
        </group>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <ArchitectureNodes />

                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            {/* Gradient Overlay for seamless integration */}
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
