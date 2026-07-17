import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhyChoose } from "../components/WhyChoose";
import { CourseList } from "../components/CourseList";

function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <CourseList />
    </main>
  );
}

export default Home;