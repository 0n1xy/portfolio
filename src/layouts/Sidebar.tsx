import {
  CommentOutlined,
  FolderOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

function SidebarComponent() {
  // Hàm cuộn đến vị trí section khi click vào icon
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed left-0 top-0 min-h-screen w-20 bg-purple-600 flex flex-col justify-center items-center py-4">
      <div
        className="min-h-[100px] flex items-center justify-center cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <HomeOutlined className="text-2xl text-white" />
      </div>

      <div
        className="min-h-[100px] flex items-center justify-center cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <UserOutlined className="text-2xl text-white" />
      </div>

      <div
        className="min-h-[100px] flex items-center justify-center cursor-pointer"
        onClick={() => scrollToSection("projects")}
      >
        <FolderOutlined className="text-2xl text-white" />
      </div>

      <div
        className="min-h-[100px] flex items-center justify-center cursor-pointer"
        onClick={() => scrollToSection("contact")}
      >
        <CommentOutlined className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default SidebarComponent;
