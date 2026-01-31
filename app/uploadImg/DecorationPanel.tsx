'use client';

import { useState } from 'react';

interface TextDecoration {
  id: string;
  text: string;
  fontSize: number;
  color: string;
  position: 'top' | 'bottom';
}

interface EmojiDecoration {
  id: string;
  emoji: string;
  fontSize: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface DecorationPanelProps {
  onTextAdd: (text: TextDecoration) => void;
  onEmojiAdd: (emoji: EmojiDecoration) => void;
  onTextUpdate: (text: TextDecoration) => void;
  onEmojiUpdate: (emoji: EmojiDecoration) => void;
  textDecorations: TextDecoration[];
  emojiDecorations: EmojiDecoration[];
  onTextRemove: (id: string) => void;
  onEmojiRemove: (id: string) => void;
  frameType: string;
  onFrameTypeChange: (type: string) => void;
}

export default function DecorationPanel({
  onTextAdd,
  onEmojiAdd,
  onTextUpdate,
  onEmojiUpdate,
  textDecorations,
  emojiDecorations,
  onTextRemove,
  onEmojiRemove,
  frameType,
  onFrameTypeChange,
}: DecorationPanelProps) {
  const [textInput, setTextInput] = useState('');
  const [textColor, setTextColor] = useState('#035DA5');
  const [textSize, setTextSize] = useState(24);
  const [textPosition, setTextPosition] = useState<'top' | 'bottom'>('top');
  const [selectedEmoji, setSelectedEmoji] = useState('🎨');
  const [emojiSize, setEmojiSize] = useState(32);
  const [emojiPosition, setEmojiPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-left');
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [editingEmojiId, setEditingEmojiId] = useState<string | null>(null);

  const emojis = ['🎨', '🎮', '🖼️', '✨', '🌟', '💫', '🎯', '🚀', '⭐', '🎪', '🎭', '🎬'];

  const frameTypes = [
    { name: 'None', value: 'none' },
    { name: 'Simple', value: 'simple' },
    { name: 'Retro', value: 'retro' },
    { name: 'Double', value: 'double' },
    { name: 'Rainbow', value: 'rainbow' },
  ];

  const handleAddText = () => {
    if (textInput.trim()) {
      onTextAdd({
        id: Date.now().toString(),
        text: textInput,
        fontSize: textSize,
        color: textColor,
        position: textPosition,
      });
      setTextInput('');
    }
  };

  const handleEditText = (text: TextDecoration) => {
    setEditingTextId(text.id);
    setTextInput(text.text);
    setTextColor(text.color);
    setTextSize(text.fontSize);
    setTextPosition(text.position);
  };

  const handleSaveTextEdit = () => {
    if (editingTextId && textInput.trim()) {
      onTextUpdate({
        id: editingTextId,
        text: textInput,
        fontSize: textSize,
        color: textColor,
        position: textPosition,
      });
      setEditingTextId(null);
      setTextInput('');
    }
  };

  const handleAddEmoji = () => {
    onEmojiAdd({
      id: Date.now().toString(),
      emoji: selectedEmoji,
      fontSize: emojiSize,
      position: emojiPosition,
    });
  };

  const handleEditEmoji = (emoji: EmojiDecoration) => {
    setEditingEmojiId(emoji.id);
    setSelectedEmoji(emoji.emoji);
    setEmojiSize(emoji.fontSize);
    setEmojiPosition(emoji.position);
  };

  const handleSaveEmojiEdit = () => {
    if (editingEmojiId) {
      onEmojiUpdate({
        id: editingEmojiId,
        emoji: selectedEmoji,
        fontSize: emojiSize,
        position: emojiPosition,
      });
      setEditingEmojiId(null);
    }
  };

  return (
    <div className="w-80 flex flex-col gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
      {/* Frame Selection */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '11px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Frame Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {frameTypes.map((frame) => (
            <button
              key={frame.value}
              onClick={() => onFrameTypeChange(frame.value)}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '9px',
                padding: '6px 8px',
                border: '2px solid #035DA5',
                backgroundColor: frameType === frame.value ? '#AAF48B' : '#ffffff',
                color: '#035DA5',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {frame.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add Text */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '11px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Add Text
        </label>

        <input
          type="text"
          placeholder="Enter text..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            width: '100%',
            padding: '6px',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            marginBottom: '8px',
          }}
        />

        <div className="flex gap-2 mb-2">
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={{
              width: '40px',
              height: '32px',
              cursor: 'pointer',
              border: '2px solid #035DA5',
              borderRadius: '4px',
            }}
          />
          <select
            value={textSize}
            onChange={(e) => setTextSize(Number(e.target.value))}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '9px',
              flex: 1,
              padding: '6px',
              border: '2px solid #035DA5',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            <option value={16}>16px</option>
            <option value={20}>20px</option>
            <option value={24}>24px</option>
            <option value={32}>32px</option>
            <option value={40}>40px</option>
          </select>
        </div>

        <select
          value={textPosition}
          onChange={(e) => setTextPosition(e.target.value as 'top' | 'bottom')}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '9px',
            width: '100%',
            padding: '6px',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>

        <button
          onClick={editingTextId ? handleSaveTextEdit : handleAddText}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            width: '100%',
            padding: '6px',
            backgroundColor: '#AAF48B',
            color: '#035DA5',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {editingTextId ? '💾 Save Edit' : '+ Add Text'}
        </button>

        {editingTextId && (
          <button
            onClick={() => {
              setEditingTextId(null);
              setTextInput('');
            }}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '10px',
              width: '100%',
              padding: '6px',
              marginTop: '8px',
              backgroundColor: '#ff6b6b',
              color: '#ffffff',
              border: '2px solid #ff6b6b',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ✕ Cancel Edit
          </button>
        )}

        {textDecorations.length > 0 && (
          <div className="mt-2 space-y-2">
            {textDecorations.map((text) => (
              <div
                key={text.id}
                className="flex justify-between items-center p-2 rounded text-xs gap-1"
                style={{
                  backgroundColor: editingTextId === text.id ? '#AAF48B' : '#ffffff',
                  border: editingTextId === text.id ? '2px solid #035DA5' : '1px solid #035DA5',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px', color: text.color }}>
                    {text.text}
                  </span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEditText(text)}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      color: '#035DA5',
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onTextRemove(text.id)}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      color: '#ff4444',
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Emoji */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '11px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Add Emoji
        </label>

        <div className="grid grid-cols-4 gap-2 mb-3">
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setSelectedEmoji(emoji)}
              style={{
                fontSize: '20px',
                padding: '8px',
                border: selectedEmoji === emoji ? '3px solid #035DA5' : '2px solid #ccc',
                backgroundColor: selectedEmoji === emoji ? '#AAF48B' : '#ffffff',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {emoji}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mb-2">
          <select
            value={emojiSize}
            onChange={(e) => setEmojiSize(Number(e.target.value))}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '9px',
              flex: 1,
              padding: '6px',
              border: '2px solid #035DA5',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            <option value={24}>24px</option>
            <option value={32}>32px</option>
            <option value={48}>48px</option>
            <option value={64}>64px</option>
          </select>
        </div>

        <select
          value={emojiPosition}
          onChange={(e) => setEmojiPosition(e.target.value as any)}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '9px',
            width: '100%',
            padding: '6px',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
        >
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>

        <button
          onClick={editingEmojiId ? handleSaveEmojiEdit : handleAddEmoji}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            width: '100%',
            padding: '6px',
            backgroundColor: '#AAF48B',
            color: '#035DA5',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {editingEmojiId ? '💾 Save Edit' : '+ Add Emoji'}
        </button>

        {editingEmojiId && (
          <button
            onClick={() => {
              setEditingEmojiId(null);
            }}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '10px',
              width: '100%',
              padding: '6px',
              marginTop: '8px',
              backgroundColor: '#ff6b6b',
              color: '#ffffff',
              border: '2px solid #ff6b6b',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ✕ Cancel Edit
          </button>
        )}

        {emojiDecorations.length > 0 && (
          <div className="mt-2 space-y-2">
            {emojiDecorations.map((emoji) => (
              <div
                key={emoji.id}
                className="flex justify-between items-center p-2 rounded"
                style={{
                  backgroundColor: editingEmojiId === emoji.id ? '#AAF48B' : '#ffffff',
                  border: editingEmojiId === emoji.id ? '2px solid #035DA5' : '1px solid #035DA5',
                }}
              >
                <span style={{ fontSize: `${emoji.fontSize / 2}px` }}>{emoji.emoji}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEditEmoji(emoji)}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      color: '#035DA5',
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onEmojiRemove(emoji.id)}
                    style={{
                      fontSize: '12px',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      color: '#ff4444',
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
