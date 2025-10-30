export default function Proyectos() {
    const items = [
      { title: "Teach-house" },
      { title: "Teach-house" },
      { title: "Teach-house" },
    ];
  
    return (
      <div className="projects">
        {items.map((it, i) => (
          <div className="proj-row" key={i}>
            <div className="proj-row__inner">
              <h3 className="proj-title">{it.title}</h3>
              <div className="proj-media" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  