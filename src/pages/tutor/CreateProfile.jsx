import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createTutorProfile } from "../../redux/slices/tutorSlice";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      skills: [],
      languages: [],
    },
  });

  const selectedSkills = watch("skills") || [];

  const selectedLanguages = watch("languages") || [];

  const skills = [
    {
      title: "WhatsApp",
      icon: "/social/whatsapp.webp",
    },
    {
      title: "UPI Payments",
      icon: "/social/upi.webp",
    },
    {
      title: "Video Calling",
      icon: "/social/video-call.webp",
    },
    {
      title: "Online Forms",
      icon: "/social/forms.webp",
    },
    {
      title: "Government Apps",
      icon: "/social/government.webp",
    },
    {
      title: "YouTube",
      icon: "/social/youtube.webp",
    },
    {
      title: "Facebook",
      icon: "/social/facebook.webp",
    },
    {
      title: "Phone Settings",
      icon: "/social/settings.webp",
    },
    {
      title: "Other",
      icon: "/social/other.webp",
    },
  ];

  const languages = ["Hindi", "English"];

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;

        const longitude = position.coords.longitude;

        setValue("location.coordinates", [longitude, latitude]);

        toast.success("Location fetched");
      },

      () => {
        toast.error("Unable to fetch location");
      },
    );
  };

  const onSubmit = async (data) => {
    const payload = {
      ...data,

      location: {
        type: "Point",

        coordinates: data.location?.coordinates || [0, 0],

        city: data.location?.city,

        area: data.location?.area,
      },
    };

    const result = await dispatch(createTutorProfile(payload));

    if (createTutorProfile.fulfilled.match(result)) {
      toast.success("Profile created");

      navigate("/tutor/dashboard");
    } else {
      toast.error(result.payload || "Failed to create profile");
    }
  };

  return (
    <section
      className="
    relative
    min-h-screen
    bg-white
    dark:bg-[#111111]
    lg:bg-transparent
    overflow-hidden
  "
    >
      {/* Background */}
   <div className="absolute inset-0 hidden lg:block overflow-hidden">
  {/* Orange smoky glow */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF9100]/20 blur-[140px] rounded-full z-0" />

  {/* Optional second soft glow */}
  <div className="absolute left-[10%] bottom-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full z-0" />

  {/* Tutor Image */}
  <img
    src="/tutorBg.webp"
    alt="Tutor Background"
    loading="lazy"
    className="absolute inset-0 w-full h-full object-contain z-10"
  />
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center lg:justify-end px-0 lg:px-8 py-0">
        <div className="w-full max-w-[1600px] mx-auto flex justify-center lg:justify-end">
          {/* Form Card */}
          <div
            className="

w-full
lg:w-[720px]
max-w-[720px]
rounded-none
lg:rounded-[34px]
px-5
sm:px-6
lg:px-8
py-6
mr-0
lg:mr-1
min-h-screen
lg:min-h-0
bg-[#121212]/78
backdrop-blur-2xl
border
border-white/10
shadow-[0_0_40px_rgba(0,0,0,0.45)]
max-h-[96vh]
overflow-y-auto
scrollbar-thin
scrollbar-thumb-orange-500/50
scrollbar-track-transparent
"
          >
            {/* Heading */}

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 lg:-mt-2"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  {...register("name", {
                    required: true,
                  })}
                  className="
                    w-full
                    h-[48px]
                    rounded-xl
                    border
                    border-[#e8ddd1]
                    dark:border-[#2a2a2a]
                    dark:bg-[#181818]
                    dark:text-white
                    px-4
                    outline-none
                    focus:border-orange-500
                  "
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  {...register("phone", {
                    required: "Phone number required",
                  })}
                  className="
      w-full
      h-[48px]
      rounded-xl
      border
      border-[#e8ddd1]
      dark:border-[#2a2a2a]
      dark:bg-[#181818]
      dark:text-white
      px-4
      outline-none
      focus:border-orange-500
    "
                />
              </div>
              {/* Skills */}
              <div>
                <h2 className="text-orange-500 text-lg font-bold mb-3">
                  Skills You Can Teach
                </h2>

                <div className="grid grid-cols-3 gap-3">
                  {skills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill.title);

                    return (
                      <label
                        key={skill.title}
                        className={`
h-[68px]
rounded-[14px]
border
px-3
flex
items-center
justify-center
gap-3
cursor-pointer
transition-all
duration-300
bg-[#171717]/80
backdrop-blur-md
shadow-[0_0_15px_rgba(0,0,0,0.15)]
${
  isSelected
    ? "border-orange-500 bg-orange-500/10 ring-1 ring-orange-400"
    : "border-white/10 hover:border-orange-400 hover:bg-[#1d1d1d]"
}
`}
                      >
                        <input
                          type="checkbox"
                          value={skill.title}
                          {...register("skills")}
                          className="hidden"
                        />

                        <img
                          src={skill.icon}
                          alt={skill.title}
                          loading="lazy"
                          className="w-5 h-5 object-contain shrink-0"
                        />

                        <span className="text-[13px] font-medium text-white leading-tight">
                          {skill.title}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Languages */}
              <div>
  <div className="flex items-center gap-4 justify-between mb-3">
    <h2 className="text-orange-500 text-lg font-bold shrink-0">
      Languages
    </h2>

    <div className="flex gap-4 flex-wrap">
      {languages.map((language) => {
        const isSelected =
          selectedLanguages.includes(language);

        return (
          <label
            key={language}
            className={`
              h-11
              px-5
              rounded-xl
              border
              flex
              items-center
              justify-center
              font-medium
              cursor-pointer
              transition-all
              ${
                isSelected
                  ? "border-orange-500 bg-orange-50 ring-2 ring-orange-200 text-orange-500"
                  : "border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white"
              }
            `}
          >
            <input
              type="checkbox"
              value={language}
              {...register("languages")}
              className="hidden"
            />

            {language}
          </label>
        );
      })}
    </div>
  </div>
</div>

              {/* Location */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-orange-500 text-lg font-bold">
                    Location
                  </h2>

                  <button
                    type="button"
                    onClick={handleGetLocation}
                    className="
      h-10
      px-4
      rounded-xl
      bg-orange-500
      hover:bg-orange-600
      text-white
      text-sm
      font-semibold
      transition
      shrink-0
    "
                  >
                    Use Location
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <input
                    type="text"
                    placeholder="City"
                    {...register("location.city")}
                    className="
                      h-[48px]
                      rounded-xl
                      border
                      border-[#e8ddd1]
                      dark:border-[#2a2a2a]
                      dark:bg-[#181818]
                      dark:text-white
                      px-4
                    "
                  />

                  <input
                    type="text"
                    placeholder="Area"
                    {...register("location.area")}
                    className="
                      h-[48px]
                      rounded-xl
                      border
                      border-[#e8ddd1]
                      dark:border-[#2a2a2a]
                      dark:bg-[#181818]
                      dark:text-white
                      px-4
                    "
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  h-[48px]
                  rounded-xl
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  text-lg
                  font-semibold
                  transition-all
                  mt-2
                "
              >
                Create Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;
