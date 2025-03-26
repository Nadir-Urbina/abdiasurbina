'use client';

import { useEffect } from 'react';

export default function DinosaurPage() {
  // Add client-side scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    // Initial check to reveal elements that might be visible on load
    reveal();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:scale-105 transition-transform duration-300">
            Abdias&apos; AWESOME Dinosaur Facts!
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="reveal bg-yellow-100 p-6 rounded-2xl border-4 border-yellow-300 shadow-md transform rotate-1 transition-all duration-300 hover:rotate-2 hover:shadow-xl hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="inline-block animate-[bounce_2s_ease-in-out_infinite] mr-2">🦕</span> 
              Did You Know? 
              <span className="inline-block animate-[bounce_2s_ease-in-out_infinite_0.5s] ml-2">🦖</span>
            </h2>
            <p className="text-xl font-semibold text-gray-800">Dinosaurs may not have gone extinct over 66 million years ago!</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="reveal delay-100 bg-blue-100 p-6 rounded-2xl border-4 border-blue-300 shadow-md flex-1 transform -rotate-1 transition-all duration-300 hover:-rotate-2 hover:shadow-xl hover:scale-[1.02]">
              <p className="text-lg">The Bible tells us in <span className="font-bold text-blue-700 hover:underline cursor-pointer">Genesis 1:21</span> that God created all the animals, including the great sea monsters.</p>
            </div>
            
            <div className="reveal delay-200 bg-purple-100 p-6 rounded-2xl border-4 border-purple-300 shadow-md flex-1 transform rotate-1 transition-all duration-300 hover:rotate-2 hover:shadow-xl hover:scale-[1.02]">
              <p className="text-xl font-bold text-purple-800">So, what happened to the dinosaurs? <span className="inline-block animate-[wiggle_3s_ease-in-out_infinite]">🤔</span></p>
            </div>
          </div>
          
          <div className="reveal delay-300 bg-green-100 p-6 rounded-2xl border-4 border-green-300 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Super Cool Dinosaur Facts!</h2>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="text-3xl mr-3 transition-transform group-hover:animate-[wiggle_0.5s_ease-in-out]">🦴</span>
                <span className="text-lg group-hover:text-green-800 transition-colors duration-300">Dinosaur fossils have been found in positions where their spines are arched—almost as if they died of suffocation.</span>
              </li>
              <li className="flex items-start group">
                <span className="text-3xl mr-3 transition-transform group-hover:animate-[wiggle_0.5s_ease-in-out]">🔍</span>
                <span className="text-lg group-hover:text-green-800 transition-colors duration-300">Hundreds of dinosaur fossils have been discovered right next to mammals.</span>
              </li>
            </ul>
          </div>
          
          <div className="reveal delay-400 bg-orange-100 p-6 rounded-2xl border-4 border-orange-300 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <p className="text-xl font-bold text-orange-700 mb-4">
              What could have caused dinosaurs and mammals like dogs and cats to die at the same time? 
              <span className="inline-block animate-[float_3s_ease-in-out_infinite]">🐈</span> 
              <span className="inline-block animate-[float_3s_ease-in-out_infinite_0.5s] ml-1">🦕</span>
            </p>
            <p className="text-lg mb-2">Once again, the answer is in the Bible:</p>
            
            <div className="bg-white p-6 rounded-xl shadow-inner my-4 border-l-8 border-blue-500 transition-all duration-300 hover:border-l-[12px] hover:border-blue-600">
              <p className="italic text-lg font-semibold text-blue-800">Genesis 7:17</p>
              <p className="italic text-lg">For forty days the floodwaters grew deeper, covering the ground and lifting the boat high above the earth.</p>
            </div>
          </div>
          
          <div className="reveal delay-500 bg-pink-100 p-6 rounded-2xl border-4 border-pink-300 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">Amazing Dinosaur History! <span className="inline-block animate-[pulse_2s_ease-in-out_infinite]">📚</span></h2>
            <p className="text-lg mb-3">Through the years, various civilizations have created drawings of animals of all kinds—including many that resemble today&apos;s dinosaur fossils.</p>
            
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-3">For example:</h3>
              <ul className="space-y-4">
                <li className="flex items-start group cursor-pointer">
                  <span className="text-2xl mr-3 group-hover:animate-[wiggle_1s_ease-in-out]">🐉</span>
                  <span className="group-hover:text-teal-700 transition-colors duration-300">The Chinese calendar features 12 animals—11 of them are real, while only one is considered mythical.</span>
                </li>
                <li className="flex items-start group cursor-pointer">
                  <span className="text-2xl mr-3 group-hover:animate-[wiggle_1s_ease-in-out]">🏰</span>
                  <span className="group-hover:text-teal-700 transition-colors duration-300">Medieval histories describe reptile-like creatures called dragons—could they have been dinosaurs?</span>
                </li>
                <li className="flex items-start group cursor-pointer">
                  <span className="text-2xl mr-3 group-hover:animate-[wiggle_1s_ease-in-out]">🖼️</span>
                  <span className="group-hover:text-teal-700 transition-colors duration-300">Drawings from the 8th century depict animals identical to Brachiosaurus. How could they have drawn them without ever discovering their fossils?</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="reveal bg-indigo-100 p-6 rounded-2xl border-4 border-indigo-300 shadow-md transform -rotate-1 transition-all duration-300 hover:-rotate-2 hover:shadow-xl hover:scale-[1.02]">
            <p className="text-xl font-bold text-indigo-700">Lastly, could it be that dinosaurs haven&apos;t gone completely extinct? While we can&apos;t confirm this, we do know that they aren&apos;t 66 million years old!</p>
          </div>
          
          <div className="reveal mt-12 text-center">
            <p className="text-xl font-bold text-purple-800 mb-2">If you&apos;d like to learn more, visit:</p>
            <a 
              href="http://www.abdiasurbina.com/dinosaurs" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-105 animate-[pulse_2s_ease-in-out_infinite]"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.abdiasurbina.com/dinosaurs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 