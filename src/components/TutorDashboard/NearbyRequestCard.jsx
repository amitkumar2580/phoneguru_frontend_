import {
  Phone,
  UserRound,
  BookOpen,
  Clock3,
} from "lucide-react";

import {
  useDispatch,
} from "react-redux";

import toast from "react-hot-toast";

import {
  acceptRequest,
  getTodaySessions,
  getUpcomingSessions,
} from "../../redux/slices/sessionSlice";

import {
  getNearbyRequests,
} from "../../redux/slices/tutorSlice";

const NearbyRequestCard = ({
  request,
}) => {
  const dispatch =
    useDispatch();

  const handleAccept =
    async () => {
      const result =
        await dispatch(
          acceptRequest(
            request._id
          )
        );

      if (
        acceptRequest.fulfilled.match(
          result
        )
      ) {
        toast.success(
          "Request accepted"
        );

        // refresh sessions
        dispatch(
          getTodaySessions()
        );

        dispatch(
          getUpcomingSessions()
        );

        // refresh nearby requests
        navigator.geolocation.getCurrentPosition(
          (
            position
          ) => {
            dispatch(
              getNearbyRequests(
                {
                  lat: position
                    .coords
                    .latitude,

                  lng: position
                    .coords
                    .longitude,
                }
              )
            );
          }
        );
      } else {
        toast.error(
          "Failed to accept request"
        );
      }
    };

  return (
    <div
      className="
      bg-white
      dark:bg-[#121212]
      border
      border-[#efe5d9]
      dark:border-[#2a2a2a]
      rounded-[28px]
      p-6
    "
    >
      <div className="flex items-start justify-between gap-4">
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
            {/* NAME */}
            <h3
              className="
              text-xl
              font-bold
              text-[#222]
              dark:text-white
            "
            >
              {request?.name}
            </h3>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-3 text-sm">
              <Phone size={16} />
              <span>
                {request?.phone}
              </span>
            </div>

            {/* TOPICS */}
            <div className="flex items-start gap-2 text-gray-500 dark:text-gray-400 mt-3 text-sm">
              <BookOpen
                size={16}
                className="mt-1 shrink-0"
              />

              <span>
                {request?.learningTopics?.join(
                  ", "
                )}
              </span>
            </div>

            {/* TIME */}
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-3 text-sm">
              <Clock3
                size={16}
              />

              <span className="capitalize">
                {
                  request?.preferredTime
                }
              </span>
            </div>

            {/* TYPE */}
            <div className="mt-4">
              <span
                className="
                px-4
                py-2
                rounded-full
                bg-orange-100
                dark:bg-[#2a1d10]
                text-orange-600
                text-sm
                font-semibold
              "
              >
                {request?.isSelfLearner
                  ? "Self Learner"
                  : "Someone Else"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={
          handleAccept
        }
        className="
        mt-6
        w-full
        h-12
        rounded-2xl
        bg-orange-500
        hover:bg-orange-600
        text-white
        font-semibold
        transition-all
      "
      >
        Accept Request
      </button>
    </div>
  );
};

export default NearbyRequestCard;