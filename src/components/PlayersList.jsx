import { useState } from "react";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("pitch");

  const wrapStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(ellipse at top, #0d1f12 0%, #050a06 60%, #000000 100%)",
    padding: "40px 20px 80px",
    fontFamily: "'Oswald', system-ui, sans-serif",
  };

  const headerStyle = { textAlign: "center", marginBottom: "32px", color: "#f5d76e" };

  const titleStyle = {
    fontSize: "clamp(36px, 6vw, 72px)",
    fontWeight: 900,
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: 0,
    background: "linear-gradient(135deg, #fff4b8, #f5d76e, #b8860b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 30px rgba(245,215,110,0.3)",
  };

  const subtitleStyle = {
    fontSize: "13px",
    letterSpacing: "8px",
    textTransform: "uppercase",
    color: "#f9e79f",
    opacity: 0.6,
    marginBottom: "8px",
  };

  const toggleWrap = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "32px",
  };

  const tabBtn = (active) => ({
    padding: "10px 28px",
    background: active ? "linear-gradient(135deg, #f5d76e, #b8860b)" : "rgba(255,255,255,0.05)",
    color: active ? "#1a1205" : "#f5d76e",
    border: active ? "none" : "1px solid rgba(245,215,110,0.3)",
    borderRadius: "999px",
    fontWeight: 800,
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.3s",
  });

  const pitchWrapStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    aspectRatio: "2 / 3",
    position: "relative",
    background:
      "repeating-linear-gradient(0deg, #0a6b2e 0px, #0a6b2e 60px, #0d7a35 60px, #0d7a35 120px)",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 30px 80px rgba(0,0,0,0.7), inset 0 0 100px rgba(0,0,0,0.4)",
    border: "3px solid rgba(255,255,255,0.15)",
  };

  const PitchLines = () => (
    <svg
      viewBox="0 0 100 150"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <rect x="2" y="2" width="96" height="146" fill="none" stroke="white" strokeWidth="0.4" opacity="0.85" />
      <line x1="2" y1="75" x2="98" y2="75" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="75" r="9" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="75" r="0.6" fill="white" opacity="0.85" />
      <rect x="22" y="2" width="56" height="18" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="35" y="2" width="30" height="7" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="14" r="0.6" fill="white" opacity="0.85" />
      <path d="M 42 20 A 8 8 0 0 0 58 20" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="22" y="130" width="56" height="18" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="35" y="141" width="30" height="7" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="136" r="0.6" fill="white" opacity="0.85" />
      <path d="M 42 130 A 8 8 0 0 1 58 130" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
    </svg>
  );

  const tokenStyle = (x, y) => ({
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s",
    zIndex: 2,
  });

  const portraitStyle = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #f5d76e",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 0 0 3px rgba(0,0,0,0.4)",
    background: "#1a1205",
  };

  const portraitImg = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" };

  const nameTagStyle = {
    marginTop: "6px",
    background: "rgba(0,0,0,0.85)",
    color: "#f5d76e",
    padding: "3px 10px",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "1px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    border: "1px solid rgba(245,215,110,0.4)",
  };

  const numBadge = {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f5d76e, #b8860b)",
    color: "#1a1205",
    fontSize: "11px",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #000",
    boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
  };

  const captainTag = {
    position: "absolute",
    top: "-6px",
    left: "-6px",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ffd700, #ff6b00)",
    color: "#1a1205",
    fontSize: "11px",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #fff",
    boxShadow: "0 2px 8px rgba(255,140,0,0.6)",
  };

  const modalBackdrop = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    padding: "20px",
    animation: "fadeIn 0.3s ease",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
    maxWidth: "1400px",
    margin: "0 auto",
    justifyItems: "center",
  };

  // Get last name for tag (or use first 2 names)
  const shortName = (full) => {
    const parts = full.split(" ");
    return parts[parts.length - 1];
  };

  return (
    <div style={wrapStyle}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes pulseRing { 0%, 100% { box-shadow: 0 6px 20px rgba(0,0,0,0.6), 0 0 0 3px rgba(0,0,0,0.4), 0 0 0 0 rgba(255,140,0,0.7); } 50% { box-shadow: 0 6px 20px rgba(0,0,0,0.6), 0 0 0 3px rgba(0,0,0,0.4), 0 0 0 10px rgba(255,140,0,0); } }
        .player-token:hover { transform: translate(-50%, -50%) scale(1.18) !important; z-index: 10; }
        .player-token.captain .portrait { animation: pulseRing 2s infinite; border-color: #ff8c00 !important; }
      `}</style>

      <header style={headerStyle}>
        <p style={subtitleStyle}>Ultimate Team · 4-3-3</p>
        <h1 style={titleStyle}>My Starting XI</h1>
      </header>

      <div style={toggleWrap}>
        <button style={tabBtn(view === "pitch")} onClick={() => setView("pitch")}>Formation</button>
        <button style={tabBtn(view === "cards")} onClick={() => setView("cards")}>Cards</button>
      </div>

      {view === "pitch" ? (
        <div style={pitchWrapStyle}>
          <PitchLines />
          {players.map((p, i) => (
            <div
              key={i}
              className={`player-token ${p.captain ? "captain" : ""}`}
              style={tokenStyle(p.x, p.y)}
              onClick={() => setSelected(p)}
            >
              <div className="portrait" style={{ position: "relative", ...portraitStyle }}>
                <img src={p.image} alt={p.name} style={portraitImg} />
                <div style={numBadge}>{p.jerseyNumber}</div>
                {p.captain && <div style={captainTag}>C</div>}
              </div>
              <div style={nameTagStyle}>{shortName(p.name)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={gridStyle}>
          {players.map((p, i) => (
            <div key={i} style={{ animation: `slideUp 0.5s ease ${i * 0.05}s both` }}>
              <Player {...p} />
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div style={modalBackdrop} onClick={() => setSelected(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ animation: "slideUp 0.4s ease" }}>
            <Player {...selected} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayersList;
