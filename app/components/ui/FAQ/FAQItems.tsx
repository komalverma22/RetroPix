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
      answer: 'RetroPix transforms your photos into retro pixel art using vintage color palettes and an 8-bit rendering engine.',
    },
    {
      id: 2,
      question: 'How does the pixelation work?',
      answer: 'Our algorithm divides your image into pixel blocks and maps colors to authentic retro palettes for a true 1980s-90s aesthetic.',
    },
    {
      id: 3,
      question: 'Can I customize the pixel size?',
      answer: 'Yes! Adjust pixel size from 2px to 32px, and choose from 2 to 256 colors to match your desired retro style.',
    },
    {
      id: 4,
      question: 'What file formats are supported?',
      answer: 'We support PNG, JPG, and WebP. Downloads are saved as PNG with full quality and transparency support.',
    },
  ];

  return (
    <>
      <style>{`
        .faq-item {
          background-color: #E4F1FE;
          border: 2.5px solid #01234B;
          box-shadow: 5px 5px 0 0 rgba(1, 35, 75, 0.9);
          border-radius: 999px;
          overflow: hidden;
          transition: box-shadow 0.2s ease, border-radius 0.4s ease;
        }
        .faq-item.open {
          border-radius: 24px;
        }
        .faq-item:hover {
          box-shadow: 7px 7px 0 0 rgba(1, 35, 75, 0.9);
        }
        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
          gap: 12px;
        }
        .faq-btn:hover {
          background-color: rgba(3, 93, 165, 0.08);
        }
        .faq-question {
          font-family: 'Press Start 2P', cursive;
          font-size: clamp(10px, 2.2vw, 15px);
          color: #035DA5;
          text-align: left;
          line-height: 1.5;
        }
        .faq-icon {
          flex-shrink: 0;
          width: clamp(22px, 5vw, 28px);
          height: clamp(22px, 5vw, 28px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #01234B;
          font-size: clamp(18px, 4vw, 24px);
          font-weight: 300;
          line-height: 1;
          transition: transform 0.3s ease, color 0.2s ease;
        }
        .faq-icon.open {
          color: #035DA5;
          transform: rotate(45deg);
        }
        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }
        .faq-answer-wrapper.open {
          grid-template-rows: 1fr;
        }
        .faq-answer-inner {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0px 22px 16px 22px;
          border-top: 2px solid #035DA5;
          padding-top: 14px;
          background-color: #F0F7FF;
        }
        .faq-answer p {
          font-family: 'Pixelify Sans', sans-serif;
          font-size: clamp(13px, 2.2vw, 15px);
          color: #01234B;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="faq-btn"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="faq-question">{item.question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
              </button>

              <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                <div className="faq-answer-inner">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}