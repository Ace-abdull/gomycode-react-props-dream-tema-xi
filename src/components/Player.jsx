// FIFA Ultimate Team-style player card component
function Player({ name, team, nationality, position, jerseyNumber, age, image }) {
  const cardStyle = {
    width: "260px",
    height: "400px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, #f5d76e 0%, #d4af37 35%, #f9e79f 55%, #b8860b 100%)",
    boxShadow:
      "0 20px 50px -10px rgba(0,0,0,0.6), inset 0 0 30px rgba(255,255,255,0.15)",
    padding: "18px",
    color: "#2b1d05",
    fontFamily: "'Oswald', 'Bebas Neue', system-ui, sans-serif",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s",
    cursor: "pointer",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "8px",
  };

  const ratingStyle = {
    fontSize: "44px",
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: "-1px",
    textShadow: "0 2px 4px rgba(0,0,0,0.25)",
  };

  const positionStyle = {
    fontSize: "16px",
    fontWeight: 700,
    marginTop: "4px",
    letterSpacing: "1px",
  };

  const numberStyle = {
    fontSize: "14px",
    fontWeight: 700,
    background: "rgba(43,29,5,0.15)",
    padding: "4px 10px",
    borderRadius: "999px",
  };

  const imageWrapStyle = {
    width: "150px",
    height: "150px",
    margin: "4px auto 8px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid rgba(43,29,5,0.4)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
    background: "rgba(255,255,255,0.2)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  };

  const nameStyle = {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "6px 0 8px",
    lineHeight: 1.1,
    minHeight: "40px",
  };

  const dividerStyle = {
    height: "1px",
    background: "rgba(43,29,5,0.3)",
    margin: "6px 0",
  };

  const statsRowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px 12px",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
  };

  const statValueStyle = { fontWeight: 800, textAlign: "right" };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <div style={topRowStyle}>
        <div>
          <div style={ratingStyle}>{Math.min(99, 80 + (jerseyNumber % 19))}</div>
          <div style={positionStyle}>{position}</div>
        </div>
        <div style={numberStyle}>#{jerseyNumber}</div>
      </div>

      <div style={imageWrapStyle}>
        <img src={image} alt={name} style={imgStyle} loading="lazy" />
      </div>

      <div style={nameStyle}>{name}</div>
      <div style={dividerStyle} />
      <div style={statsRowStyle}>
        <span>Club</span>
        <span style={statValueStyle}>{team}</span>
        <span>Nation</span>
        <span style={statValueStyle}>{nationality}</span>
        <span>Age</span>
        <span style={statValueStyle}>{age}</span>
      </div>
    </div>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  position: "ST",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/200x200?text=Player",
};

export default Player;
