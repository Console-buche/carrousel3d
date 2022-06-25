import { Box, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { IPhotosResponse } from "../../hooks/types";
import { Tile } from "./Tile";
import { Cam } from "./Cam";
import { Carrousel } from "./Carrousel";
import { allPhotos, ViewMode } from "./types";
import { LargeTile } from "./LargeTile";

interface ISceneProps {
  photos: IPhotosResponse[];
}

export function Scene(props: ISceneProps) {
  const { photos } = props;
  const [view, setViewMode] = React.useState<ViewMode>(ViewMode.above);
  const [activePhoto, setActivePhoto] = React.useState<IPhotosResponse>();

  const handleClickScene = (photo: IPhotosResponse) => {
    setActivePhoto(photo);
  };

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ScrollControls pages={3}>
        <Carrousel photos={photos} onClick={handleClickScene} />
        {activePhoto && <LargeTile activePhoto={activePhoto} />}
      </ScrollControls>
      <Cam viewMode={view} />
      <fog attach="fog" args={["white", 6, 16]} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
