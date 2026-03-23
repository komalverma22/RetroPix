'use client';

import { useState } from 'react';
import { TextDecoration, EmojiDecoration } from './page';

interface DecorationPanelProps {
  textDecorations: TextDecoration[];
  emojiDecorations: EmojiDecoration[];
  onTextAdd: (text: Omit<TextDecoration, 'x' | 'y'>) => void;
  onEmojiAdd: (emoji: Omit<EmojiDecoration, 'x' | 'y'>) => void;
  onTextRemove: (id: string) => void;
  onEmojiRemove: (id: string) => void;
}

const EMOJI_LIST = [
  '✨', '🌸', '🎀', '🌙', '⭐', '💫', '🦋', '🌺',
  '🍒', '🌼', '🌈', '💝', '🎠', '🍓', '🌻', '💖',
  '🍄', '🐚', '🌊', '☁️', '🎪', '🧸', '🫧', '🪷',
];

const FONT_OPTIONS = [
  { label: 'Serif', value: 'Georgia, serif' },
  { label: 'Script', value: "'Brush Script MT', cursive" },
  { label: 'Sans', value: 'Arial, sans-serif' },
  { label: 'Mono', value: "'Courier New', monospace" },
];

const CARD = {
  background: 'white',
  borderRadius: '14px',
  padding: '16px',
  border: '1.5px solid #f0e0da',
  boxShadow: '0 2px 12px rgba(212,132,122,0.06)',
};

const LABEL = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '11px',
  color: '#d4847a',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '12px',
};

