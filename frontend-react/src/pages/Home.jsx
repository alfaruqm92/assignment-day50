import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import { CourseList } from "../components/CourseList";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";

function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductSection />
      <WhyChoose />
      <CourseList />
    </main>
  );
}

export default Home;