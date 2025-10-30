import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Resumen from "./components/Resumen.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Extracurriculares from "./components/Extracurriculares.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Contacto from "./components/Contacto.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="inicio" className="section">
        <div className="container"><Home /></div>
      </section>

      <section id="resumen" className="section">
        <div className="container"><Resumen /></div>
      </section>

      <section id="proyectos" className="section">
        <div className="container"><Proyectos /></div>
      </section>

      <section id="extracurriculares" className="section">
        <div className="container"><Extracurriculares /></div>
      </section>

      <section id="habilidades" className="section">
        <div className="container"><Habilidades /></div>
      </section>

      <section id="contacto" className="section">
        <div className="container"><Contacto /></div>
      </section>
    </>
  );
}

