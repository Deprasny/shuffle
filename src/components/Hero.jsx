export function Hero() {
  return (
    <div className="px-[60px] flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-col mt-[60px]">
        <h1 className="text-[155px] leading-[1] tracking-[-0.02em] font-grotesk font-normal stretch-text">
          SHUFFLE UP YOUR
        </h1>
        <div className="font-pixel text-[175px] leading-[1] tracking-[0.02em] mt-10 stretch-text">
          DANCEFLOOR
        </div>
      </div>
      <div className="flex justify-between items-end mt-[140px] font-grotesk ">
        <div className="text-[12px] tracking-[0.02em] uppercase">8 CITIES</div>
        <p className="font-normal text-[18px] leading-[23px] text-center max-w-[750px] mx-auto">
          SHUFFLE: WHERE THE PARTY NEVER STOPS. YOUR ULTIMATE GUIDE TO CITY NIGHTLIFE. EXPLORE
          MUSIC, CLUBS AND HOT EVENTS. UNLEASH YOUR INNER NIGHT OWL. BEATS, DRINKS, MEMORIES. FROM
          UNDERGROUND TO MAINSTREAM, WE'VE GOT YOU. OWN THE NIGHT WITH SHUFFLE.
        </p>
        <div className="text-[12px] tracking-[0.02em] uppercase">450 EVENTS</div>
      </div>
    </div>
  );
}
