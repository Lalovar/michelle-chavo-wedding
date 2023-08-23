import loadingHeart from "../public/loading.gif";

export default function Loading() {
  return (
    <div class="loading">
      <img src={loadingHeart.src} />
      <br />
      <p>Cargando...</p>
    </div>
  );
}
