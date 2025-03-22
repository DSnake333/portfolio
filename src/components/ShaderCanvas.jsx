import React, { useEffect, useRef } from "react";

function ShaderCanvas({ darkMode }) {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const animationRef = useRef(null);
  const darkModeRef = useRef(darkMode);

  useEffect(() => {
    darkModeRef.current = darkMode;
  }, [darkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    glRef.current = gl;

    // WebGL context loss handling
    const handleContextLoss = (event) => {
      event.preventDefault();
      console.error("WebGL context lost");
    };
    canvas.addEventListener("webglcontextlost", handleContextLoss);

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
          gl_Position = vec4(a_position, 0, 1);
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision mediump float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform bool uDarkMode;

      float noise(vec2 uv) {
          return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float wavePattern(vec2 uv, float time) {
          float frequency = 5.0;
          float amplitude = 0.15;
          return sin(uv.x * frequency + time) * amplitude;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / uResolution.xy;

          float waveTime = uTime * 1.0;
          float waveOffset = sin(uv.x * 2.0 + waveTime) + noise(uv * 2.0);
          float clothTexture = smoothstep(-0.3, 0.3, waveOffset);

          vec3 baseColor = vec3(0.8);
          vec3 finalColor = baseColor + vec3(clothTexture + wavePattern(uv, waveTime));

          if (uDarkMode) {
              finalColor = 1.0 - finalColor;
          }

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    // Get attribute and uniform locations
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const resolutionUniformLocation = gl.getUniformLocation(program, "uResolution");
    const timeUniformLocation = gl.getUniformLocation(program, "uTime");
    const darkModeUniformLocation = gl.getUniformLocation(program, "uDarkMode");

    // Create position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // Resize function
    const resizeCanvasToDisplaySize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = Math.floor(canvas.clientWidth * pixelRatio);
      const height = Math.floor(canvas.clientHeight * pixelRatio);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }
    };

    // Initial resize
    resizeCanvasToDisplaySize();
    window.addEventListener("resize", resizeCanvasToDisplaySize);

    // Set initial dark mode value
    gl.uniform1i(darkModeUniformLocation, darkModeRef.current ? 1 : 0);

    // Animation function with frame rate limit
    let lastFrameTime = 0;
    const fpsLimit = 60;

    const render = (time) => {
      const deltaTime = time - lastFrameTime;
      if (deltaTime < 1000 / fpsLimit) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = time;

      gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform1i(darkModeUniformLocation, darkModeRef.current ? 1 : 0);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(render);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvasToDisplaySize);
      canvas.removeEventListener("webglcontextlost", handleContextLoss);
    };
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (glRef.current && programRef.current) {
      const gl = glRef.current;
      const darkModeUniformLocation = gl.getUniformLocation(programRef.current, "uDarkMode");
      gl.useProgram(programRef.current);
      gl.uniform1i(darkModeUniformLocation, darkMode ? 1 : 0);
    }
  }, [darkMode]);

  return <canvas id="shaderCanvas" ref={canvasRef}></canvas>;
}

export default ShaderCanvas;
