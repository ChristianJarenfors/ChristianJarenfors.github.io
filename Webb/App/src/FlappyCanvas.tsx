import { useEffect, useState } from "react";
import logo from "./logo.svg";
import Bird from "./interface/Bird";

function FlappyCanvas() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [bird, setBird] = useState<Bird | null>(null);

  // Inside your component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [canvasPosition, setCanvasPosition] = useState({ left: 0, top: 0 });

  // Inside your component
  const [angle, setAngle] = useState(0);
  // useEffect hook for mouse movement
  useEffect(() => {
    const canvas = document.getElementById("gameCanvas"); // Make sure to use your actual canvas ID

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate the mouse position within the canvas
      const birdPos = birdPosition();
      const mouseX = event.clientX - birdPos.x + (bird ? bird.radius : 0); // adjusted for radius
      const mouseY = event.clientY - birdPos.y + (bird ? bird.radius : 0); // adjusted for radius
      setMousePosition({
        x: mouseX,
        y: mouseY,
      });

      const rect = canvas
        ? canvas.getBoundingClientRect()
        : { left: 0, top: 0 };
      setCanvasPosition({ left: rect.left, top: rect.top });

      const angle = Math.atan2(mouseY, mouseX);

      setAngle(angle);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const birdPosition: () => { x: number; y: number } = () => {
    return {
      x: (bird ? bird?.x : 0) + (canvasPosition ? canvasPosition.left : 0),
      y: (bird ? bird?.y : 0) + (canvasPosition ? canvasPosition.top : 0),
    };
  };

  useEffect(() => {
    // Game setup
    const canvasSetup = document.getElementById(
      "gameCanvas"
    ) as HTMLCanvasElement;
    const ctxSetup = canvasSetup.getContext("2d");
    setCanvas(canvasSetup);
    setCtx(ctxSetup);

    const birdToBeSaved: Bird = {
      x: 50,
      y: canvasSetup.height / 2,
      radius: 20,
      velocityY: 0,
      velocityX: 0,
      gravity: 0.5,
      jump: -10,
      angle: 0,
      draw: function () {
        if (ctxSetup) {
          ctxSetup.beginPath();
          ctxSetup.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctxSetup.fillStyle = "red";
          ctxSetup.fill();
          ctxSetup.closePath();
        }
      },
      flap: function () {
        // Calculate difference between bird and mouse positions
        // const birdPos = birdPosition();
        // const diffX = mousePosition.x;
        // const diffY = mousePosition.y;

        // // Calculate angle to the mouse position
        // this.angle = Math.atan2(diffY, diffX);

        // // Set a flap strength (you may want to set this lower or higher)
        // const flapStrength = 10;

        // // Change velocity to "flap" towards mouse position
        // // this.velocity = this.jump;

        // // Move bird towards the mouse position by changing x and y based on the angle
        // this.velocityY += Math.sin(angle.y) * flapStrength;
        // this.velocityX += Math.cos(angle.x) * flapStrength;
        // Set a flap strength (you may want to set this lower or higher)
        const flapStrength = 10;

        // Change velocity to "flap" towards mouse position
        this.velocityY += Math.sin(angle) * flapStrength; // Use the angle in radians
        this.velocityX += Math.cos(angle) * flapStrength; // Use the angle in radians
      },

      update: function () {
        if (canvasSetup) {
          this.velocityY += this.gravity;
          this.y += this.velocityY * 10;
          this.x += this.velocityX;
          if (this.y + this.radius > canvasSetup.height) {
            this.y = canvasSetup.height - this.radius;
            this.velocityY = 0;
            this.velocityX += this.velocityX > 0 ? -0.1 : 0.1;
          } else if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.velocityY = 0;
            this.velocityX += this.velocityX > 0 ? -0.1 : 0.1;
          }
        }
      },
    };

    setBird(birdToBeSaved);
    setLoaded(true);
  }, []);
  useEffect(() => {
    // Controls
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" && bird) {
        bird.flap();
        console.info("flap");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [bird, mousePosition, canvasPosition, angle]);

  useEffect(() => {
    if (loaded && bird && ctx && canvas) {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bird.update();
        bird.draw();
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [loaded, bird, ctx, canvas]);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{loaded ? "bird y: " + bird?.y : "loading"}</p>
      <p>{loaded ? "bird x: " + bird?.x : "loading"}</p>mousePosition
      <p>
        {loaded && mousePosition && bird
          ? "mousePosition y: " + mousePosition.y
          : "loading"}{" "}
        ,{" "}
        {loaded && mousePosition && bird
          ? "velocityY y: " + bird?.velocityY
          : "loading"}
      </p>
      <p>
        {loaded && mousePosition && bird
          ? "mousePosition x: " + mousePosition.x
          : "loading"}{" "}
        ,{" "}
        {loaded && mousePosition && bird
          ? "velocityX x  : " + bird?.velocityX
          : "loading"}
      </p>
      <p>
        {loaded && mousePosition && bird
          ? "canvasPosition left: " + canvasPosition?.left
          : "loading"}{" "}
        ,{" "}
        {loaded && angle
          ? "canvasPosition top: " + canvasPosition?.top
          : "loading"}
      </p>
      <p>
        {angle
          ? "x: " + Math.cos(angle) + ", y: " + Math.sin(angle)
          : "loading"}
      </p>
      <canvas
        style={{ backgroundColor: "aqua" }}
        id="gameCanvas"
        width="480"
        height="320"
      ></canvas>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default FlappyCanvas;
