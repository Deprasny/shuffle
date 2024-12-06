import { PiDiscoBall } from "react-icons/pi";
import { TbArrowsShuffle } from "react-icons/tb";
import { EventCard } from "./components/EventCard";
import { EventTable } from "./components/EventTable";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ScrollingText } from "./components/ScrollingText";
import { events } from "./constants/events";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className="min-h-screen bg-black relative overflow-hidden">
              <div className="max-w-[1440px] mx-auto relative h-screen">
                {/* Header */}
                <header className="h-[100px] z-50">
                  <nav className="w-full h-full flex flex-row justify-between items-center px-[60px]">
                    <div className="flex items-center">
                      <img
                        src="/images/logo.png"
                        alt="Shuffle"
                        className="h-10 w-auto"
                      />
                    </div>
                    <div className="hidden md:flex items-center gap-14">
                      <a
                        href="#"
                        className="text-white font-grotesk font-normal text-[18px] leading-[23px]"
                      >
                        Clubs
                      </a>
                      <a
                        href="#"
                        className="text-white font-grotesk font-normal text-[18px] leading-[23px]"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="text-white font-grotesk font-normal text-[18px] leading-[23px]"
                      >
                        I'm a Club Owner
                      </a>
                      <button className="box-border flex flex-row justify-center items-center w-[145px] h-[46px] bg-[#D3FB51] border-[1.47644px] border-black rounded-[10px] px-[21px] py-[10px] gap-[4.92px]">
                        <span className="w-[66px] h-[26px] font-grotesk font-bold text-[20px] leading-[26px] text-black">
                          Sign In
                        </span>
                      </button>
                    </div>
                  </nav>
                </header>
                {/* Hero Section */}
                <div className="relative">
                  <div className="absolute -top-[50vh] -left-[40%] w-[900px] h-[900px] rounded-full bg-[#9747FF] blur-[150px] opacity-20" />
                  <Hero />
                  {/* Yellow Ornament - Now positioned relative to hero section */}
                  <div className="absolute top-[40vh] -right-[40%] w-[900px] h-[900px] rounded-full bg-[#D3FB51] blur-[150px] opacity-20" />
                </div>
              </div>

              {/* Events Section */}
              <div className="max-w-[1440px] mx-auto px-[60px] py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {events.map((event, index) => (
                    <EventCard
                      key={index}
                      {...event}
                    />
                  ))}
                </div>
              </div>

              {/* Scrolling Text Section */}
              <div className="w-full">
                <ScrollingText
                  text="UPCOMING EVENTS"
                  icon={TbArrowsShuffle}
                />
              </div>

              {/* Event Table Section */}
              <EventTable />
              {/* Hero Section */}
              <div className="relative">
                <div className="absolute -top-[20vh] -left-[20%] w-[900px] h-[900px] rounded-full bg-[#9747FF] blur-[150px] opacity-20" />

                {/* Scrolling Text Section */}
                <div className="w-full">
                  <ScrollingText
                    text="NEVER STOP DANCING"
                    icon={PiDiscoBall}
                  />
                </div>

                {/* Footer Section */}
                <Footer />
                <div className="absolute -top-[20vh] -right-[20%] w-[900px] h-[900px] rounded-full bg-[#D3FB51] blur-[150px] opacity-20" />
              </div>
            </div>
          } />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
