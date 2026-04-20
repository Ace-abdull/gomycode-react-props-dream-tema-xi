import { useState } from "react";
import Player from "./Player";
import players from "./players";
import mourinhoImg from "../assets/players/mourinho.jpg";

const MANAGER = {
  name: "José Mourinho",
  team: "Man United",
  nationality: "Portugal",
  position: "MGR",
  jerseyNumber: 1,
  age: 61,
  rating: 99,
  image: mourinhoImg,
  captain: false,
};

function PlayersList() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
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
    maxWidth: "640px",
    margin: "0 auto",
    aspectRatio: "3 / 4",
    position: "relative",
    background:
      "repeating-linear-gradient(0deg, #0a6b2e 0px, #0a6b2e 50px, #0d7a35 50px, #0d7a35 100px)",
    borderRadius: "16px",
    overflow: "visible",
    boxShadow: "0 30px 80px rgba(0,0,0,0.7), inset 0 0 100px rgba(0,0,0,0.5)",
    border: "3px solid rgba(255,255,255,0.15)",
    isolation: "isolate",
  };

  const PitchLines = () => (
    <svg
      viewBox="0 0 100 133"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <rect x="2" y="2" width="96" height="129" fill="none" stroke="white" strokeWidth="0.4" opacity="0.85" />
      <line x1="2" y1="66.5" x2="98" y2="66.5" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="66.5" r="9" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="66.5" r="0.6" fill="white" opacity="0.85" />
      <rect x="22" y="2" width="56" height="16" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="35" y="2" width="30" height="6" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="12" r="0.6" fill="white" opacity="0.85" />
      <path d="M 42 18 A 8 8 0 0 0 58 18" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="22" y="115" width="56" height="16" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <rect x="35" y="125" width="30" height="6" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
      <circle cx="50" cy="121" r="0.6" fill="white" opacity="0.85" />
      <path d="M 42 115 A 8 8 0 0 1 58 115" fill="none" stroke="white" strokeWidth="0.3" opacity="0.85" />
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
    zIndex: 2,
  });

  const miniCardStyle = {
    width: "78px",
    height: "104px",
    borderRadius: "8px",
    background: "linear-gradient(155deg, #fff4b8 0%, #f5d76e 30%, #d4a017 70%, #b8860b 100%)",
    border: "2px solid rgba(26,18,5,0.5)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.6), inset 0 0 8px rgba(255,255,255,0.3)",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  };

  const miniImgWrap = { flex: 1, overflow: "hidden", position: "relative" };
  const miniImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 15%",
    display: "block",
  };
  const miniRating = {
    position: "absolute",
    top: "3px",
    left: "5px",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "17px",
    fontWeight: 900,
    color: "#1a1205",
    lineHeight: 1,
    textShadow: "0 1px 2px rgba(255,255,255,0.6)",
    zIndex: 2,
  };
  // Position tag — smaller, bottom-edge of card, above the name bar
  const miniPos = {
    position: "absolute",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "8px",
    fontWeight: 900,
    color: "#1a1205",
    background: "rgba(255,244,184,0.95)",
    padding: "1px 5px",
    borderRadius: "3px",
    letterSpacing: "0.5px",
    zIndex: 3,
    boxShadow: "0 1px 2px rgba(0,0,0,0.4)",
    pointerEvents: "none",
  };
  const miniNameBar = {
    background: "rgba(26,18,5,0.9)",
    color: "#f5d76e",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "9px",
    fontWeight: 800,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "3px 2px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const captainTag = {
    position: "absolute",
    top: "3px",
    right: "3px",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ffd700, #ff6b00)",
    color: "#1a1205",
    fontSize: "10px",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid #fff",
    boxShadow: "0 2px 6px rgba(255,140,0,0.7)",
    zIndex: 3,
    fontFamily: "'Oswald', sans-serif",
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

  const shortName = (full) => full.split(" ").slice(-1)[0];

  return (
    <div style={wrapStyle}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes pulseRing { 0%, 100% { box-shadow: 0 6px 16px rgba(0,0,0,0.6), 0 0 0 0 rgba(255,140,0,0.7); } 50% { box-shadow: 0 6px 16px rgba(0,0,0,0.6), 0 0 0 8px rgba(255,140,0,0); } }
        .player-token { transition: opacity 0.2s, filter 0.2s, transform 0.3s; }
        .player-token:hover { transform: translate(-50%, -50%) scale(1.12); z-index: 30; }
        .player-token.captain .mini-card { animation: pulseRing 2s infinite; border-color: #ff8c00 !important; }
        .pitch-area.has-hover .player-token:not(.is-hovered) { opacity: 0.2; filter: blur(1.5px); }
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
        <div style={{
          display: "flex", gap: "32px", justifyContent: "center", alignItems: "flex-start",
          flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto",
        }}>
          <div className={`pitch-area ${hovered !== null ? "has-hover" : ""}`} style={{ ...pitchWrapStyle, flex: "0 1 640px" }}>
            <PitchLines />
            {players.map((p, i) => {
              const isHovered = hovered === i;
              const placeBelow = p.y < 30;
              const placeRight = p.x < 50;
              return (
                <div
                  key={p.name}
                  className={`player-token ${p.captain ? "captain" : ""} ${isHovered ? "is-hovered" : ""}`}
                  style={tokenStyle(p.x, p.y)}
                  onClick={() => setSelected(p)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="mini-card" style={{
                    ...miniCardStyle,
                    boxShadow: isHovered
                      ? "0 10px 24px rgba(0,0,0,0.7), inset 0 0 12px rgba(255,255,255,0.5), 0 0 24px rgba(245,215,110,0.7)"
                      : miniCardStyle.boxShadow,
                  }}>
                    <div style={miniRating}>{p.rating}</div>
                    {p.captain && <div style={captainTag}>C</div>}
                    <div style={miniImgWrap}>
                      <img src={p.image} alt={p.name} style={miniImg} loading="lazy" />
                    </div>
                    <div style={miniPos}>{p.position}</div>
                    <div style={miniNameBar}>{shortName(p.name)}</div>
                  </div>

                  {isHovered && (
                    <div style={{
                      position: "absolute",
                      ...(placeBelow
                        ? { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "14px" }
                        : placeRight
                          ? { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "14px" }
                          : { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "14px" }),
                      zIndex: 50,
                      pointerEvents: "none",
                      animation: "fadeIn 0.2s ease",
                    }}>
                      <Player {...p} size="sm" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Coach mini-card — same design, scaled up so it doesn't look lost beside the pitch */}
          <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", paddingTop: "20px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "5px", color: "#f9e79f", opacity: 0.75, textTransform: "uppercase" }}>Manager</div>
            <div
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => setSelected(MANAGER)}
              onMouseEnter={() => setHovered("mgr")}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                ...miniCardStyle,
                width: "140px",
                height: "186px",
                borderRadius: "12px",
                transition: "transform 0.3s, box-shadow 0.3s",
                transform: hovered === "mgr" ? "scale(1.05)" : "scale(1)",
                boxShadow: hovered === "mgr"
                  ? "0 14px 32px rgba(0,0,0,0.7), inset 0 0 14px rgba(255,255,255,0.5), 0 0 30px rgba(245,215,110,0.7)"
                  : miniCardStyle.boxShadow,
              }}>
                <div style={{ ...miniRating, fontSize: "30px", top: "8px", left: "10px" }}>{MANAGER.rating}</div>
                <div style={miniImgWrap}>
                  <img src={MANAGER.image} alt={MANAGER.name} style={miniImg} loading="lazy" />
                </div>
                <div style={{ ...miniPos, fontSize: "11px", padding: "2px 8px", bottom: "26px" }}>{MANAGER.position}</div>
                <div style={{ ...miniNameBar, fontSize: "13px", padding: "5px 4px", letterSpacing: "1px" }}>{shortName(MANAGER.name)}</div>
              </div>
              {hovered === "mgr" && (
                <div style={{
                  position: "absolute",
                  right: "100%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  marginRight: "16px",
                  zIndex: 50,
                  pointerEvents: "none",
                  animation: "fadeIn 0.2s ease",
                }}>
                  <Player {...MANAGER} size="sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div style={gridStyle}>
          {players.map((p, i) => (
            <div key={p.name} style={{ animation: `slideUp 0.5s ease ${i * 0.05}s both` }} onClick={() => setSelected(p)}>
              <Player {...p} />
            </div>
          ))}
          <div
            style={{ animation: `slideUp 0.5s ease ${players.length * 0.05}s both` }}
            onClick={() => setSelected(MANAGER)}
          >
            <Player {...MANAGER} />
          </div>
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
