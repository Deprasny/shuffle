export function ScrollingText({ text = "NEVER STOP DANCING", icon: Icon = null }) {
  return (
    <div className="bg-black py-8">
      <div className="max-w-[1320px] mx-auto relative overflow-hidden">
        <div className="animate-scrollTextLeft whitespace-nowrap inline-flex font-pixel text-white text-[64px] gap-4">
          <div className="flex shrink-0 gap-4 items-center">
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
          </div>
          <div className="flex shrink-0 gap-4 items-center">
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
            <span>{text}</span>
            {Icon && <Icon className="w-20 h-20" />}
          </div>
        </div>
      </div>
    </div>
  );
}
