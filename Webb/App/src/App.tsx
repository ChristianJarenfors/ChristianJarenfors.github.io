import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [bird, setBird] = useState<Bird | null>(null);

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
      velocity: 0,
      gravity: 0.5,
      jump: -10,
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
        this.velocity = this.jump;
      },
      update: function () {
        if (canvasSetup) {
          this.velocity += this.gravity;
          this.y += this.velocity;

          if (this.y + this.radius > canvasSetup.height) {
            this.y = canvasSetup.height - this.radius;
            this.velocity = 0;
          } else if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.velocity = 0;
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
  }, [bird]);

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{loaded ? "bird y: " + bird?.y : "loading"}</p>
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
    </div>
  );
}

export default App;

interface Bird {
  x: number;
  y: number;
  radius: number;
  velocity: number;
  gravity: number;
  jump: number;
  draw: () => void;
  flap: () => void;
  update: () => void;
}
