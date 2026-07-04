import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendTutorOtp, verifyTutorOtp } from "../redux/slices/tutorSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const TutorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");

  const [showOtpBox, setShowOtpBox] = useState(false);

  // SEND OTP
  const handleSendOtp = async () => {
    if (!phone.trim()) {
      toast.error("Enter phone number");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    const result = await dispatch(sendTutorOtp(phone));

    if (sendTutorOtp.fulfilled.match(result)) {
      toast.success("Demo OTP: 1234");

      setShowOtpBox(true);
    } else {
      toast.error(result.payload || "Failed to send OTP");
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    const result = await dispatch(
      verifyTutorOtp({
        phone,
        otp,
      }),
    );

    if (verifyTutorOtp.fulfilled.match(result)) {
      toast.success("OTP verified");

      if (result.payload.isProfileComplete) {
        navigate("/tutor/dashboard");
      } else {
        navigate("/tutor/create-profile");
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#f7f2eb] dark:bg-[#0f0f0f] flex items-center justify-center px-4">
      <div
        className="
        w-full
        max-w-md
        bg-white
        dark:bg-[#181818]
        rounded-[32px]
        shadow-xl
        border
        border-orange-100
        dark:border-[#2a2a2a]
        p-8
      "
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222] dark:text-white">
            Become a <span className="text-orange-500">Phone Guru</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Login / Register as Tutor
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
              Phone Number
            </label>

            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="
    w-full
    h-14
    rounded-2xl
    border
    border-gray-300
    dark:border-[#2a2a2a]
    bg-white
    dark:bg-[#121212]
    dark:text-white
    dark:placeholder:text-gray-500
    px-4
    outline-none
    focus:border-orange-500
    transition-all
  "
            />
          </div>

          {!showOtpBox ? (
            <button
              onClick={handleSendOtp}
              className="
                w-full
                h-14
                rounded-2xl
                bg-orange-500
                hover:bg-orange-600
                text-white
                text-lg
                font-semibold
              "
            >
              Send OTP
            </button>
          ) : (
            <>
              {/* OTP */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#222] dark:text-white">
                  OTP
                </label>
                <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4">
                  <p className="text-sm font-semibold text-yellow-500">
                    Demo Mode
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    OTP service is currently disabled. Use OTP:{" "}
                    <span className="font-bold text-white dark:text-white">
                      1234
                    </span>
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-gray-300
                    dark:border-[#2a2a2a]
                    bg-white
                    dark:bg-[#121212]
                    dark:text-white
                    px-4
                    outline-none
                    focus:border-orange-500
                  "
                />
              </div>

              <button
                onClick={handleVerifyOtp}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  text-lg
                  font-semibold
                "
              >
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TutorLogin;
