import Player from "./Player";
import players from "./players";

function PlayersList() {
  const wrapStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(ellipse at top, #0a3d20 0%, #051a0d 50%, #000000 100%)",
    padding: "60px 24px 80px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "48px",
    color: "#f5d76e",
    fontFamily: "'Oswald', system-ui, sans-serif",
  };

  const titleStyle = {
    fontSize: "clamp(36px, 6vw, 64px)",
    fontWeight: 900,
    letterSpacing: "4px",
    textTransform: "uppercase",
    margin: 0,
    textShadow: "0 4px 20px rgba(245,215,110,0.4)",
  };

  const subtitleStyle = {
    fontSize: "14px",
    letterSpacing: "6px",
    textTransform: "uppercase",
    color: "#f9e79f",
    opacity: 0.7,
    marginTop: "8px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px",
    maxWidth: "1400px",
    margin: "0 auto",
    justifyItems: "center",
  };

  return (
    <div style={wrapStyle}>
      <header style={headerStyle}>
        <p style={subtitleStyle}>Ultimate Team</p>
        <h1 style={titleStyle}>My Starting XI</h1>
      </header>
      <div style={gridStyle}>
        {players.map((player, idx) => (
          <Player key={idx} {...player} />
        ))}
      </div>
    </div>
  );
}

export default PlayersList;
