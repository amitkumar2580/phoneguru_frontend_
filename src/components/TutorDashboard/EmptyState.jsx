

const EmptyState = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="
      border-2
      border-dashed
      border-[#eadbc9]
      dark:border-[#2a2a2a]
      rounded-[28px]
      bg-[#fffdf9]
      dark:bg-[#121212]
      p-10
      md:p-14
      text-center
    "
    >
      <img
        src="/empty-box.webp"
        alt="Empty"
        loading="lazy"
        className="size-24 md:size-28 mx-auto"
      />

      <h3
        className="
        text-2xl
        md:text-3xl
        font-bold
        text-[#222]
        dark:text-white
        mt-5
      "
      >
        {title}
      </h3>

      <p
        className="
        text-gray-500
        dark:text-gray-400
        mt-3
        text-sm
        md:text-base
      "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default EmptyState;