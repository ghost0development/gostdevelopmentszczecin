"use client";

import { useEffect, useRef } from "react";

export default function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (!mapRef.current || initRef.current) return;
    initRef.current = true;

    let map: import("leaflet").Map | null = null;

    const load = async () => {
      const L = (await import("leaflet")).default;
      const container = mapRef.current;
      if (!container) return;

      map = L.map(container, {
        center: [53.4447, 14.5476],
        zoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);

      const accentIcon = L.divIcon({
        className: "",
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -44],
        html: `<div style="position:relative;width:32px;height:42px;">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 26 16 26s16-14 16-26C32 7.16 24.84 0 16 0z" fill="#c8ff00"/>
            <circle cx="16" cy="15" r="6" fill="#08080a"/>
          </svg>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-55%);width:6px;height:6px;background:#c8ff00;border-radius:50%;animation:pulse-dot 2s ease-in-out infinite;"></div>
        </div>`,
      });

      L.marker([53.4447, 14.5476], { icon: accentIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:system-ui;min-width:180px;">
            <strong style="font-size:13px;">Ghost Development</strong><br/>
            <span style="font-size:11px;color:#888;">ul. Asnyka 3/22<br/>71-526 Szczecin</span>
          </div>`
        )
        .openPopup();
    };

    load();

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[300px] border border-border-strong"
      style={{ background: "#0a0a0f" }}
    />
  );
}
