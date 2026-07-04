import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] =
    useState(false);

 const [darkMode, setDarkMode] =
  useState(() => {
    return (
      localStorage.theme
        ? localStorage.theme ===
          "dark"
        : true
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.theme =
        "dark";
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.theme =
        "light";
    }
  }, [darkMode]);

  const navLinks = [
    {
      name: "Home",
      route: "/",
      icon: <HomeIcon />,
    },

    {
      name:
        "Why This Matters",
      route:
        "/why-this-matters",
      icon: (
        <InfoOutlinedIcon />
      ),
    },

    {
      name:
        "How It Works",
      route:
        "/how-it-works",
      icon: (
        <SettingsSuggestIcon />
      ),
    },

    {
      name: "Team",
      route: "/team",
      icon: (
        <EmojiPeopleIcon />
      ),
    },

    {
      name:
        "Leaderboard",
      route:
        "/tutor/leaderboard",
      icon: (
        <LeaderboardIcon />
      ),
    },
  ];

  const handleNavigate = (
    route
  ) => {
    setIsOpen(false);

    navigate(route);

    window.scrollTo(
      0,
      0
    );
  };

  return (
    <>
      <header
        className="
        sticky
        top-0
        z-50
        bg-white
        dark:bg-[#111111]
        border-b
        border-gray-200
        dark:border-[#222]
      "
      >
        <nav
          className="
          max-w-7xl
          mx-auto
          h-20
          px-5
          flex
          items-center
          justify-between
        "
        >
          {/* LOGO */}
          <div
            onClick={() =>
              handleNavigate("/")
            }
            className="
            flex
            items-center
            gap-2
            cursor-pointer
          "
          >
            <img
              src={
                darkMode
                  ? "/pgLogo_dark.webp"
                  : "/logo1.webp"
              }
              alt="Phone Guru"
              className="
              w-8
              md:w-11
              object-contain
            "
            />

            <h1 className="text-2xl font-bold">
              <span className="text-black dark:text-white">
                Phone
              </span>{" "}
              <span className="text-orange-500">
                Guru
              </span>
            </h1>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(
              (link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    handleNavigate(
                      link.route
                    )
                  }
                  className="
                  text-gray-700
                  dark:text-gray-300
                  hover:text-orange-500
                  font-medium
                  transition
                "
                >
                  {link.name}
                </button>
              )
            )}

            {/* Theme */}
            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="
              w-11
              h-11
              rounded-full
              border
              border-gray-300
              dark:border-[#333]
              flex
              items-center
              justify-center
            "
            >
              {darkMode ? (
                <LightModeIcon className="text-white" />
              ) : (
                <DarkModeIcon className="text-black" />
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Theme */}
            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="
              w-10
              h-10
              rounded-full
              border
              border-gray-300
              dark:border-[#333]
              flex
              items-center
              justify-center
            "
            >
              {darkMode ? (
                <LightModeIcon className="text-white" />
              ) : (
                <DarkModeIcon className="text-black" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() =>
                setIsOpen(
                  !isOpen
                )
              }
              className="
              text-black
              dark:text-white
            "
            >
              {isOpen ? (
                <CloseIcon
                  sx={{
                    fontSize: 34,
                  }}
                />
              ) : (
                <MenuIcon
                  sx={{
                    fontSize: 34,
                  }}
                />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE POPUP MENU */}
      {/* MOBILE POPUP MENU */}
{isOpen && (
  <div
    onClick={() =>
      setIsOpen(false)
    }
    className="
    fixed
    inset-0
    z-[999]
    bg-black/40
    backdrop-blur-sm
    flex
    items-center
    justify-center
    lg:hidden
  "
  >
    <div
      onClick={(e) =>
        e.stopPropagation()
      }
      className="
      w-[50%]
max-w-[320px]
mx-auto
      flex
      flex-col
      gap-4
    "
    >
      {navLinks.map(
        (link) => (
          <button
            key={link.name}
            onClick={() =>
              handleNavigate(
                link.route
              )
            }
            className="
            flex
            items-center
            gap-3
            w-full
            rounded-[10px]
            border-2
            border-orange-500
            px-5
            py-3.5
            text-[14px]
            font-semibold
            shadow-md
            transition-all
            duration-150

            bg-white
            text-black

            dark:bg-[#171717]
            dark:text-white
            dark:border-orange-500
          "
          >
            <span className="text-orange-500">
              {link.icon}
            </span>

            {link.name}
          </button>
        )
      )}
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;