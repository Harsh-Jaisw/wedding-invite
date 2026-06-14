import { useState } from "react";
import CurtainOpener from "./components/CurtainOpener";
import HeroPage      from "./components/HeroPage";
import InviteCard    from "./components/InviteCard";
import LoveStory        from "./components/LoveStory";
import VenueSection     from "./components/VenueSection";
import GalleryCarousel  from "./components/GalleryCarousel";
import RSVPForm      from "./components/RSVPForm";

const couple = import.meta.env.VITE_COUPLE || "rahul-priya";
const side   = import.meta.env.VITE_SIDE   || "bride";

const commonConfig = (await import(`./couples/${couple}/common/config.js`)).default;
const sideConfig   = (await import(`./couples/${couple}/${side}/config.js`)).default;

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>

      {!opened ? (
        // Page 1: Curtain
        <CurtainOpener
          common={commonConfig}
          onOpen={() => setOpened(true)}
        />
      ) : (
        // After open: full scroll experience
        <div>
          {/* Section 1: Hero + Countdown */}
          <HeroPage common={commonConfig} />

          {/* Section 2: Invitation Card */}
          <InviteCard
            common={commonConfig}
            sideConfig={sideConfig}
          />
          {/* Section 3: Love Story */}
          <LoveStory common={commonConfig} />

          {/* Section 4: Venue */}
          <VenueSection common={commonConfig} />

          {/* Section 5: Gallery */}
          <GalleryCarousel common={commonConfig} />

          {/* Section 6: RSVP */}
          <RSVPForm common={commonConfig} />
        </div>
      )}

    </div>
  );
}