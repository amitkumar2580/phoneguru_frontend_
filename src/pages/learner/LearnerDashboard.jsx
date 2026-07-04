import {
  CalendarDays,
  Phone,
  Video,
  Home,
  Smartphone,
  UserRound,
  PlusCircle,
  LogOut,
} from "lucide-react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getLearnerDashboard,
  logoutLearner,
} from "../../redux/slices/learnerSlice";

import { rateTutor } from "../../redux/slices/sessionSlice";
const LearnerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dashboardData, dashboardLoading } = useSelector(
    (state) => state.learner,
  );

  const requests = dashboardData?.requests || [];

  const sessions = dashboardData?.sessions || [];

  const learner = dashboardData?.dashboardOwner;

useEffect(() => {
  // Initial fetch
  dispatch(
    getLearnerDashboard()
  );

  // Auto refresh
  const interval =
    setInterval(
      () => {
        dispatch(
          getLearnerDashboard()
        );
      },
    10000
    );

  // Cleanup
  return () =>
    clearInterval(
      interval
    );
}, [dispatch]);

  const handleLogout = async () => {
    const result = await dispatch(logoutLearner());

    if (logoutLearner.fulfilled.match(result)) {
      toast.success("Logged out successfully");

      navigate("/");
    }
  };

  const handleFinishLearning = async (sessionId) => {
    const result = await dispatch(
      rateTutor({
        sessionId,

        rating: 5,

        feedback: "Great tutor",
      }),
    );

    if (rateTutor.fulfilled.match(result)) {
      toast.success("Learning completed");

      dispatch(getLearnerDashboard());
    } else {
      toast.error(result.payload || "Something went wrong");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ONGOING":
        return " text-yellow-700";

      case "COMPLETED":
        return "text-green-700";

      case "ACCEPTED":
        return " text-blue-700";

      default:
        return "text-red-500";
    }
  };

  const getSessionIcon = (mode) => {
    switch (mode) {
      case "Call":
        return (
          <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white">
            <Phone size={28} />
          </div>
        );

      case "Video Call":
        return (
          <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center text-white">
            <Video size={28} />
          </div>
        );

      case "Home Visit":
        return (
          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
            <Home size={28} />
          </div>
        );

      default:
        return (
          <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white">
            <Smartphone size={28} />
          </div>
        );
    }
  };

  if (dashboardLoading) {
    return (
      <div className="min-h-screen bg-[#f8f4ee] dark:bg-[#0f0f0f] flex items-center justify-center text-2xl font-semibold text-[#222] dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f4ee] dark:bg-[#0f0f0f] px-5 py-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP ACTIONS */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={() => navigate("/learner/create-request")}
            className="h-12 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center gap-2"
          >
            <PlusCircle size={18} />
            New Request
          </button>

          <button
            onClick={handleLogout}
            className="h-12 px-6 rounded-2xl border border-red-300 text-red-500 hover:bg-red-50 font-semibold flex items-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* TOP CARD */}
        <div
          className="bg-[#fcfaf7] dark:bg-[#181818]
border border-[#efe5d9]
dark:border-[#2a2a2a] rounded-[32px] p-8 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[220px]">
            {/* LEFT */}
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-bold text-[#222] dark:text-white">
                Hi {learner?.name || "Learner"} 👋
              </h1>

              {/* Show only after tutor accepts */}
              {learner && learner?.status !== "PENDING" && (
                <>
                  <div className="flex items-center gap-3 mt-5 flex-wrap">
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      Learning Status:
                    </p>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                        learner?.status,
                      )}`}
                    >
                      {learner?.status}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                      <UserRound size={16} />

                      {learner?.isSelfLearner ? "Self Learner" : "Someone Else"}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT */}
            <div className="lg:border-l border-[#efe5d9] dark:border-[#2a2a2a] lg:pl-10 pt-4 lg:pt-0">
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-5">
                Your Tutor
              </p>

              {learner?.assignedTutor?._id ? (
                <div>
                  <h2 className="text-2xl font-bold text-[#222] dark:text-white">
                    {learner.assignedTutor.name}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    <span className="font-semibold text-orange-500">
                      Skills:
                    </span>{" "}
                    {learner.assignedTutor.skills?.join(", ")}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-gray-600">
                    <Phone size={18} />

                    <span>{learner.assignedTutor.phone}</span>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-orange-50 dark:bg-[#1a140d]
                    border border-orange-100 dark:border-[#3b2a15]
                    rounded-3xl p-6"
                >
                  <h3 className="font-bold text-lg text-[#222] dark:text-white">
                    Tutor not assigned yet
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    We're matching you with a nearby tutor.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* REQUESTS SECTION */}
        <div className="mt-10 bg-[#fcfaf7] dark:bg-[#181818] rounded-[32px] border border-[#efe5d9] dark:border-[#2a2a2a] p-8">
          <h2 className="text-3xl font-bold text-[#222] dark:text-white mb-8 mt-5">
            Your Requests
          </h2>

          {requests.length === 0 ? (
            <div className="text-center py-14">
              <h3 className="text-2xl font-bold text-[#222] dark:text-white">
                No request created yet
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Create your first learning request
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="bg-white dark:bg-[#121212] border border-[#efe5d9] dark:border-[#2a2a2a] rounded-[28px] p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold text-[#222] dark:text-white">
                        {request.learningTopics?.join(", ")}
                      </h3>

                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Preferred Time:{" "}
                        <span className="font-medium text-[#222] dark:text-white capitalize">
                          {request.preferredTime}
                        </span>
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Requested For:{" "}
                        <span className="font-medium text-[#222] dark:text-white">
                          {request.name}
                        </span>
                      </p>

                      {!request.isSelfLearner && request.requestedBy?.name && (
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                          Requested By:{" "}
                          <span className="font-medium text-[#222] dark:text-white">
                            {request.requestedBy.name}
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                          request.status,
                        )}`}
                      >
                        {request.status}
                      </span>
{request.assignedTutor && (
  <div
    className="
    bg-orange-50
    dark:bg-[#1a140d]
    border
    border-orange-100
    dark:border-[#3b2a15]
    rounded-2xl
    px-4
    py-3
    text-sm
  "
  >
    <p className="font-semibold text-[#222] dark:text-white">
      Tutor Assigned
    </p>

    <p className="text-gray-600 dark:text-gray-300 mt-1">
      Name:{" "}
      <span className="font-medium">
        {
          request
            .assignedTutor
            ?.name
        }
      </span>
    </p>

    <p className="text-gray-600 dark:text-gray-300 mt-1">
      Phone:{" "}
      <span className="font-medium">
        {
          request
            .assignedTutor
            ?.phone
        }
      </span>
    </p>
  </div>
)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SESSION SECTION */}
        <div className="mt-10 bg-[#fcfaf7] dark:bg-[#181818] rounded-[32px] border border-[#efe5d9] dark:border-[#2a2a2a] p-8">
          <h2 className="text-3xl font-bold text-[#222] dark:text-white mb-8">
            Your Sessions
          </h2>

          {sessions.length === 0 ? (
            <div className="border-2 border-dashed border-[#eadbc9] rounded-[32px] p-14 text-center bg-[#fffdf9] dark:bg-[#121212] dark:border-[#2a2a2a]">
              <img
                src="/empty-box.webp"
                alt="No sessions"
                loading="lazy"
                className="size-30 mx-auto"
              />

              <h3 className="text-3xl font-bold text-[#222] dark:text-white mt-5">
                No learning sessions yet
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
                Your request is currently{" "}
                <span className="font-semibold text-orange-500">
                  {learner?.status}
                </span>
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {sessions.map((session) => (
                <div
                  key={session._id}
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
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    {/* LEFT */}
                    <div className="flex gap-5 items-center">
                      {getSessionIcon(session.mode)}

                      <div>
                        <h3 className="font-bold text-xl text-[#222] dark:text-white">
                          Session
                        </h3>

                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                          <CalendarDays size={16} />

                          <span>
                            {session?.scheduledDate
                              ? new Date(
                                  session.scheduledDate,
                                ).toLocaleDateString()
                              : "Date not scheduled"}
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Time: {session?.scheduledTime || "Not scheduled"}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-start lg:items-end gap-3">
                      <span
                        className={`
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          ${
            session?.status === "COMPLETED"
              ? "bg-green-100 text-green-700"
              : session?.status === "ONGOING"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
          }
        `}
                      >
                        {session.status}
                      </span>

                      {/* SHOW ONLY WHEN SESSION COMPLETED */}
                      {session?.status ===
  "COMPLETED" &&
 !session?.rating && (
                        <div className="flex gap-3 flex-wrap">
                          <button
                            onClick={() => handleFinishLearning(session._id)}
                            className="
              px-4
              py-2
              rounded-2xl
              bg-green-500
              hover:bg-green-600
              text-white
              font-semibold
              text-sm
            "
                          >
                            Finish Learning
                          </button>

                  
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearnerDashboard;
