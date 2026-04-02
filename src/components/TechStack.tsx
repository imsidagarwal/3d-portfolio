import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const pmTools = [
  { abbr: "JI", color: "#0052CC", name: "JIRA" },
  { abbr: "CO", color: "#172B4D", name: "Confluence" },
  { abbr: "MT", color: "#6264A7", name: "MS Teams" },
  { abbr: "XL", color: "#217346", name: "Excel" },
  { abbr: "AI", color: "#D97757", name: "Claude AI" },
  { abbr: "PP", color: "#B7472A", name: "PowerPoint" },
  { abbr: "NO", color: "#333333", name: "Notion" },
  { abbr: "PM", color: "#F04E37", name: "Program Mgmt" },
];

function createTextTexture(abbr: string, bgColor: string): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Circle background
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 4, 0, Math.PI * 2);
  ctx.fill();

  // White inner ring
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 14, 0, Math.PI * 2);
  ctx.stroke();

  // Abbreviation text
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${size * 0.32}px Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(abbr, size / 2, size / 2);

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
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} args={[0.15 * scale, scale, 0.275 * scale]} />
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

  const materials = useMemo(() =>
    pmTools.map(
      (tool) =>
        new THREE.MeshPhysicalMaterial({
          map: createTextTexture(tool.abbr, tool.color),
          roughness: 0.1,
          envMapIntensity: 0.8,
          clearcoat: 0.5,
          clearcoatRoughness: 0.1,
        })
    ),
    []
  );

  return (
    <div id="tech">
      <h5>My Skills &amp; Tool Proficiency</h5>
      <Canvas
        gl={{ antialias: true, stencil: false, depth: false, alpha: true }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onPointerDown={(e) =>
          e.target instanceof HTMLCanvasElement && e.target.setPointerCapture(e.pointerId)
        }
        style={{ width: "100%", height: "100vh" }}
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
