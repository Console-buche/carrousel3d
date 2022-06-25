import { ViewMode } from "../types";
type CamOptions = {
  position: [number, number, number];
  fov: number;
};

export const getPosition = (viewMode: ViewMode): CamOptions => {
  switch (viewMode) {
    case ViewMode.above:
      return {
        fov: 90,
        position: [0, 3.5, 5.5],
      };
    case ViewMode.side:
      return {
        fov: 30,
        position: [-9, 1, -5],
      };
    default:
      return {
        fov: 75,
        position: [0, 0, 0],
      };
  }
};
