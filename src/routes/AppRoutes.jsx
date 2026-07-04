import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import RoleSelect from "../pages/RoleSelect";

import TutorLogin from "../pages/TutorLogin";
import LearnerLogin from "../pages/LearnerLogin";

import LearnerDashboard from "../pages/learner/LearnerDashboard";
import CreateRequest from "../pages/learner/CreateRequest";

import TutorDashboard from "../pages/tutor/TutorDashboard";
import LeaderBoard from "../pages/tutor/LeaderBoard";
import CreateProfile from "../pages/tutor/CreateProfile";

import HowItWorksPage from "../pages/HowItWorksPage";
import TutorCertificatePage from "../pages/TutorCertificatePage";
import TeamPage from "../pages/TeamPage";
import WhyThisMattersPage from "../pages/WhyThisMattersPage";

import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          {/* Public */}
          <Route path="/" element={<Home />} />

          <Route path="/select-role" element={<RoleSelect />} />

          {/* Learner Auth */}
          <Route path="/learner/login" element={<LearnerLogin />} />

          {/* Learner */}
          <Route path="/learner/dashboard" element={<LearnerDashboard />} />

          <Route path="/learner/create-request" element={<CreateRequest />} />

          {/* Tutor */}
          <Route path="/tutor/login" element={<TutorLogin />} />

          <Route path="/tutor/create-profile" element={<CreateProfile />} />

          <Route path="/tutor/dashboard" element={<TutorDashboard />} />

          <Route path="/tutor/leaderboard" element={<LeaderBoard />} />

          <Route path="/tutor/certificate" element={<TutorCertificatePage />} />

          {/* Extra Pages */}
          <Route path="/why-this-matters" element={<WhyThisMattersPage />} />

          <Route path="/how-it-works" element={<HowItWorksPage />} />

          <Route path="/team" element={<TeamPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
