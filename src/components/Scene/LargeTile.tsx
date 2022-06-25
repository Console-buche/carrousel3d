import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as React from "react";
import { Mesh, TextureLoader, Vector3 } from "three";
import { IPhotosResponse } from "../../hooks/types";

interface ILargeTileProps {
  activePhoto: IPhotosResponse;
}

let t = 0;
export function LargeTile(props: ILargeTileProps) {
  const ref = React.useRef<Mesh>(null);

  useFrame(({ camera }) => {
    if (!ref.current) {
      return;
    }
    t += 0.1;
    ref.current.position.y = Math.sin(t * 0.5) * 0.1 - 5;
  });

  const texture = React.useMemo(() => {
    return new TextureLoader().load(
      props.activePhoto.urls.regular,
      (tex) => tex
    );
  }, [props.activePhoto]);

  return (
    <group>
      <React.Suspense fallback={null}>
        <Text
          position={[-9, 0, -4]}
          rotation={[0, 0.9, 0]}
          color={"#EC2D2D"}
          fontSize={1}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font={
            "https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          }
        >
          {props.activePhoto.description}
        </Text>
      </React.Suspense>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[16, 12]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}
