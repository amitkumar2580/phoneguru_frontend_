import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createLearnerRequest } from "../../redux/slices/learnerSlice";

const CreateRequest = () => {
  const {
    register,
    handleSubmit,
    watch,

    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isSelfLearner: "true",
      learningTopics: [],
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSelfLearner = watch("isSelfLearner") === "true";

  const selectedTopics = watch("learningTopics") || [];

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      otpVerified: true,
      isSelfLearner: data.isSelfLearner === "true",
    };

    // SELF LEARNER
    if (payload.isSelfLearner) {
      payload.location = {
        type: "Point",
        coordinates: data.location?.coordinates || [0, 0],
      };

      // self learner me
      // phone backend se aayega
      delete payload.phone;
    }

    // SOMEONE ELSE
    else {
      payload.location = {
        type: "Point",
        coordinates: [0, 0],

        city: data.location?.city,

        area: data.location?.area,

        pincode: data.location?.pincode,
      };
    }

    console.log(payload);

    const result = await dispatch(createLearnerRequest(payload));

    if (createLearnerRequest.fulfilled.match(result)) {
      toast.success("Request created successfully");

      navigate("/learner/dashboard");
    } else {
      toast.error(result.payload || "Failed to create request");
    }
  };

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;

        const longitude = position.coords.longitude;

        setValue("location", {
          type: "Point",
          coordinates: [longitude, latitude],
        });

        toast.success("Location fetched");
      },

      (error) => {
        console.log(error);

        alert("Unable to get location. Please allow location permission.");
      },
    );
  };

  const topics = [
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

  return (
    <section className="relative min-h-screen bg-[#f7f2eb] dark:bg-[#0f0f0f]">
      {/* Desktop Background */}
      <img
        src="/learnerLoginBg.webp"
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-end px-0 lg:px-8 py-[88px] lg:py-4">
        <div className="w-full max-w-[1600px] mx-auto flex justify-end ">
          {/* Form Card */}
          <div
            className="
w-full
lg:w-[700px]
bg-white dark:bg-[#121212]/95
backdrop-blur-md
border border-[#e8ddd1] dark:border-[#2a2a2a]
shadow-xl
lg:rounded-[32px]
px-5 sm:px-7
py-6
min-h-screen
lg:min-h-0
lg:max-h-[92vh]
lg:overflow-y-auto
"
          >
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-[32px] sm:text-[40px] font-bold text-[#222] dark:text-white leading-tight">
                Request Digital <span className="text-orange-500">Help</span>
              </h1>

              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                Fill basic details and we'll connect you with a nearby helper.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5">
              {/* Personal Details */}
              <div>
                <h2 className="text-orange-500 text-xl font-bold mb-4">
                  Personal Details
                </h2>

                <div className="space-y-4">
                  {/* Who is learning */}
                  <div>
                    <label className="text-sm font-semibold text-[#222] dark:text-white">
                      Who is learning?
                    </label>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          value="true"
                          {...register("isSelfLearner")}
                          className="hidden"
                        />

                        <div
                          className={`h-14 rounded-xl border flex items-center justify-center font-semibold transition-all ${
                            isSelfLearner
                              ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-500 ring-2 ring-orange-200"
                              : "border-gray-300 dark:border-[#2a2a2a] bg-white dark:bg-[#181818] dark:text-white"
                          }`}
                        >
                          Self Learner
                        </div>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          value="false"
                          {...register("isSelfLearner")}
                          className="hidden"
                        />

                        <div
                          className={`h-14 rounded-xl border flex items-center justify-center font-semibold transition-all ${
                            !isSelfLearner
                              ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-500 ring-2 ring-orange-200"
                              : "border-gray-300 dark:border-[#2a2a2a] bg-white dark:bg-[#181818] dark:text-white"
                          }`}
                        >
                          Someone Else
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
                      {isSelfLearner ? "Full Name" : "Learner Name"}
                    </label>

                    <input
                      type="text"
                      placeholder={
                        isSelfLearner ? "Enter full name" : "Enter learner name"
                      }
                      {...register("name", {
                        required: "Name required",
                      })}
                      className="w-full h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4 outline-none focus:border-orange-500"
                    />
                   

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  {!isSelfLearner && (
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
                        Learner Phone
                      </label>

                      <input
                        type="text"
                        placeholder="Enter learner phone"
                        {...register("phone")}
                        className="w-full h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4 outline-none focus:border-orange-500"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Topics */}
              <div>
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  What do you need help with?
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-2.5">
                  {topics.map((topic) => {
                    const isSelected = selectedTopics.includes(topic.title);

                    return (
                      <label
                        key={topic.title}
                        className={`h-[62px] lg:h-[56px] rounded-xl border px-3 flex flex-col sm:flex-row items-center justify-center gap-2 cursor-pointer transition-all ${
                          isSelected
                            ? "border-orange-500 ring-2 ring-orange-300 bg-orange-50 dark:bg-orange-500/10"
                            : "border-[#e8ddd1] bg-white dark:bg-[#181818] dark:border-[#2a2a2a] dark:text-white hover:border-orange-400"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={topic.title}
                          {...register("learningTopics")}
                          className="hidden"
                        />

                        <img
                          src={topic.icon}
                          alt={topic.title}
                          loading="lazy"
                          className="w-6 h-6 lg:w-5 lg:h-5 object-contain shrink-0"
                        />

                        <span className="text-[11px] lg:text-xs font-medium text-center leading-tight">
                          {topic.title}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
                  Preferred Time
                </label>

                <select
                  {...register("preferredTime")}
                  className="w-full h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4 outline-none focus:border-orange-500"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning</option>
                  <option value="noon">Noon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  Location
                </h3>

                {isSelfLearner ? (
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    className="w-full h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
                  >
                    Use My Current Location
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Enter city"
                      {...register("location.city")}
                      className="h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4"
                    />

                    <input
                      type="text"
                      placeholder="Enter area"
                      {...register("location.area")}
                      className="h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4"
                    />

                    <input
                      type="text"
                      placeholder="Enter pincode"
                      {...register("location.pincode")}
                      className="col-span-2 h-14 rounded-xl border border-[#e8ddd1] dark:border-[#2a2a2a] dark:bg-[#181818] dark:text-white px-4"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold transition"
              >
                Create Learning Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateRequest;
