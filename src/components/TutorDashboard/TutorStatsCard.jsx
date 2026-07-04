
const TutorStatsCard = ({
  title,
  count,
  icon,
}) => {
  return (
    <div
      className="
      bg-[#fcfaf7]
      dark:bg-[#181818]
      border
      border-[#efe5d9]
      dark:border-[#2a2a2a]
      rounded-[28px]
      p-5
      transition-all
      duration-300
      hover:shadow-md
      min-h-[140px]
      flex
      flex-col
      justify-between
    "
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        <div
          className="
          size-12
          rounded-2xl
          bg-orange-100
          dark:bg-[#2a1d10]
          flex
          items-center
          justify-center
          text-orange-500
        "
        >
          {icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5">
        <p
          className="
          text-sm
          text-gray-500
          dark:text-gray-400
          font-medium
        "
        >
          {title}
        </p>

        <h2
          className="
          text-3xl
          font-bold
          text-[#222]
          dark:text-white
          mt-2
        "
        >
          {count || 0}
        </h2>
      </div>
    </div>
  );
};

export default TutorStatsCard;