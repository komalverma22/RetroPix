'use client';

interface SettingsPanelProps {
  pixelSize: number;
  colors: number;
  styleMode: string;
  onPixelSizeChange: (value: number) => void;
  onColorsChange: (value: number) => void;
  onStyleModeChange: (mode: string) => void;
}

const PRESETS = [
  { name: 'Game Boy', icon: '🎮', pixelSize: 6, colors: 4 },
  { name: '8-bit', icon: '👾', pixelSize: 10, colors: 16 },
  { name: 'Chunky', icon: '🟫', pixelSize: 18, colors: 32 },
  { name: 'Dreamy', icon: '✨', pixelSize: 4, colors: 128 },
  { name: 'Duotone', icon: '🎨', pixelSize: 8, colors: 2 },
  { name: 'Film', icon: '📽️', pixelSize: 3, colors: 64 },
];

const CARD = {
  background: 'white',
  borderRadius: '14px',
  padding: '18px',
  border: '1.5px solid #02121E',
  boxShadow: '0 2px 12px rgba(212,132,122,0.06)',
};

const LABEL = {
  fontFamily: "'Press Start 2P', cursive",
  fontSize: '11px',
  color: '#02121E',
  letterSpacing: '-0.01em',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '12px',
};

export default function SettingsPanel({
  pixelSize,
  colors,
  styleMode,
  onPixelSizeChange,
  onColorsChange,
  onStyleModeChange,
}: SettingsPanelProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Quick Presets */}
      <div style={CARD}>
        <label style={LABEL}>✦ Presets</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                onStyleModeChange(preset.name.toLowerCase());
                onPixelSizeChange(preset.pixelSize);
                onColorsChange(preset.colors);
              }}
              style={{
                padding: '8px 10px',
                borderRadius: '10px',
                border: styleMode === preset.name.toLowerCase() ? '1.5px solid #d4847a' : '1.5px solid #f0e0da',
                background: styleMode === preset.name.toLowerCase() ? '#fff5f3' : 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#2d1f1a',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: '14px' }}>{preset.icon}</span>
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pixel Size */}
      <div style={CARD}>
        <label style={LABEL}>✦ Pixel Size</label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', color: '#9b7b74' }}>Fine detail</span>
          <span style={{
            background: '#4E72C0',
            color: 'white', padding: '3px 10px', borderRadius: '20px',
            fontSize: '12px', fontWeight: 600,
          }}>
            {pixelSize}px
          </span>
          <span style={{ fontSize: '13px', color: '#9b7b74' }}>Blocky</span>
        </div>
        <input
          type="range" min="2" max="32" value={pixelSize}
          onChange={(e) => onPixelSizeChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#4E72C0', cursor: 'pointer', height: '4px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          {[2, 8, 16, 24, 32].map(v => (
            <button key={v} onClick={() => onPixelSizeChange(v)}
              style={{
                fontSize: '10px', padding: '3px 7px', borderRadius: '6px',
                border: pixelSize === v ? '1.5px solid #01234B' : '1.5px solid #f0e0da',
                background: pixelSize === v ? '#4E72C0' : 'white',
                color: pixelSize === v ? 'white' : '#9b7b74',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div style={CARD}>
        <label style={LABEL}>✦ Color Palette</label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', color: '#9b7b74' }}>Minimal</span>
          <span style={{
            background: '#4E72C0',
            color: 'white', padding: '3px 10px', borderRadius: '20px',
            fontSize: '12px', fontWeight: 600,
          }}>
            {colors} colors
          </span>
          <span style={{ fontSize: '13px', color: '#9b7b74' }}>Rich</span>
        </div>
        <input
          type="range" min="2" max="256" value={colors}
          onChange={(e) => onColorsChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#4E72C0', cursor: 'pointer', height: '4px' }}
        />
        <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
          {[2, 8, 16, 32, 64, 256].map(v => (
            <button key={v} onClick={() => onColorsChange(v)}
              style={{
                flex: 1, fontSize: '10px', padding: '3px 2px', borderRadius: '6px',
                border: colors === v ? '1.5px solid #01234B' : '1.5px solid #f0e0da',
                background: colors === v ? '#4E72C0' : 'white',
                color: colors === v ? 'white' : '#9b7b74',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}