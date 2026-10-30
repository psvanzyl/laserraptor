const SIZE = 156;

const FACES = [
  { key: "front", color: "#ff2e88", transform: `translateZ(${SIZE / 2}px)` },
  { key: "back", color: "#3ce9ff", transform: `rotateY(180deg) translateZ(${SIZE / 2}px)` },
  { key: "right", color: "#b6ff3d", transform: `rotateY(90deg) translateZ(${SIZE / 2}px)` },
  { key: "left", color: "#7c4dff", transform: `rotateY(-90deg) translateZ(${SIZE / 2}px)` },
  { key: "top", color: "#ffb43d", transform: `rotateX(90deg) translateZ(${SIZE / 2}px)` },
  { key: "bottom", color: "#f7f3ff", transform: `rotateX(-90deg) translateZ(${SIZE / 2}px)` },
];

/** Pure-CSS 3D Rubik's cube. Nine tiles per face, gently lit, always turning. */
export default function RubiksCube() {
  return (
    <div className="flex h-full w-full items-center justify-center py-4">
      <div className="cube-stage" aria-label="A slowly rotating Rubik's cube" role="img">
        <div className="cube" style={{ "--cube": `${SIZE}px` } as React.CSSProperties}>
          {FACES.map((face) => (
            <div key={face.key} className="cube-face" style={{ transform: face.transform }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="cube-tile"
                  style={{
                    background: face.color,
                    filter: `brightness(${(0.82 + ((i * 7) % 5) * 0.055).toFixed(3)})`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
