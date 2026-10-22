import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialHub } from './components/SocialHub';
import { EggOilFeature } from './components/EggOilFeature';
import { VideoSection } from './components/VideoSection';
import { RecipeSection } from './components/RecipeSection';
import { WellnessTools } from './components/WellnessTools';
import { CollaborationForm } from './components/CollaborationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-stone-800">
      {/* Top Banner & Main Nav */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero & Intro */}
        <Hero />

        {/* Complete Social Links Hub */}
        <SocialHub />

        {/* Video Showcase: 健康云之道 */}
        <VideoSection />

        {/* Featured Special Partner: 古法工藝 蛋黃油 */}
        <EggOilFeature />

        {/* Practical Health DIY & Parenting Recipes */}
        <RecipeSection />

        {/* Interactive Hydration Calculator & Parenting FAQ */}
        <WellnessTools />

        {/* Business Inquiries & Collaboration Form */}
        <CollaborationForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
