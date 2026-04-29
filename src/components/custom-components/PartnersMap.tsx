'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const partners = [
    // ABŞ - Ştatlara görə ayrılmış
    { city: "Ohio (Lincoln Electric)", position: [41.4993, -81.6944], companies: [{ name: "Lincoln Electric", logo: "https://www.google.com/s2/favicons?sz=64&domain=lincolnelectric.com" }] },
    { city: "Connecticut (Stanley)", position: [41.7637, -72.6851], companies: [{ name: "Stanley", logo: "https://www.google.com/s2/favicons?sz=64&domain=stanleytools.com" }] },
    { city: "California (Raychem/TE)", position: [37.4852, -122.2364], companies: [{ name: "Raychem", logo: "https://www.google.com/s2/favicons?sz=64&domain=te.com" }] },
    { city: "Michigan (MolyKote)", position: [43.6156, -84.2472], companies: [{ name: "MolyKote", logo: "https://www.google.com/s2/favicons?sz=64&domain=dupont.com" }] },
    { city: "Minnesota (3M)", position: [44.9537, -93.0900], companies: [{ name: "3M", logo: "https://www.google.com/s2/favicons?sz=64&domain=3m.com" }] },
    { city: "Washington (Fluke)", position: [47.9790, -122.2021], companies: [{ name: "Fluke", logo: "https://www.google.com/s2/favicons?sz=64&domain=fluke.com" }] },
    { city: "Maryland (DeWalt)", position: [39.2904, -76.6122], companies: [{ name: "DeWalt", logo: "https://www.google.com/s2/favicons?sz=64&domain=dewalt.com" }] },
    { city: "Delaware (DuPont)", position: [39.7447, -75.5484], companies: [{ name: "DuPont", logo: "https://www.google.com/s2/favicons?sz=64&domain=dupont.com" }] },
    { city: "Pennsylvania (Swagelok)", position: [41.3914, -81.4407], companies: [{ name: "Swagelok", logo: "https://www.google.com/s2/favicons?sz=64&domain=swagelok.com" }] },

    // Avropa və Digər
    { city: "Türkiyə (İstanbul)", position: [41.0082, 28.9784], 
        companies: [
            { name: "Çağsan", logo: "https://www.google.com/s2/favicons?sz=64&domain=cagsanmerdiven.com" },
            { name: "Netlift", logo: "https://www.google.com/s2/favicons?sz=64&domain=netlift.com.tr" },
            { name: "Teksan", logo: "https://www.google.com/s2/favicons?sz=64&domain=teksan.com" }
        ] 
    },
    { city: "Türkiyə (İzmir)", position: [38.4237, 27.1428], companies: [{ name: "İZELTAŞ", logo: "https://www.google.com/s2/favicons?sz=64&domain=izeltas.com.tr" }] },
    { city: "Almaniya (Stuttgart)", position: [48.7758, 9.1829], companies: [{ name: "Bosch", logo: "https://www.google.com/s2/favicons?sz=64&domain=bosch.com" }] },
    { city: "Fransa (Rueil-Malmaison)", position: [48.8762, 2.1806], companies: [{ name: "Schneider Electric", logo: "https://www.google.com/s2/favicons?sz=64&domain=se.com" }] },
    { city: "İsveç (Stockholm)", position: [59.3293, 18.0686], companies: [{ name: "Atlas Copco", logo: "https://www.google.com/s2/favicons?sz=64&domain=atlascopco.com" }] },
    { city: "Norveç (Sandefjord)", position: [59.1311, 10.2166], companies: [{ name: "Jotun", logo: "https://www.google.com/s2/favicons?sz=64&domain=jotun.com" }] },
    { city: "İtaliya (Monza)", position: [45.5845, 9.2744], companies: [{ name: "Beta Tools", logo: "https://www.google.com/s2/favicons?sz=64&domain=beta-tools.com" }] },
    { city: "Yaponiya (Anjo)", position: [34.9591, 137.0889], companies: [{ name: "Makita", logo: "https://www.google.com/s2/favicons?sz=64&domain=makita.com" }] },
    { city: "Çin (Xuzhou)", position: [34.2044, 117.2841], companies: [{ name: "XCMG", logo: "https://www.google.com/s2/favicons?sz=64&domain=xcmg.com" }] }
];

