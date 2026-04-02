import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";

const pmTools = [
  { name: "JIRA", color: "#0052CC" },
  { name: "Excel", color: "#217346" },
  { name: "MS Teams", color: "#6264A7" },
  { name: "Claude AI", color: "#CF6A3A" },
  { name: "Confluence", color: "#0052CC" },
  { name: "PowerPoint", color: "#B7472A" },
  { name: "Notion", color: "#111111" },
  { name: "Agile", color: "#E34234" },
];

function createTextTexture(name: string, color: string): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // White circle background — matches original white balls
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
  ctx.fill();

  // Light grey border ring
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
  ctx.stroke();

  // Tool name text in brand color
  const isLong = name.length > 7;
  const fontSize = isLong ? size * 0.13 : size * 0.18;
  ctx.fillStyle = color;
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name, size / 2, size / 2);

  return new THREE.CanvasTexture(canvas);
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );
    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={material} />
      <BallCollider args={[scale]} />
    </RigidBody>
  );
}

type PointerProps = { vec?: THREE.Vector3; isActive: boolean };

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody | null>(null);
  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const { width, height } = viewport.getCurrentViewport();
    ref.current?.setNextKinematicTranslation(
      vec.set((pointer.x * width) / 2, (pointer.y * height) / 2, 0)
    );
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[3]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const tech = document.getElementById("tech");
      if (tech) {
        const rect = tech.getBoundingClientRect();
        setIsActive(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(
    () =>
      pmTools.map(
        (tool) =>
          new THREE.MeshPhysicalMaterial({
            map: createTextTexture(tool.name, tool.color),
            roughness: 0,
            envMapIntensity: 1,
            clearcoat: 1,
            clearcoatRoughness: 0,
          })
      ),
    []
  );

  return (
    <div id="tech" style={{ position: "relative" }}>
      {/* Background title — same style as original */}
      <h5
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          pointerEvents: "none",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "0.05em",
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        MY TOOL PROFICIENCY
      </h5>
      <Canvas
        gl={{ antialias: true, stencil: false, depth: false, alpha: true }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onPointerDown={(e) =>
          e.target instanceof HTMLCanvasElement &&
          e.target.setPointerCapture(e.pointerId)
        }
        style={{ width: "100%", height: "100vh", position: "relative", zIndex: 2 }}
      >
        <ambientLight intensity={0.5} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              isActive={isActive}
              material={materials[i % materials.length]}
            />
          ))}
        </Physics>
        <Environment preset="dawn" />
        <EffectComposer>
          <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
