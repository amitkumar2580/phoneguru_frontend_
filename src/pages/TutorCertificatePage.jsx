import { Award, ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const TutorCertificatePage = () => {
  const navigate = useNavigate();

  const { dashboardData } = useSelector((state) => state.tutor);

  return (
    <section
      className="
        min-h-screen
        bg-[#f8f4ee]
        dark:bg-[#0f0f0f]
        px-5
        py-10
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* TOP */}
        <button
          onClick={() => navigate(-1)}
          className="
            mb-6
            flex
            items-center
            gap-2
            text-gray-600
            dark:text-gray-300
            font-medium
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* CERTIFICATE */}
        <div
          className="
            bg-[#fcfaf7]
            dark:bg-[#181818]
            border
            border-[#efe5d9]
            dark:border-[#2a2a2a]
            rounded-[40px]
            p-8
            md:p-14
            shadow-sm
            text-center
          "
        >
          <Award
            size={70}
            className="
              mx-auto
              text-orange-500
            "
          />

          <p
            className="
              mt-6
              text-orange-500
              font-semibold
              uppercase
              tracking-[3px]
            "
          >
            Phone Guru
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#222]
              dark:text-white
              mt-5
            "
          >
            Certificate of Internship
          </h1>

          <p
            className="
              text-gray-500
              dark:text-gray-400
              mt-5
              text-lg
            "
          >
            This certificate is proudly presented to
          </p>

         <h2
  className="
  text-3xl
  md:text-4xl
  font-bold
  text-orange-500
  mt-5
"
>
  {dashboardData?.name ||
    "Tutor"}
</h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-gray-600
              dark:text-gray-400
              text-lg
            "
          >
            For successfully helping learners improve digital skills and
            contributing as a tutor at Phone Guru.
          </p>

          {/* FOOTER */}
          <div
            className="
              mt-12
              flex
              justify-between
              items-center
              border-t
              border-[#efe5d9]
              dark:border-[#2a2a2a]
              pt-8
            "
          >
            <div>
              <p className="font-semibold text-[#222] dark:text-white">
                Phone Guru
              </p>

              <p className="text-sm text-gray-500">Internship Program</p>
            </div>

            <div>
              <p className="font-semibold text-[#222] dark:text-white">
                {new Date().getFullYear()}
              </p>

              <p className="text-sm text-gray-500">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorCertificatePage;
