import Footer from "./components/Footer";

function App() {
  return (
    <>
    <main className="font-outfit">
      <div className="card">
        <div className="image-container">
          <img
            src="/images/image-equilibrium.jpg"
            alt="equilibrium"
            className="rounded-xl"
          />
          <div className="hover-image">
            {/* <div className="bg-cyan/50 w-full h-full inset-0" /> */}
            <img src="/images/icon-view.svg" alt="icon-view" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <h1 className="text-white font-semibold text-2xl py-4 cursor-pointer hover:text-cyan transition-colors duration-300">
            Equilibrium #3429
          </h1>
          <p className="text-softblue font-light pb-4">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <img src="/images/icon-ethereum.svg" alt="ethereum" />
              <span className="text-cyan font-semibold">0.041 ETH</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/images/icon-clock.svg" alt="clock" />
              <span className="text-softblue font-light">3 days left</span>
            </div>
          </div>
          <span className="bg-linedark h-[0.1rem] w-full flex my-4" />
          <div className="flex items-center gap-4">
            <img
              src="/images/image-avatar.png"
              alt="avatar"
              width={35}
              className="border-[0.1rem] rounded-full"
            />
            <p className="text-softblue font-light">
              Creation of{" "}
              <span className="text-white cursor-pointer hover:text-cyan transition-colors duration-300">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
