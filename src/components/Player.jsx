// Premium FIFA-style player card — rectangular with full visible photo
function Player({
  name = "Unknown Player",
  team = "Free Agent",
  nationality = "Unknown",
  position = "ST",
  jerseyNumber = 0,
  age = 0,
  rating = 75,
  image,
  captain = false,
  size = "lg",
}) {
  const scale = size === "sm" ? 0.55 : 1;
  const W = 300 * scale;
  const H = 460 * scale;

  const cardStyle = {
    width: `${W}px`,
    height: `${H}px`,
    borderRadius: "18px",
    background:
      "linear-gradient(150deg, #fff4b8 0%, #f5d76e 18%, #d4a017 45%, #f9e79f 65%, #b8860b 100%)",
    boxShadow:
      "0 25px 60px -15px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.25) inset, 0 0 80px -20px rgba(245,215,110,0.6)",
    padding: `${18 * scale}px`,
    color: "#1a1205",
    fontFamily: "'Oswald', 'Bebas Neue', system-ui, sans-serif",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.45s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.45s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  };

  const shineStyle = {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "60%",
    height: "100%",
    background:
      "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
    transform: "skewX(-20deg)",
    pointerEvents: "none",
  };

  const captainBadge = {
    position: "absolute",
    top: `${12 * scale}px`,
    right: `${12 * scale}px`,
    width: `${32 * scale}px`,
    height: `${32 * scale}px`,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ffd700, #ff8c00)",
    color: "#1a1205",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: `${16 * scale}px`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.4), inset 0 0 8px rgba(255,255,255,0.5)",
    border: "2px solid rgba(255,255,255,0.6)",
    zIndex: 3,
  };

  const topRowStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: `${4 * scale}px`,
    zIndex: 2,
  };

  const ratingStyle = {
    fontSize: `${56 * scale}px`,
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: "-2px",
    textShadow: "0 3px 6px rgba(0,0,0,0.3)",
  };

  const positionStyle = {
    fontSize: `${20 * scale}px`,
    fontWeight: 800,
    marginTop: `${2 * scale}px`,
    letterSpacing: "2px",
  };

  const imageWrapStyle = {
    position: "absolute",
    right: `${10 * scale}px`,
    top: `${20 * scale}px`,
    width: `${180 * scale}px`,
    height: `${230 * scale}px`,
    overflow: "hidden",
    zIndex: 1,
    filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.4))",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
  };

  const nameWrapStyle = {
    marginTop: "auto",
    textAlign: "center",
    borderTop: "2px solid rgba(26,18,5,0.4)",
    paddingTop: `${10 * scale}px`,
    zIndex: 2,
  };

  const nameStyle = {
    fontSize: `${22 * scale}px`,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    margin: 0,
    lineHeight: 1.1,
  };

  const dividerStyle = {
    height: "1px",
    background: "rgba(26,18,5,0.35)",
    margin: `${8 * scale}px 0`,
  };

  const statsRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: `${4 * scale}px`,
    fontSize: `${11 * scale}px`,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
  };

  const statItem = { display: "flex", flexDirection: "column", gap: "2px" };
  const statLabel = { opacity: 0.7, fontSize: `${9 * scale}px`, letterSpacing: "1px" };
  const statValue = { fontWeight: 900, fontSize: `${12 * scale}px` };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px) scale(1.04) rotateZ(-1deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1) rotateZ(0)";
      }}
    >
      <div style={shineStyle} />
      {captain && <div style={captainBadge} title="Captain">C</div>}

      <div style={topRowStyle}>
        <div style={ratingStyle}>{rating}</div>
        <div style={positionStyle}>{position}</div>
        <div style={{ fontSize: `${14 * scale}px`, fontWeight: 700, marginTop: `${4 * scale}px`, opacity: 0.85 }}>
          #{jerseyNumber}
        </div>
      </div>

      <div style={imageWrapStyle}>
        <img src={image} alt={name} style={imgStyle} loading="lazy" />
      </div>

      <div style={nameWrapStyle}>
        <h3 style={nameStyle}>{name}</h3>
        <div style={dividerStyle} />
        <div style={statsRowStyle}>
          <div style={statItem}>
            <span style={statLabel}>Club</span>
            <span style={statValue}>{team}</span>
          </div>
          <div style={statItem}>
            <span style={statLabel}>Nation</span>
            <span style={statValue}>{nationality}</span>
          </div>
          <div style={statItem}>
            <span style={statLabel}>Age</span>
            <span style={statValue}>{age}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
