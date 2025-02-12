import HomeContent from "./HomeContent";

function MainContent() {
  return (
    <div className="flex flex-col space-y-20 px-10">
      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <HomeContent />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-purple-600">👤 About Section</h1>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-purple-600">
          📂 Projects Section
        </h1>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-purple-600">
          💬 Contact Section
        </h1>
      </section>
    </div>
  );
}

export default MainContent;
