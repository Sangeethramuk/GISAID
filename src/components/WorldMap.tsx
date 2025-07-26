import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock data for influenza activity by region
const influenzaData = [
  {
    id: 1,
    name: 'United States',
    position: [39.8283, -98.5795] as [number, number],
    activity: {
      h3n2: 45,
      h1n1: 25,
      bVictoria: 20,
      bYamagata: 10
    },
    totalCases: 1250000
  },
  {
    id: 2,
    name: 'United Kingdom',
    position: [55.3781, -3.4360] as [number, number],
    activity: {
      h3n2: 40,
      h1n1: 30,
      bVictoria: 15,
      bYamagata: 15
    },
    totalCases: 850000
  },
  {
    id: 3,
    name: 'India',
    position: [20.5937, 78.9629] as [number, number],
    activity: {
      h3n2: 50,
      h1n1: 20,
      bVictoria: 18,
      bYamagata: 12
    },
    totalCases: 2100000
  },
  {
    id: 4,
    name: 'Brazil',
    position: [-14.2350, -51.9253] as [number, number],
    activity: {
      h3n2: 35,
      h1n1: 35,
      bVictoria: 20,
      bYamagata: 10
    },
    totalCases: 950000
  },
  {
    id: 5,
    name: 'Australia',
    position: [-25.2744, 133.7751] as [number, number],
    activity: {
      h3n2: 30,
      h1n1: 40,
      bVictoria: 20,
      bYamagata: 10
    },
    totalCases: 650000
  },
  {
    id: 6,
    name: 'South Africa',
    position: [-30.5595, 22.9375] as [number, number],
    activity: {
      h3n2: 55,
      h1n1: 15,
      bVictoria: 20,
      bYamagata: 10
    },
    totalCases: 450000
  }
];

// Custom marker icon
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 20px;
        height: 20px;
        background-color: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 10px;
        font-weight: bold;
      ">
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

const WorldMap: React.FC = () => {
  const getActivityColor = (activity: any) => {
    const total = activity.h3n2 + activity.h1n1 + activity.bVictoria + activity.bYamagata;
    if (total > 100) return '#ff4444'; // High activity - red
    if (total > 80) return '#ff8800'; // Medium-high - orange
    if (total > 60) return '#ffcc00'; // Medium - yellow
    if (total > 40) return '#88cc00'; // Low-medium - light green
    return '#44cc44'; // Low - green
  };

  return (
    <MapContainer
      center={[20, 0] as [number, number]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {influenzaData.map((region) => (
        <Marker
          key={region.id}
          position={region.position}
          icon={createCustomIcon(getActivityColor(region.activity))}
        >
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                {region.name}
              </h3>
              <div style={{ fontSize: '12px', color: '#666' }}>
                <div style={{ marginBottom: '4px' }}>
                  <strong>Total Cases:</strong> {region.totalCases.toLocaleString()}
                </div>
                <div style={{ marginBottom: '4px' }}>
                  <strong>Activity Breakdown:</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>H3N2:</span>
                    <span style={{ color: '#2b7fff' }}>{region.activity.h3n2}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>H1N1:</span>
                    <span style={{ color: '#00d492' }}>{region.activity.h1n1}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>B/Victoria:</span>
                    <span style={{ color: '#c27aff' }}>{region.activity.bVictoria}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>B/Yamagata:</span>
                    <span style={{ color: '#ffdf20' }}>{region.activity.bYamagata}%</span>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
      
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default WorldMap; 