'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { partners, type Partner } from '../../lib/partners';

const dotIcon = L.divIcon({
    className: '',
    html: `<div class="pm-dot"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
});

function PartnerMarker({ partner }: { partner: Partner }) {
    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
        const marker = markerRef.current;
        if (!marker) return;
        const open = () => marker.openPopup();
        const close = () => marker.closePopup();
        marker.on('mouseover', open);
        marker.on('mouseout', close);
        return () => {
            marker.off('mouseover', open);
            marker.off('mouseout', close);
        };
    }, []);

    return (
        <Marker ref={markerRef} position={partner.position} icon={dotIcon}>
            <Popup offset={[0, -8]} closeButton={false} className="pm-popup">
                <div style={{ minWidth: 150, maxWidth: 230 }}>
                    <p style={{
                        margin: '0 0 6px',
                        fontSize: 11,
                        fontWeight: 600,
                        color: '#888',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                    }}>
                        {partner.city}
                    </p>
                    {partner.companies.map((c) => (
                        <div
                            key={c.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '5px 0',
                                borderBottom: '0.5px solid #f0f0f0',
                            }}
                        >
                            <img
                                src={c.logo}
                                alt={c.name}
                                onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    const initials = c.name
                                        .split(' ')
                                        .map((w) => w[0])
                                        .join('')
                                        .slice(0, 2)
                                        .toUpperCase();
                                    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=f0f0f0&color=555&size=64&bold=true&length=2`;
                                }}
                                style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: 'contain',
                                    borderRadius: 6,
                                    background: '#f7f7f7',
                                    padding: 3,
                                    flexShrink: 0,
                                }}
                            />
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#222' }}>
                                {c.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Popup>
        </Marker>
    );
}

export default function PartnersMap() {
    return (
        <>
            <style>{`
                .pm-dot {
                    width: 14px;
                    height: 14px;
                    background: #FFD700;
                    border: 2.5px solid #B8960A;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    transition: transform 0.15s ease;
                }
                .pm-dot::after {
                    content: '';
                    position: absolute;
                    inset: -5px;
                    border-radius: 50%;
                    background: rgba(255, 215, 0, 0.3);
                    animation: pm-pulse 2s ease-out infinite;
                }
                @keyframes pm-pulse {
                    0%   { transform: scale(0.8); opacity: 0.8; }
                    70%  { transform: scale(2.2); opacity: 0; }
                    100% { opacity: 0; }
                }
                .leaflet-marker-icon:hover .pm-dot {
                    transform: scale(1.4);
                }
                .pm-popup .leaflet-popup-content-wrapper {
                    padding: 10px 12px !important;
                    border-radius: 10px !important;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.13) !important;
                    border: 0.5px solid #e0e0e0 !important;
                }
                .pm-popup .leaflet-popup-content {
                    margin: 0 !important;
                }
                .pm-popup .leaflet-popup-tip-container {
                    display: none;
                }
                .leaflet-div-icon {
                    background: transparent !important;
                    border: none !important;
                }
            `}</style>

            <div style={{ height: 650, width: '100%' }}>
                <MapContainer
                    center={[30, 20]}
                    zoom={3}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {partners.map((p, i) => (
                        <PartnerMarker key={i} partner={p} />
                    ))}
                </MapContainer>
            </div>
        </>
    );
}