import "./App.css";
import MainContent from "./components/MainContent";
import SidebarComponent from "./layouts/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Trượt theo khi cuộn */}
      <div className="sticky top-0 h-screen">
        <SidebarComponent />
      </div>

      {/* Nội dung bên phải */}
      <div className="flex-1 p-10 overflow-auto">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
