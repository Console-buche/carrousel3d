import { IPhotosResponse } from "../../hooks/types";

export type allPhotos = { data: IPhotosResponse[]; id: number }[];

export enum ViewMode {
  above = "above",
  side = "side",
}
