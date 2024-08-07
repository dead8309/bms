import { lazy, useEffect } from "react";
const MidSection = lazy(() => import("../components/organizer/MidSection"));
import PayoutsSection from "../components/organizer/PayoutsSection";
import VideoSection from "../components/organizer/VideoSection";
import FAQsSection from "../components/organizer/FAQsSection";
import Footer from "../components/organizer/FooterSection";
import CustomerReviews from "../components/organizer/CustomerReviews";
const TopSection = lazy(() => import("../components/organizer/TopSection"));

function Organizer() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen ">
      <TopSection />
      <MidSection />
      <PayoutsSection />
      <VideoSection />
      <CustomerReviews />
      <FAQsSection />
      <Footer />
    </div>
  );
}

export default Organizer;
