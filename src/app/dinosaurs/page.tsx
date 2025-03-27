'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DinosaurPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const facts = [
    {
      section: 'biblical',
      title: 'Creation of Dinosaurs',
      content: 'According to the Bible, dinosaurs were created on Day 6 of Creation Week, along with other land animals and humans. This means dinosaurs lived alongside people, not separated by millions of years.',
      icon: '📖'
    },
    {
      section: 'biblical',
      title: 'The Great Flood',
      content: 'The Bible tells us that representatives of all kinds of air-breathing land animals, including dinosaurs, went aboard Noah\'s Ark. All those left outside died in the Flood, and many of their remains became fossils.',
      icon: '🌊'
    },
    {
      section: 'biblical',
      title: 'After the Flood',
      content: 'After the Flood, about 4,300 years ago, the dinosaurs that came off the Ark lived in our world alongside people. Changes in climate, food availability, and other factors eventually led to their extinction.',
      icon: '🌿'
    },
    {
      section: 'biblical',
      title: 'Behemoth in the Bible',
      content: 'In Job 40:15-24, the Bible describes a massive creature called "behemoth" that "moves his tail like a cedar tree." Some believe this description matches large dinosaurs like Brachiosaurus better than any animal alive today.',
      icon: '📜'
    },
    {
      section: 'scientific',
      title: 'Fossil Discoveries',
      content: 'Dinosaur fossils have been found in positions suggesting rapid burial, with their spines arched as if they died of suffocation. Many fossils are found alongside mammals, indicating they lived together.',
      icon: '🦴',
      images: [
        {
          src: '/images/dino-mammal-fossil.webp',
          alt: 'Fossil showing dinosaur and mammal together'
        },
        {
          src: '/images/dino-mammal-art.webp',
          alt: 'Artistic representation of dinosaurs and mammals living together'
        }
      ]
    },
    {
      section: 'scientific',
      title: 'Dinosaur Sizes',
      content: 'Most dinosaurs were actually smaller than you might think! Scientists have found that the average dinosaur was about the size of a sheep or small pony, even though some famous ones were much bigger.',
      icon: '📏'
    },
    {
      section: 'scientific',
      title: 'Amazing Preservation',
      content: 'Scientists have found something incredible - actual soft tissue and blood cells in some dinosaur fossils! This discovery makes it hard to believe these fossils are millions of years old.',
      icon: '🔬',
      images: [
        {
          src: '/images/softTissue.webp',
          alt: 'Preserved soft tissue found in dinosaur fossils'
        }
      ]
    },
    {
      section: 'scientific',
      title: 'Unfossilized Bones',
      content: 'Scientists have found unfossilized (not turned to stone) dinosaur bones in Alaska! If dinosaurs died out millions of years ago, these bones should be completely fossilized by now.',
      icon: '🧪'
    },
    {
      section: 'scientific',
      title: 'Fast-Growing Giants',
      content: 'Research suggests that dinosaurs grew very quickly during their teenage years, similar to growth spurts in humans. This helps explain how they could reach such large sizes.',
      icon: '📈'
    },
    {
      section: 'history',
      title: 'Ancient Stories',
      content: 'Throughout history, many civilizations have created drawings and told stories about creatures that sound a lot like dinosaurs. Could they have seen real dinosaurs?',
      icon: '📚',
      images: [
        {
          src: '/images/braquiosaurusExample.jpg',
          alt: 'Ancient drawing showing dinosaur-like creature'
        }
      ]
    },
    {
      section: 'history',
      title: 'Dragon Legends',
      content: 'Many ancient cultures wrote about dragons - giant reptile-like creatures. The descriptions in these stories are very similar to what we know about dinosaurs from their fossils!',
      icon: '🐉',
      images: [
        {
          src: '/images/medievalKigntFightingDino.jpg',
          alt: 'Medieval artwork showing a knight fighting a dragon-like creature'
        }
      ]
    },
    {
      section: 'history',
      title: 'Chinese Calendar Mystery',
      content: 'The Chinese calendar has 12 animals. While 11 of them are animals we know today, one is thought to be mythical. Could this mysterious creature have been based on dinosaurs?',
      icon: '🏺'
    },
    {
      section: 'history',
      title: 'Global Dragon Tales',
      content: 'From China to England, from Sumeria to India, almost every ancient culture has stories about large reptile-like creatures. Many describe details that match what we now know about dinosaurs!',
      icon: '🗺️'
    },
    {
      section: 'modern',
      title: 'Recent Findings',
      content: 'Modern scientists have found dinosaur bones that still contain soft tissue and blood cells. This amazing discovery has made many scientists rethink how long ago dinosaurs lived.',
      icon: '🔬'
    },
    {
      section: 'modern',
      title: 'Living Fossils',
      content: 'Some animals living today look almost exactly like their fossil versions. This shows that animals don\'t have to change over time, and maybe dinosaurs didn\'t change much either!',
      icon: '🦎'
    },
    {
      section: 'modern',
      title: 'Dinosaur Birds?',
      content: 'Some scientists think birds evolved from dinosaurs, but others disagree. They\'ve found that bird lungs work very differently from what we think dinosaur lungs were like.',
      icon: '🦅'
    },
    {
      section: 'modern',
      title: 'Dinosaurs on the Ark',
      content: 'If dinosaurs were on Noah\'s Ark, they were likely young ones, not fully grown giants. Even the largest dinosaurs hatched from eggs no bigger than a football!',
      icon: '🥚'
    }
  ];

  const filteredFacts = facts.filter(fact => 
    searchTerm === '' || 
    fact.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fact.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[url('/images/dino-bg-pattern.png')] py-8 px-4 relative overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-amber-100 before:via-cyan-50 before:to-indigo-100 before:opacity-90 before:z-[-1]">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 md:left-20 w-24 h-24 md:w-32 md:h-32 animate-float-slow opacity-70 z-0">
        <Image src="/images/dino-footprint.png" alt="Dinosaur footprint" fill className="object-contain" />
      </div>
      <div className="absolute bottom-10 right-5 md:right-20 w-24 h-24 md:w-40 md:h-40 animate-float-medium opacity-70 rotate-12 z-0">
        <Image src="/images/dino-silhouette.png" alt="Dinosaur silhouette" fill className="object-contain" />
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 to-white backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 border-4 border-yellow-400 relative z-10">
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-text">
            Abdias&apos; AWESOME Dinosaur Facts!
          </h1>
          <div className="flex justify-center mb-2">
            <div className="w-36 h-2 bg-gradient-to-r from-purple-600 to-orange-400 rounded-full"></div>
          </div>
          <div className="flex justify-center">
            {/* Use emoji icons instead of images for reliable display */}
            <span className="text-4xl md:text-5xl inline-block animate-bounce-slow">🦕</span>
            <span className="mx-4 text-4xl md:text-5xl inline-block animate-bounce-delayed">🦖</span>
            <span className="text-4xl md:text-5xl inline-block animate-bounce-slow">🦕</span>
          </div>
        </div>

        {/* Fun Search Section with improved contrast */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for awesome facts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border-3 border-yellow-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg font-medium shadow-md placeholder-purple-300"
            />
            <span className="absolute right-5 top-3.5 text-2xl animate-pulse">🔍</span>
          </div>
        </div>
        
        <div className="space-y-10">
          {filteredFacts.map((fact, index) => {
            const sectionColors = {
              biblical: 'blue',
              scientific: 'green',
              history: 'purple',
              modern: 'orange'
            };
            const color = sectionColors[fact.section as keyof typeof sectionColors];
            const isHovered = hoveredIndex === index;
            const randomRotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-${color}-50 p-6 rounded-2xl border-4 border-${color}-300 
                  shadow-xl transform ${randomRotation} transition-all duration-500 
                  hover:scale-[1.03] hover:shadow-2xl cursor-pointer relative overflow-hidden`}
              >
                {/* Background decoration */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-${color}-200 opacity-50`}></div>
                <div className={`absolute -left-4 -top-4 w-16 h-16 rounded-full bg-${color}-200 opacity-30`}></div>
                
                <h2 className={`text-2xl font-bold text-${color}-700 mb-4 flex items-center relative z-10`}>
                  <span className={`text-4xl mr-3 ${isHovered ? 'animate-wiggle' : ''}`}>{fact.icon}</span>
                  <span className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                    {fact.title}
                  </span>
                </h2>
                <p className="text-lg text-gray-800 mb-5 relative z-10 font-medium leading-relaxed">{fact.content}</p>
                {fact.images && (
                  <div className={`grid grid-cols-1 ${fact.images.length > 1 ? 'md:grid-cols-2' : ''} gap-4 mt-4 relative z-10`}>
                    {fact.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className={`relative mx-auto w-full ${
                          fact.title === 'Ancient Stories' 
                            ? 'max-w-2xl h-[200px] md:h-[250px]' 
                            : 'aspect-video'
                        } rounded-xl overflow-hidden border-3 border-${color}-300 shadow-md transition-all duration-300 
                          ${isHovered ? 'scale-105 shadow-lg' : ''}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={`${
                            fact.title === 'Ancient Stories'
                              ? 'object-contain bg-white p-2'
                              : 'object-cover'
                          } transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fun footer */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <span className="text-4xl animate-march">🦕</span>
            <span className="text-4xl animate-march animation-delay-300">🦖</span>
            <span className="text-4xl animate-march animation-delay-600">🦕</span>
            <span className="text-4xl animate-march animation-delay-900">🦖</span>
          </div>
        </div>
      </div>
    </div>
  );
} 