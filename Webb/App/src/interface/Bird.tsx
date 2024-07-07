interface Bird {
  x: number;
  y: number;
  angle: number;
  radius: number;
  velocityY: number;
  velocityX: number;
  gravity: number;
  jump: number;
  draw: () => void;
  flap: () => void;
  update: () => void;
}
export default Bird;
