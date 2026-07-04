
const DashboardSection = ({
  title,
  children,
}) => {
  return (
    <div
      className="
      bg-[#fcfaf7]
      dark:bg-[#181818]
      border
      border-[#efe5d9]
      dark:border-[#2a2a2a]
      rounded-[32px]
      p-6
      md:p-8
    "
    >
      {/* TITLE */}
      <div className="mb-6">
        <h2
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#222]
          dark:text-white
        "
        >
          {title}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardSection;