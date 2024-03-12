export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <img className="max-w-full h-auto lg:pl-60 lg:pr-60 lg:pt-2" src="photo-grid.png" />
      </div>

      <div className=" p-8">
        <h1 className="text-4xl font-bold pb-2">Online Experiences</h1>
        <p className="text-xl w-96">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
