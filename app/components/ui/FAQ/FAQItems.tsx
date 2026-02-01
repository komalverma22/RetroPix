'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQItems() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What is RetroPix?',
      answer: 'RetroPix is a custom 8-bit rendering engine that transforms your photos into retro pixel art using vintage color palettes like CGA, Game Boy, and NES.',
    },
    {
      id: 2,
      question: 'How does the pixelation work?',
      answer: 'Our advanced algorithm analyzes your image, divides it into pixel blocks, and maps colors to authentic retro palettes, ensuring authentic 1980s-90s aesthetic.',
    },
    {
      id: 3,
      question: 'Can I customize the pixel size?',
      answer: 'Yes! You can adjust the pixel size from 2px to 32px, and choose from 2 to 256 colors depending on your desired retro style.',
    },
    {
      id: 4,
      question: 'What file formats are supported?',
      answer: 'We support PNG, JPG, and WebP formats. Downloaded images are saved as PNG with full quality and transparency support.',
    },
  ];

  return (
    <div className="w-full space-y-4 md:space-y-5">
      {faqItems.map((item) => (
        <div
  key={item.id}
  className="rounded-full overflow-hidden hover:shadow-xl transition-all duration-300"
  style={{
    backgroundColor: '#E4F1FE',
    border: '2px solid #01234B',
    boxShadow: '6px 6px 0 0 rgba(1, 35, 75, 0.96)',
  }}
>

          {/* Question */}
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-[#D0E5FF] transition-colors"
            style={{
                cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(12px, 2.5vw, 18px)',
                color: '#035DA5',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              {item.question}
            </span>
            <span
              style={{
                fontSize: 'clamp(20px, 5vw, 28px)',
                marginLeft: '16px',
                flexShrink: 0,
                transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              ▼
            </span>
          </button>

          {/* Answer */}
          {openId === item.id && (
            <div
              className="px-6 md:px-8 py-6 md:py-3 border-t-2"
              style={{
                borderColor: '#035DA5',
                backgroundColor: '#F5F9FF',
              }}
            >
              <p
                style={{
                  fontFamily: "'Pixelify Sans', sans-serif",
                  fontSize: 'clamp(13px, 2vw, 16px)',
                  color: '#01234B',
                  lineHeight: '1.6',
                }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
