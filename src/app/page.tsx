export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-blue-500 bg-white text-black dark:bg-dot-white/[0.8] bg-dot-black/[0.8] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20  ">
        Backgrounds
      </p>
    </div>
  );
}
