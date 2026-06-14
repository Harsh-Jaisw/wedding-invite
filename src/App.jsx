import { useRef, useState } from "react";
import CurtainOpener from "./components/CurtainOpener";
import HeroPage from "./components/HeroPage";
import InviteCard from "./components/InviteCard";
import LoveStory from "./components/LoveStory";
import VenueSection from "./components/VenueSection";
import GalleryCarousel  from "./components/GalleryCarousel";
import RSVPForm from "./components/RSVPForm";
import StarBackground from "./components/StarBackground";
import AudioPlayer from "./components/AudioPlayer";
import FamilySection      from "./components/FamilySection"
import CuteInviteSection  from "./components/CuteInviteSection";

const couple = import.meta.env.VITE_COUPLE || "rahul-priya";
const side   = import.meta.env.VITE_SIDE   || "bride";

const commonConfig = (await import(`./couples/${couple}/common/config.js`)).default;
const sideConfig   = (await import(`./couples/${couple}/${side}/config.js`)).default;

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);
  const handleOpen = () => {
    // Play audio on same user click — browser allows it
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setOpened(true);
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>

      <StarBackground />

      {/* Audio — fixed button, always visible after open */}
      <audio
        ref={audioRef}
        src="/audio/wedding-instrumental.mpeg"
        loop
      />
      
      {opened && (
        <AudioPlayer audioRef={audioRef} />
      )}

      {!opened ? (
        // Page 1: Curtain
        <CurtainOpener
          common={commonConfig}
          sideConfig={sideConfig}
          onOpen={handleOpen}
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

          {/* Section 3: Family Section */}
          <FamilySection common={commonConfig} />

          {/* Section 4: Love Story */}
          <LoveStory common={commonConfig} />

          {/* Section 5: Venue */}
          <VenueSection common={commonConfig} />

          {/* Section 6: Gallery */}
          <GalleryCarousel common={commonConfig} />

          {/* Section 7: Cute Invite */}
          <CuteInviteSection  common={commonConfig} sideConfig={sideConfig} />

          {/* Section 8: RSVP */}
          <RSVPForm common={commonConfig} />
        </div>
      )}

    </div>
  );
}