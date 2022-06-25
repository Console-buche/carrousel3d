import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as React from "react";
import { DoubleSide, Mesh, TextureLoader, Vector3 } from "three";
import { IPhotosResponse } from "../../hooks/types";

interface ICaisseProps {
  photo: IPhotosResponse;
  photoCount: number;
  photoIndex: number;
  radius: number;
  photoGroup: number;
  onClick: (photo: IPhotosResponse) => void;
}

export function Tile({
  photo,
  radius,
  photoIndex,
  photoCount,
  photoGroup,
  onClick,
}: ICaisseProps) {
  const ref = React.useRef<Mesh>(null);
  const [isActive, setIsActive] = React.useState(false);

  const texture = React.useMemo(() => {
    return new TextureLoader().load(photo.urls.regular, (tex) => tex);
  }, []);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.position.x =
        radius * Math.cos((2 / photoCount) * photoIndex * Math.PI);
      ref.current.position.y = photoGroup / 4;
      ref.current.position.z =
        radius * Math.sin((2 / photoCount) * photoIndex * Math.PI);
    }
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.lookAt(new Vector3(0, ref.current.position.y, 0));
      ref.current.rotation.y -= Math.PI / 2;
    }
  });

  const getScale = (): [number, number, number] => {
    return isActive ? [1.2, 1.2, 1.2] : [1.0, 1.0, 1.0];
  };

  const handleClick = (photo: IPhotosResponse) => () => {
    onClick(photo);
  };

  return (
    <mesh
      ref={ref}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      scale={getScale()}
      onClick={handleClick(photo)}
    >
      <planeBufferGeometry args={[0.8, 0.5]} />
      <meshBasicMaterial side={DoubleSide} map={texture} />
    </mesh>
  );
}
