import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getNearbyRequests } from "../../redux/slices/tutorSlice";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Users,
  BookOpen,
} from "lucide-react";

import TutorHero from "../../components/TutorDashboard/TutorHero";
import TutorStatsCard from "../../components/TutorDashboard/TutorStatsCard";
import DashboardSection from "../../components/TutorDashboard/DashboardSection";
import SessionCard from "../../components/TutorDashboard/SessionCard";
import EmptyState from "../../components/TutorDashboard/EmptyState";
import NearbyRequestCard from "../../components/TutorDashboard/NearbyRequestCard";

import { getTutorDashboard, logoutTutor } from "../../redux/slices/tutorSlice";

import {
  getTodaySessions,
  getUpcomingSessions,
  getSessionHistory,
} from "../../redux/slices/sessionSlice";

const TutorDashboard = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { dashboardData, nearbyRequests, loading } = useSelector(
    (state) => state.tutor,
  );
console.log(
  "Nearby Requests:",
  nearbyRequests
);
  const { todaySessions, upcomingSessions, historySessions } = useSelector(
    (state) => state.session,
  );

useEffect(() => {
  dispatch(
    getTutorDashboard()
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

  // First try saved coords
  const savedLat =
    localStorage.getItem(
      "tutorLat"
    );

  const savedLng =
    localStorage.getItem(
      "tutorLng"
    );

  if (
    savedLat &&
    savedLng
  ) {
    dispatch(
      getNearbyRequests(
        {
          lat:
            savedLat,

          lng:
            savedLng,
        }
      )
    );
  }

  // Fresh location fetch
  navigator.geolocation.getCurrentPosition(
    (
      position
    ) => {
      const lat =
        position
          .coords
          .latitude;

      const lng =
        position
          .coords
          .longitude;

      console.log(
        "Tutor Coords:",
        lat,
        lng
      );

      // Save for refresh
      localStorage.setItem(
        "tutorLat",
        lat
      );

      localStorage.setItem(
        "tutorLng",
        lng
      );

      dispatch(
        getNearbyRequests(
          {
            lat,
            lng,
          }
        )
      );
    },

    (
      error
    ) => {
      console.log(
        "Location error",
        error
      );
    }
  );
}, [dispatch]);
useEffect(() => {
  console.log(
    "Nearby Requests:",
    nearbyRequests
  );
}, [nearbyRequests]);


  const handleLogout = async () => {
    const result = await dispatch(logoutTutor());

    if (logoutTutor.fulfilled.match(result)) {
      toast.success("Logged out successfully");

      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f4ee] dark:bg-[#0f0f0f] flex items-center justify-center text-2xl font-semibold text-[#222] dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f4ee] dark:bg-[#0f0f0f] px-5 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HERO */}
        <TutorHero dashboardData={dashboardData} handleLogout={handleLogout} />
 

        {/* STATS */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-5
        "
        >
          <TutorStatsCard
            title="Total Sessions"
            count={dashboardData?.totalSessions}
            icon={<BookOpen size={22} />}
          />

          <TutorStatsCard
            title="Completed"
            count={dashboardData?.completedSessions}
            icon={<CheckCircle2 size={22} />}
          />

          <TutorStatsCard
            title="Upcoming"
            count={dashboardData?.upcomingSessions}
            icon={<Clock3 size={22} />}
          />

          <TutorStatsCard
            title="Today's Sessions"
            count={dashboardData?.todaySessions}
            icon={<CalendarDays size={22} />}
          />

          <TutorStatsCard
            title="Pending Learners"
            count={dashboardData?.pendingLearners}
            icon={<Users size={22} />}
          />
        </div>
        
{/* NEARBY REQUESTS */}
<DashboardSection title="Nearby Learner Requests">
  {nearbyRequests?.length ===
  0 ? (
    <EmptyState
      title="No nearby requests"
      subtitle="Nearby learner requests will appear here"
    />
  ) : (
    <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-5
    "
    >
      {nearbyRequests
        ?.slice(0, 6)
        .map((request) => (
          <NearbyRequestCard
            key={
              request._id
            }
            request={
              request
            }
          />
        ))}
    </div>
  )}
</DashboardSection>

        {/* TODAY + UPCOMING */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
        >
          {/* TODAY */}
          <DashboardSection title="Today's Sessions">
            {todaySessions?.length === 0 ? (
              <EmptyState
                title="No sessions today"
                subtitle="Today's scheduled sessions will appear here"
              />
            ) : (
              todaySessions.map((session) => (
                <SessionCard key={session._id} session={session} />
              ))
            )}
          </DashboardSection>

          {/* UPCOMING */}
          <DashboardSection title="Upcoming Sessions">
            {upcomingSessions?.length === 0 ? (
              <EmptyState
                title="No upcoming sessions"
                subtitle="Future sessions will appear here"
              />
            ) : (
              upcomingSessions.map((session) => (
                <SessionCard key={session._id} session={session} />
              ))
            )}
          </DashboardSection>
        </div>

        {/* HISTORY */}
        <DashboardSection title="Session History">
          {historySessions?.length === 0 ? (
            <EmptyState
              title="No session history"
              subtitle="Completed sessions will appear here"
            />
          ) : (
            historySessions.map((session) => (
              <SessionCard key={session._id} session={session} />
            ))
          )}
        </DashboardSection>
      </div>
    </section>
  );
};

export default TutorDashboard;
