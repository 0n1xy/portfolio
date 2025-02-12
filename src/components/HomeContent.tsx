function HomeContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Ảnh đại diện */}
      <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Phần giới thiệu */}
      <div className="text-center mt-5">
        <p className="text-gray-600">HI THERE! I'M</p>
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-purple-600">ALEX</span> CALIA
        </h1>
        <p className="text-gray-600 mt-2">
          A{" "}
          <span className="text-purple-600 font-semibold">
            Front-End Web Developer
          </span>{" "}
          passionate about creating interactive applications and experiences on
          the web.
        </p>

        {/* Nút và Icon */}
        <div className="mt-5 flex space-x-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md">
            Resume
          </button>
          <a href="#" className="text-purple-600 text-2xl">
            🔗
          </a>
          <a href="#" className="text-purple-600 text-2xl">
            🏠
          </a>
          <a href="#" className="text-purple-600 text-2xl">
            📧
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