const createIcon = (companies: { name: string; logo: string }[], city: string) => {
    const isGrouped = companies.length > 1;
    
    const innerHTML = isGrouped
        ? `<div class="pm-grid">
            ${companies.slice(0, 4).map(c => `
                <img class="pm-logo" 
                    src="${c.logo}" 
                    onerror="this.src='https://ui-avatars.com/api/?name=${c.name}&background=random'" 
                    alt="${c.name}" />
            `).join('')}
           </div>
           <span class="pm-city-tag">${city.split(' ')[0]}</span>`
        : `<img class="pm-logo" src="${companies[0].logo}" alt="${companies[0].name}" />
           <span class="pm-name-label">${companies[0].name}</span>
           <span class="pm-city-tag">${city.split(' ')[0]}</span>`;

    return L.divIcon({
        className: 'pm-icon-wrapper',
        html: `
          <div class="pm-card">
            ${innerHTML}
          </div>
          <div class="pm-pin-line"></div>
          <div class="pm-pin-dot"></div>
        `,
        iconSize: [isGrouped ? 80 : 70, 100],
        iconAnchor: [isGrouped ? 40 : 35, 100],
    });
};

// Hover zamanı z-index qaldıran komponent
function MarkerWithHover({
    partner,
    index,
}: {
    partner: typeof partners[0];
    index: number;
}) {
    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
        const marker = markerRef.current;
        if (!marker) return;

        const el = marker.getElement();
        if (!el) return;

        const raise = () => {
            // Bütün markerları normal z-index-ə qaytar
            document.querySelectorAll('.pm-icon-wrapper').forEach((el) => {
                (el as HTMLElement).style.zIndex = '';
            });
            // Bu markeri ən üstə çıxart
            el.style.zIndex = '9999';
        };

        const reset = () => {
            el.style.zIndex = '';
        };

        el.addEventListener('mouseenter', raise);
        el.addEventListener('mouseleave', reset);

        return () => {
            el.removeEventListener('mouseenter', raise);
            el.removeEventListener('mouseleave', reset);
        };
    }, []);

    return (
        <Marker
            ref={markerRef}
            position={partner.position as [number, number]}
            icon={createIcon(partner.companies, partner.city, index)}
        />
    );
}

export default function PartnersMap() {
    return (
        <>
            <style>{`
                .pm-icon-wrapper {
                    background: transparent !important;
                    border: none !important;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: z-index 0s;
                }

                .pm-card {
                    background: #ffffff;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
                    padding: 8px 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    cursor: default;
                    white-space: nowrap;
                }

                /* Hover zamanı card böyüsün + kölgə güclənsin */
                .pm-icon-wrapper:hover .pm-card {
                    transform: translateY(-4px) scale(1.04);
                    box-shadow: 0 12px 32px rgba(0,0,0,0.28);
                }

                .pm-single { align-items: center; min-width: 100px; }
                .pm-grouped { align-items: flex-start; min-width: 140px; }

                .pm-logo-single {
                    width: 80px !important;
                    height: 36px !important;
                    object-fit: contain;
                    display: block;
                }

                .pm-city {
                    font-size: 11px;
                    font-weight: 600;
                    color: #555;
                    margin-top: 2px;
                }

                .pm-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 3px 0;
                    width: 100%;
                }

                .pm-row + .pm-row { border-top: 1px solid #f0f0f0; }

                .pm-logo {
                    width: 48px;
                    height: 24px;
                    object-fit: contain;
                    flex-shrink: 0;
                }

                .pm-name {
                    font-size: 11px;
                    font-weight: 600;
                    color: #333;
                    white-space: nowrap;
                }

                .pm-pin-line {
                    width: 2px;
                    height: 10px;
                    background: #ccc;
                }

                .pm-pin-dot {
                    width: 12px;
                    height: 12px;
                    background: #FFE500;
                    border-radius: 50%;
                    border: 2px solid #d4a900;
                    position: relative;
                }

                .pm-pin-dot::after {
                    content: "";
                    position: absolute;
                    inset: -5px;
                    border-radius: 50%;
                    background: rgba(255, 229, 0, 0.35);
                    animation: pm-pulse 1.8s ease-out infinite;
                }

                @keyframes pm-pulse {
                    0%   { transform: scale(0.8); opacity: 0.7; }
                    70%  { transform: scale(2);   opacity: 0; }
                    100% { opacity: 0; }
                }

                .leaflet-div-icon {
                    background: transparent !important;
                    border: none !important;
                }
                
                /* Leaflet marker-ların default z-index idarəsi */
                .leaflet-marker-icon:hover {
                    z-index: 9999 !important;
                }
            `}</style>

            <div style={{ height: "650px", width: "100%" }}>
                <MapContainer
                    center={[30, 20]}
                    zoom={3}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {partners.map((p, i) => (
                        <MarkerWithHover key={i} partner={p} index={i} />
                    ))}
                </MapContainer>
            </div>
        </>
    );
}