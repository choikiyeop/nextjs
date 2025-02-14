export default function AnimationPage() {
  return (
    <main className="flex items-center justify-center flex-col space-y-4">
      <div className="bg-blue-700 rounded-full size-40">
        <svg
          className=" relative w-full h-28 min-h-24 max-h-36"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <div className="size-56 relative overflow-hidden border rounded-full bg-blue-700 ">
        <div className="size-[260px] absolute -top-[65%] -left-[10%] rounded-[45%] bg-blue-300 animate-[move_3s_infinite_linear]" />
        <div className="size-[300px] absolute -top-[90%] -left-[15%] rounded-[45%] bg-blue-400 animate-[move_5s_infinite_linear]" />
      </div>
    </main>
  );
}
