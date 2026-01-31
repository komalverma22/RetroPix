'use client';

interface SettingsPanelProps {
  pixelSize: number;
  colors: number;
  styleMode: string;
  frameIt: boolean;
  onPixelSizeChange: (value: number) => void;
  onColorsChange: (value: number) => void;
  onStyleModeChange: (mode: string) => void;
  onFrameItChange: (value: boolean) => void;
  onDownload: () => void;
}

export default function SettingsPanel({
  pixelSize,
  colors,
  styleMode,
  frameIt,
  onPixelSizeChange,
  onColorsChange,
  onStyleModeChange,
  onFrameItChange,
  onDownload,
}: SettingsPanelProps) {
  const presets = [
    { name: 'Game Boy', mode: 'game-boy' },
    { name: '8-bit', mode: '8-bit' },
    { name: 'Chunky', mode: 'chunky' },
    { name: 'Duotone', mode: 'duotone' },
    { name: 'CGA', mode: 'cga' },
    { name: 'B&W', mode: 'bw' },
  ];

  return (
    <div className="w-80 flex flex-col gap-6">
      {/* Style Mode */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Style Mode
        </label>
        <select
          value={styleMode}
          onChange={(e) => onStyleModeChange(e.target.value)}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            padding: '8px',
            width: '100%',
            border: '2px solid #035DA5',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          <option value="standard">Standard</option>
          <option value="enhanced">Enhanced</option>
        </select>
      </div>

      {/* Settings */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Settings
        </label>

        {/* Pixel Size */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: '#035DA5',
              }}
            >
              Pixel Size:
            </span>
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: '#035DA5',
              }}
            >
              {pixelSize}px
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="32"
            value={pixelSize}
            onChange={(e) => onPixelSizeChange(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: '#AAF48B',
              cursor: 'pointer',
            }}
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: '#035DA5',
              }}
            >
              Colors:
            </span>
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: '#035DA5',
              }}
            >
              {colors}
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="256"
            value={colors}
            onChange={(e) => onColorsChange(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: '#AAF48B',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>

      {/* Quick Presets */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            color: '#035DA5',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          Quick Presets
        </label>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.mode}
              onClick={() => {
                onStyleModeChange(preset.mode);
                if (preset.mode === 'game-boy') onPixelSizeChange(8);
                else if (preset.mode === '8-bit') onPixelSizeChange(12);
                else if (preset.mode === 'chunky') onPixelSizeChange(16);
                else if (preset.mode === 'duotone') onColorsChange(2);
                else if (preset.mode === 'cga') onColorsChange(16);
                else if (preset.mode === 'bw') onColorsChange(2);
              }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                padding: '8px 12px',
                border: '2px solid #035DA5',
                backgroundColor:
                  styleMode === preset.mode ? '#AAF48B' : '#ffffff',
                color: '#035DA5',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.2s',
              }}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Frame It */}
      <div className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#f5f5f5', border: '2px solid #035DA5' }}>
        <input
          type="checkbox"
          checked={frameIt}
          onChange={(e) => onFrameItChange(e.target.checked)}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            accentColor: '#AAF48B',
          }}
        />
        <label
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            color: '#035DA5',
            cursor: 'pointer',
          }}
        >
          Frame it
        </label>
      </div>

      {/* Download Button */}
      <button
        onClick={onDownload}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '12px',
          padding: '12px 16px',
          backgroundColor: '#AAF48B',
          color: '#035DA5',
          border: '3px solid #035DA5',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#7BC13C';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#AAF48B';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        ⬇️ DOWNLOAD
      </button>
    </div>
  );
}
