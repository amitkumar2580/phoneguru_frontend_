import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ScheduleSessionModal = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  if (!isOpen)
    return null;

  const handleSave =
    () => {
      if (
        !date.trim() ||
        !time.trim()
      ) {
        toast.error(
          "Select date and time"
        );

        return;
      }

      onSave({
        scheduledDate:
          date,

        scheduledTime:
          time,
      });

      // reset fields
      setDate("");
      setTime("");

      onClose();
    };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/50
      backdrop-blur-sm
      flex
      items-center
      justify-center
      px-4
    "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-[32px]
        bg-[#fcfaf7]
        dark:bg-[#181818]
        border
        border-[#efe5d9]
        dark:border-[#2a2a2a]
        p-6
        shadow-xl
      "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="
              text-2xl
              font-bold
              text-[#222]
              dark:text-white
            "
            >
              Schedule Session
            </h2>

            <p
              className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
            >
              Add date and time
              for this session
            </p>
          </div>

          <button
            onClick={
              onClose
            }
            className="
            size-10
            rounded-full
            hover:bg-gray-100
            dark:hover:bg-[#232323]
            flex
            items-center
            justify-center
            transition
          "
          >
            <X
              className="
              text-gray-500
              dark:text-gray-300
            "
            />
          </button>
        </div>

        {/* DATE */}
        <div className="mt-7">
          <label
            className="
            text-sm
            font-medium
            text-[#444]
            dark:text-gray-300
            block
            mb-2
          "
          >
            Date
          </label>

          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
            className="
            w-full
            h-12
            rounded-2xl
            border
            border-[#e7d9c8]
            dark:border-[#2d2d2d]
            bg-white
            dark:bg-[#111]
            text-[#222]
            dark:text-white
            px-4
            outline-none
            focus:ring-2
            focus:ring-orange-400
          "
          />
        </div>

        {/* TIME */}
        <div className="mt-5">
          <label
            className="
            text-sm
            font-medium
            text-[#444]
            dark:text-gray-300
            block
            mb-2
          "
          >
            Time
          </label>

          <input
            type="text"
            placeholder="14:30"
            value={time}
            onChange={(e) =>
              setTime(
                e.target.value
              )
            }
            className="
            w-full
            h-12
            rounded-2xl
            border
            border-[#e7d9c8]
            dark:border-[#2d2d2d]
            bg-white
            dark:bg-[#111]
            text-[#222]
            dark:text-white
            px-4
            outline-none
            focus:ring-2
            focus:ring-orange-400
          "
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={
              onClose
            }
            className="
            flex-1
            h-12
            rounded-2xl
            border
            border-[#e5d8c9]
            dark:border-[#2a2a2a]
            text-[#444]
            dark:text-gray-300
            font-semibold
          "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={
              handleSave
            }
            className="
            flex-1
            h-12
            rounded-2xl
            bg-orange-500
            hover:bg-orange-600
            text-white
            font-semibold
            transition-all
          "
          >
            Save Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default
  ScheduleSessionModal;