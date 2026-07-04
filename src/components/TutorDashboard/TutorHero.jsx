import {
  CalendarDays,
  Clock3,
  LogOut,
  Users,
  Star,
  GraduationCap,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const TutorHero = ({
  dashboardData,
  handleLogout,
}) => {
  const navigate =
    useNavigate();

  const remainingPoints =
    Math.max(
      0,
      100 -
        (dashboardData?.points ||
          0)
    );

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
      shadow-sm
    "
    >
      <div
        className="
        grid
        lg:grid-cols-2
        gap-8
        items-center
      "
      >
        {/* LEFT */}
        <div>
         <h1
  className="
  text-3xl
  md:text-4xl
  font-bold
  text-[#222]
  dark:text-white
"
>
  Hi{" "}
  {dashboardData?.name ||
    "Tutor"}{" "}
  👋
</h1>

          <p
            className="
            text-gray-500
            dark:text-gray-400
            mt-3
            text-base
            md:text-lg
          "
          >
            Manage your learners
            and sessions easily.
          </p>

          {/* QUICK STATS */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* TODAY */}
            <div
              className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-2xl
              bg-orange-50
              dark:bg-[#1a140d]
            "
            >
              <CalendarDays
                size={18}
                className="text-orange-500"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Today
                </p>

                <p className="font-bold text-[#222] dark:text-white">
                  {
                    dashboardData?.todaySessions
                  }{" "}
                  Sessions
                </p>
              </div>
            </div>

            {/* UPCOMING */}
            <div
              className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-2xl
              bg-blue-50
              dark:bg-[#111827]
            "
            >
              <Clock3
                size={18}
                className="text-blue-500"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Upcoming
                </p>

                <p className="font-bold text-[#222] dark:text-white">
                  {
                    dashboardData?.upcomingSessions
                  }{" "}
                  Sessions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
          lg:border-l
          border-[#efe5d9]
          dark:border-[#2a2a2a]
          lg:pl-8
        "
        >
          {/* Pending Learners */}
          <div
            className="
            bg-orange-50
            dark:bg-[#1a140d]
            border
            border-orange-100
            dark:border-[#3b2a15]
            rounded-[28px]
            p-5
          "
          >
            <div className="flex items-center gap-3">
              <Users className="text-orange-500" />

              <div>
                <h3 className="font-bold text-[#222] dark:text-white text-lg">
                  Pending Learners
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {
                    dashboardData?.pendingLearners
                  }{" "}
                  learners waiting
                </p>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div
            className="
            mt-5
            bg-white
            dark:bg-[#121212]
            border
            border-[#efe5d9]
            dark:border-[#2a2a2a]
            rounded-[28px]
            p-5
          "
          >
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500" />

              <div>
                <h3 className="font-bold text-[#222] dark:text-white text-lg">
                  Tutor Rating
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  ⭐{" "}
                  {dashboardData?.rating?.toFixed(
                    1
                  ) || "0.0"}{" "}
                  (
                  {dashboardData?.totalRatings ||
                    0}{" "}
                  reviews)
                </p>
              </div>
            </div>
          </div>

          {/* CERTIFICATE BUTTON */}
          <button
            disabled={
              !dashboardData?.certificateUnlocked
            }
            onClick={() =>
              navigate(
                "/tutor/certificate"
              )
            }
            className={`
            mt-5
            w-full
            h-12
            rounded-2xl
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition-all

            ${
              dashboardData?.certificateUnlocked
                ? `
                bg-orange-500
                hover:bg-orange-600
                text-white
              `
                : `
                bg-gray-200
                dark:bg-[#2a2a2a]
                text-gray-500
                cursor-not-allowed
              `
            }
          `}
          >
            <GraduationCap
              size={18}
            />

            {dashboardData?.certificateUnlocked
              ? "View Internship Certificate"
              : `Certificate Locked (${remainingPoints} points left)`}
          </button>

          {/* LOGOUT */}
          <button
            onClick={
              handleLogout
            }
            className="
            mt-5
            w-full
            h-12
            rounded-2xl
            border
            border-red-300
            text-red-500
            hover:bg-red-50
            dark:hover:bg-[#2a1212]
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition-all
          "
          >
            <LogOut
              size={18}
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorHero;