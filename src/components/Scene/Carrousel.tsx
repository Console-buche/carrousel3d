import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as React from "react";
import { Group } from "three";
import { IPhotosResponse } from "../../hooks/types";
import { Tile } from "./Tile";

interface ICarrouselProps {
  photos: IPhotosResponse[];
  onClick: (photo: IPhotosResponse) => void;
}

export function Carrousel(props: ICarrouselProps) {
  const scroll = useScroll();
  const ref = React.useRef<Group>(null);
  const groupCount = 5;

  const { photos } = props;

  useFrame(() => {
    if (ref.current) {
      // TODO : loop / mod de l'offset
      ref.current.rotation.y += scroll.offset;
    }
  });

  const handleTestclick = (prop: IPhotosResponse) => {
    props.onClick(prop);
  };

  return (
    <group ref={ref}>
      {photos.map((photo, index) => (
        <Tile
          radius={5}
          photoCount={photos.length}
          photoGroup={Math.floor(index / (photos.length / groupCount))}
          key={index}
          photo={photo}
          photoIndex={index}
          onClick={handleTestclick}
        />
      ))}
    </group>
  );
}
