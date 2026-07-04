import {
  CalendarDays,
  Clock3,
  Phone,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import ScheduleSessionModal from "./ScheduleSessionModal";

import {
  scheduleSession,
  getTodaySessions,
  getUpcomingSessions,
  getSessionHistory,
  updateSessionStatus,
} from "../../redux/slices/sessionSlice";

const SessionCard = ({
  session,
}) => {
  const dispatch =
    useDispatch();

  const [
    isModalOpen,
    setIsModalOpen,
  ] = useState(false);

  const getStatusColor =
    (status) => {
      switch (status) {
        case "COMPLETED":
          return "bg-green-100 text-green-700";

        case "ONGOING":
          return "bg-yellow-100 text-yellow-700";

        case "SCHEDULED":
          return "bg-blue-100 text-blue-700";

        case "ACCEPTED":
          return "bg-purple-100 text-purple-700";

        case "CANCELLED":
          return "bg-red-100 text-red-600";

        default:
          return "bg-gray-100 text-gray-700";
      }
    };

  // SCHEDULE SESSION
  const handleSchedule =
    async (data) => {
      const result =
        await dispatch(
          scheduleSession({
            sessionId:
              session._id,

            scheduledDate:
              data.scheduledDate,

            scheduledTime:
              data.scheduledTime,
          })
        );

      if (
        scheduleSession.fulfilled.match(
          result
        )
      ) {
        toast.success(
          "Session scheduled"
        );

        dispatch(
          getTodaySessions()
        );

        dispatch(
          getUpcomingSessions()
        );

        dispatch(
          getSessionHistory()
        );

        setIsModalOpen(
          false
        );
      } else {
        toast.error(
          result.payload ||
            "Failed to schedule"
        );
      }
    };

  // UPDATE STATUS
  const handleStatusUpdate =
    async (status) => {
      const result =
        await dispatch(
          updateSessionStatus(
            {
              sessionId:
                session._id,

              status,
            }
          )
        );

      if (
        updateSessionStatus.fulfilled.match(
          result
        )
      ) {
        toast.success(
          `Session ${status.toLowerCase()}`
        );

        dispatch(
          getTodaySessions()
        );

        dispatch(
          getUpcomingSessions()
        );

        dispatch(
          getSessionHistory()
        );
      } else {
        toast.error(
          result.payload ||
            "Failed to update session"
        );
      }
    };

  return (
    <>
      <div
        className="
        bg-white
        dark:bg-[#121212]
        border
        border-[#efe5d9]
        dark:border-[#2a2a2a]
        rounded-[28px]
        p-5
        md:p-6
      "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
        >
          {/* LEFT */}
          <div className="flex gap-4">
            <div
              className="
              size-14
              rounded-2xl
              bg-orange-100
              dark:bg-[#2a1d10]
              flex
              items-center
              justify-center
              text-orange-500
              shrink-0
            "
            >
              <UserRound
                size={24}
              />
            </div>

            <div>
              <h3
                className="
                text-xl
                font-bold
                text-[#222]
                dark:text-white
              "
              >
                {session
                  ?.learner
                  ?.name ||
                  "Learner"}
              </h3>

              <div className="mt-3 space-y-2">
                {/* PHONE */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Phone
                    size={16}
                  />

                  <span>
                    {session
                      ?.learner
                      ?.phone ||
                      "No phone"}
                  </span>
                </div>

                {/* DATE */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <CalendarDays
                    size={16}
                  />

                  <span>
                    {session?.scheduledDate
                      ? new Date(
                          session.scheduledDate
                        ).toLocaleDateString()
                      : "Date not scheduled"}
                  </span>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock3
                    size={16}
                  />

                  <span>
                    {session?.scheduledTime ||
                      "Time not scheduled"}
                  </span>
                </div>

                {/* TOPICS */}
                {session
                  ?.learner
                  ?.learningTopics
                  ?.length >
                  0 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-orange-500">
                      Topics:
                    </span>{" "}
                    {session.learner.learningTopics.join(
                      ", "
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start lg:items-end">
            {/* STATUS */}
            <span
              className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              ${getStatusColor(
                session?.status
              )}
            `}
            >
              {session?.status ||
                "Pending"}
            </span>

            {/* ACCEPTED */}
            {session?.status ===
              "ACCEPTED" &&
              !session?.scheduledDate && (
                <button
                  onClick={() =>
                    setIsModalOpen(
                      true
                    )
                  }
                  className="
                  mt-4
                  px-5
                  py-2
                  rounded-2xl
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  font-semibold
                  text-sm
                "
                >
                  Schedule
                  Session
                </button>
              )}

            {/* SCHEDULED */}
           {session?.status ===
  "SCHEDULED" &&
new Date(
  session?.scheduledDate
).toDateString() ===
new Date().toDateString() && (
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                    handleStatusUpdate(
                      "ONGOING"
                    )
                  }
                  className="
                  px-4
                  py-2
                  rounded-2xl
                  bg-green-500
                  text-white
                  text-sm
                  font-semibold
                "
                >
                  Start
                </button>

                <button
                  onClick={() =>
                    handleStatusUpdate(
                      "CANCELLED"
                    )
                  }
                  className="
                  px-4
                  py-2
                  rounded-2xl
                  border
                  border-red-300
                  text-red-500
                  text-sm
                  font-semibold
                "
                >
                  Cancel
                </button>
              </div>
            )}

            {/* ONGOING */}
            {session?.status ===
              "ONGOING" && (
              <button
                onClick={() =>
                  handleStatusUpdate(
                    "COMPLETED"
                  )
                }
                className="
                mt-4
                px-5
                py-2
                rounded-2xl
                bg-blue-500
                text-white
                text-sm
                font-semibold
              "
              >
                Mark Complete
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ScheduleSessionModal
        isOpen={
          isModalOpen
        }
        onClose={() =>
          setIsModalOpen(
            false
          )
        }
        onSave={
          handleSchedule
        }
      />
    </>
  );
};

export default
  SessionCard;