export default function DecorationPanel({
  textDecorations,
  emojiDecorations,
  onTextAdd,
  onEmojiAdd,
  onTextRemove,
  onEmojiRemove,
}: DecorationPanelProps) {
  const [textInput, setTextInput] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [textSize, setTextSize] = useState(20);
  const [textFont, setTextFont] = useState(FONT_OPTIONS[0].value);
  const [selectedEmoji, setSelectedEmoji] = useState('✨');
  const [emojiSize, setEmojiSize] = useState(28);
  const [tab, setTab] = useState<'text' | 'emoji'>('text');

  const handleAddText = () => {
    if (!textInput.trim()) return;
    onTextAdd({
      id: Date.now().toString(),
      text: textInput.trim(),
      fontSize: textSize,
      color: textColor,
      fontFamily: textFont,
    });
    setTextInput('');
  };

  const handleAddEmoji = () => {
    onEmojiAdd({
      id: Date.now().toString(),
      emoji: selectedEmoji,
      fontSize: emojiSize,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Tab Switch */}
      <div style={{ display: 'flex', background: 'white', borderRadius: '12px', padding: '4px', border: '1.5px solid #f0e0da' }}>
        {(['text', 'emoji'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1, padding: '8px', borderRadius: '9px', border: 'none',
              background: tab === t ? 'linear-gradient(135deg, #d4847a, #c96ea0)' : 'transparent',
              color: tab === t ? 'white' : '#9b7b74',
              fontFamily: 'inherit', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {t === 'text' ? '✍️ Text' : '😊 Emoji'}
          </button>
        ))}
      </div>

      {tab === 'text' && (
        <div style={CARD}>
          <label style={LABEL}>✦ Add Text</label>

          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddText()}
            placeholder="Type something cute..."
            style={{
              width: '100%', padding: '10px 12px', borderRadius: '10px',
              border: '1.5px solid #f0e0da', fontSize: '13px',
              fontFamily: 'inherit', outline: 'none', marginBottom: '10px',
              boxSizing: 'border-box', color: '#2d1f1a',
            }}
          />

          {/* Font Family */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
            {FONT_OPTIONS.map((f) => (
              <button key={f.value} onClick={() => setTextFont(f.value)}
                style={{
                  padding: '6px 8px', borderRadius: '8px', cursor: 'pointer',
                  border: textFont === f.value ? '1.5px solid #d4847a' : '1.5px solid #f0e0da',
                  background: textFont === f.value ? '#fff5f3' : 'white',
                  color: '#2d1f1a', fontSize: '12px', fontFamily: f.value,
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Size + Color */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', color: '#b09090', marginBottom: '4px' }}>Size: {textSize}px</div>
              <input type="range" min="12" max="60" value={textSize}
                onChange={(e) => setTextSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d4847a', height: '4px' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#b09090', marginBottom: '4px' }}>Color</div>
              <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)}
                style={{ width: '44px', height: '36px', border: '1.5px solid #f0e0da', borderRadius: '8px', cursor: 'pointer', padding: '2px' }}
              />
            </div>
          </div>

          <button
            onClick={handleAddText}
            style={{
              width: '100%', padding: '10px', borderRadius: '10px', border: 'none',
              background: 'linear-gradient(135deg, #d4847a, #c96ea0)',
              color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'inherit', opacity: textInput.trim() ? 1 : 0.5,
            }}
          >
            + Add to Photo
          </button>

          {/* Hint */}
          <p style={{ fontSize: '11px', color: '#c0a0a0', marginTop: '8px', textAlign: 'center' }}>
            Drag text on the photo to reposition ↑
          </p>

          {/* Added Text List */}
          {textDecorations.length > 0 && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {textDecorations.map((td) => (
                <div key={td.id} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 10px', borderRadius: '8px', background: '#fdf8f6', border: '1px solid #f0e0da',
                }}>
                  <span style={{ fontSize: '12px', color: td.color, fontFamily: td.fontFamily, fontWeight: 600,
                    textShadow: '0 0 6px rgba(0,0,0,0.15)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {td.text}
                  </span>
                  <button onClick={() => onTextRemove(td.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e07070', fontSize: '16px', padding: '0 4px', flexShrink: 0 }}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'emoji' && (
        <div style={CARD}>
          <label style={LABEL}>✦ Add Emoji</label>

          {/* Emoji Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px', marginBottom: '12px' }}>
            {EMOJI_LIST.map((emoji) => (
              <button key={emoji} onClick={() => setSelectedEmoji(emoji)}
                style={{
                  fontSize: '18px', padding: '8px 4px', borderRadius: '8px', cursor: 'pointer',
                  border: selectedEmoji === emoji ? '2px solid #d4847a' : '1.5px solid #f0e0da',
                  background: selectedEmoji === emoji ? '#fff5f3' : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.1s',
                  transform: selectedEmoji === emoji ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Size Slider */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#b09090', marginBottom: '4px' }}>Size: {emojiSize}px</div>
            <input type="range" min="16" max="80" value={emojiSize}
              onChange={(e) => setEmojiSize(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#d4847a', height: '4px' }}
            />
          </div>

          {/* Preview */}
          <div style={{ textAlign: 'center', marginBottom: '12px', fontSize: `${Math.min(emojiSize, 48)}px`, lineHeight: 1 }}>
            {selectedEmoji}
          </div>

          <button
            onClick={handleAddEmoji}
            style={{
              width: '100%', padding: '10px', borderRadius: '10px', border: 'none',
              background: 'linear-gradient(135deg, #d4847a, #c96ea0)',
              color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            + Add to Photo
          </button>

          <p style={{ fontSize: '11px', color: '#c0a0a0', marginTop: '8px', textAlign: 'center' }}>
            Drag emoji on the photo to reposition ↑
          </p>

          {/* Added Emoji List */}
          {emojiDecorations.length > 0 && (
            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {emojiDecorations.map((ed) => (
                <div key={ed.id} style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '4px 10px', borderRadius: '20px', background: '#fdf8f6', border: '1px solid #f0e0da',
                }}>
                  <span style={{ fontSize: '16px' }}>{ed.emoji}</span>
                  <button onClick={() => onEmojiRemove(ed.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e07070', fontSize: '14px', padding: 0, lineHeight: 1 }}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}