import { useGetPhotos } from "../hooks/useGetPhotos";
import { Scene } from "./Scene/Scene";

interface IContainerProps {}

export function Container(props: IContainerProps) {
  const photosPage1 = useGetPhotos({ page: 1, per_page: 30 });
  const photosPage2 = useGetPhotos({ page: 2, per_page: 30 });
  const photosPage3 = useGetPhotos({ page: 3, per_page: 30 });

  if (
    !photosPage1.isSuccess ||
    !photosPage2.isSuccess ||
    !photosPage3.isSuccess
  ) {
    return null;
  }

  const allPhotos = [
    ...photosPage1.data,
    ...photosPage2.data,
    ...photosPage3.data,
  ];

  return (
    <div>
      <Scene photos={allPhotos} />
    </div>
  );
}
