const STAR_FIELD_HEIGHT = 2000;

function createBoxShadow(count: number, seed: number) {
  let value = "";
  let state = seed;

  const next = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  for (let index = 0; index < count; index += 1) {
    const x = Math.floor(next() * STAR_FIELD_HEIGHT);
    const y = Math.floor(next() * STAR_FIELD_HEIGHT);
    value += `${index === 0 ? "" : ", "}${x}px ${y}px #fff`;
  }

  return value;
}

const SMALL_SHADOWS = createBoxShadow(700, 11);
const MEDIUM_SHADOWS = createBoxShadow(200, 29);
const LARGE_SHADOWS = createBoxShadow(100, 47);

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,_#090a0f_100%)]">
      <div
        className="stars-layer stars-small"
        style={{ ["--star-shadow" as string]: SMALL_SHADOWS }}
      />
      <div
        className="stars-layer stars-medium"
        style={{ ["--star-shadow" as string]: MEDIUM_SHADOWS }}
      />
      <div
        className="stars-layer stars-large"
        style={{ ["--star-shadow" as string]: LARGE_SHADOWS }}
      />
    </div>
  );
}
