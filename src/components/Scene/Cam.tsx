import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as React from "react";
import { Camera, Vector3 } from "three";
import { getPosition } from "./helpers/getViewMode";
import { ViewMode } from "./types";

interface ICamProps {
  viewMode: ViewMode;
}

const step = 0.1;

export function Cam(props: ICamProps) {
  const ref = React.useRef<Camera>(null);

  if (ref.current) {
    ref.current.lookAt(new Vector3(0, -2, ref.current.position.z));
  }

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }

    const { x, y, z } = ref.current.rotation;
    const targetRot = new Vector3(x + -1 * mouse.y, y + mouse.y, z + mouse.x);

    const move = new Vector3(x, y).lerp(targetRot, step);

    ref.current.rotation.x = move.y - 0.75;
    ref.current.rotation.y = 0;
    ref.current.rotation.z = move.z * 0.5;
  });

  return (
    <PerspectiveCamera ref={ref} makeDefault {...getPosition(props.viewMode)} />
  );
}
