import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose }  from './components/WhyChoose';
import { CourseList } from './components/CourseList';

export default function App() {
  return (
    <main className='flex flex-col gap-2'>
      <header className='flex justify-between items-center'>
        <Navbar />
      </header> 
       <section id='hero'>
        <Hero />
      </section>  

      <section id='about'>
        <WhyChoose />
      </section>

      <section id='courses'>
        <CourseList />
      </section>
    </main>
  );
}