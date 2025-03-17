import "../App.css";

function Home() {
  return (
    <>
      <div className="hero-with-bg w-full h-full">
        <div className="h-full text-ghost-white flex justify-center content-center flex-wrap bg-popping-pink">
          <h1 className="text-8xl md:text-9xl">Tautas</h1>
        </div>
      </div>
      <div className={`absolute bottom-0 w-full text-center text-ghost-white`}>
        <p className="font-russo">SCROLL</p>
        <div
          className={`border-1 border-solid border-ghost-white h-15 w-0 mx-auto my-4`}
        />
      </div>
    </>
  );
}

export default Home;
