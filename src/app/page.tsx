export default function Home() {
  return (
    <div className="">
      <div className="h-[56rem] w-full dark:bg-dark-bg-01  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <p className="text-4xl sm:text-7xl font-bold  py-8">Backgrounds</p>
        </div>
      </div>
    </div>
  );
}
