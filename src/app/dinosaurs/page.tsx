'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DinosaurPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('all');

  const sections = {
    all: 'All Facts',
    biblical: 'Biblical Perspective',
    scientific: 'Scientific Evidence',
    history: 'Historical Records',
    modern: 'Modern Discoveries'
  };

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
          alt: 'Ancient drawing showing dinosaur-like creature'
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
    }
  ];

  const filteredFacts = facts.filter(fact => 
    (activeSection === 'all' || fact.section === activeSection) &&
    (searchTerm === '' || 
     fact.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     fact.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
    reveal();
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

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search facts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(sections).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          {filteredFacts.map((fact, index) => {
            const sectionColors = {
              biblical: 'blue',
              scientific: 'green',
              history: 'purple',
              modern: 'orange'
            };
            const color = sectionColors[fact.section as keyof typeof sectionColors];
            
            return (
              <div
                key={index}
                className={`reveal bg-${color}-100 p-6 rounded-2xl border-4 border-${color}-300 
                  shadow-md transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
              >
                <h2 className={`text-2xl font-bold text-${color}-700 mb-4 flex items-center`}>
                  <span className="text-3xl mr-2">{fact.icon}</span>
                  {fact.title}
                </h2>
                <p className="text-lg text-gray-800 mb-4">{fact.content}</p>
                {fact.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {fact.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 