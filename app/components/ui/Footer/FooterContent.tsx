'use client';

import Link from 'next/link';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';

export default function FooterContent() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Upload', href: '/uploadImg' },
    { name: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: 'https://twitter.com' },
    { icon: Instagram, name: 'Instagram', href: 'https://instagram.com' },
    { icon: Github, name: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <div className="mb-12 md:mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left - Brand */}
        <div className="flex-1">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '30px',
              color: '#02121E',
              fontWeight: 'bold',
            }}
          >
            RetroPix
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex-1">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '30px',
              color: '#01234B',
              marginBottom: '12px',
              fontWeight: 'bold',
            
            }}
          >
            Quick Links
          </p>
          <div className="space-y-1">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "'Pixelify Sans', sans-serif",
                  fontSize: '36px',
                  color: '#02F5F87',
                  display: 'block',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F77FBE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#035DA5')}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right - Social Links */}
        <div className="flex-1 flex items-center gap-6 justify-start md:justify-end">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                style={{
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2) rotate(-10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <IconComponent size={50} color="#01234B" strokeWidth={2} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
