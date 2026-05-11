import type { MouseEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const projectPaths = ["/architecture", "/installations", "/festival-spaces"];

const SiteHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";
  const isProjectsActive = projectPaths.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleGetInTouch = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector("#contact");
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const linkBase =
    "text-sm tracking-wide transition-colors duration-300 hover:text-accent";

  const linkInactive = "text-foreground";
  const linkActive = "text-accent";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-14 md:h-16 flex items-center justify-between">

        <Link
          to="/"
          className={cn(
            "text-sm md:text-base font-light tracking-tight transition-colors duration-300 hover:text-accent",
            scrolled || open || !isHome
              ? "text-foreground"
              : "text-background-secondary"
          )}
        >
          Rahul Gautam
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                linkBase,
                isActive ? linkActive : linkInactive,
                !scrolled &&
                  isHome &&
                  !isActive &&
                  "text-background-secondary"
              )
            }
          >
            About
          </NavLink>

          {/* Projects Dropdown */}
          <div className="relative group">

            <button
              className={cn(
                linkBase,
                isProjectsActive ? linkActive : linkInactive,
                !scrolled &&
                  isHome &&
                  !isProjectsActive &&
                  "text-background-secondary"
              )}
            >
              Projects
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="flex items-center gap-8 whitespace-nowrap">

                <Link
                  to="/architecture"
                  className={cn(
                    "text-[13px] tracking-wide hover:text-accent transition-colors duration-300",
                    scrolled || !isHome
                      ? "text-foreground"
                      : "text-background-secondary"
                  )}
                >
                  Architecture
                </Link>

                <Link
                  to="/installations"
                  className={cn(
                    "text-[13px] tracking-wide hover:text-accent transition-colors duration-300",
                    scrolled || !isHome
                      ? "text-foreground"
                      : "text-background-secondary"
                  )}
                >
                  Installations
                </Link>

                <Link
                  to="/festival-spaces"
                  className={cn(
                    "text-[13px] tracking-wide hover:text-accent transition-colors duration-300",
                    scrolled || !isHome
                      ? "text-foreground"
                      : "text-background-secondary"
                  )}
                >
                  Festival Spaces
                </Link>

              </div>
            </div>
          </div>

          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={handleGetInTouch}
            className={cn(
              linkBase,
              linkInactive,
              !scrolled &&
                isHome &&
                "text-background-secondary"
            )}
          >
            Get in touch
          </a>

        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={cn(
            "md:hidden flex flex-col gap-[5px] p-2 -mr-2 transition-colors",
            scrolled || open || !isHome
              ? "text-foreground"
              : "text-background-secondary"
          )}
        >
          <span
            className={cn(
              "block w-5 h-px bg-current transition-transform duration-300",
              open && "translate-y-[6px] rotate-45"
            )}
          />

          <span
            className={cn(
              "block w-5 h-px bg-current transition-opacity duration-300",
              open && "opacity-0"
            )}
          />

          <span
            className={cn(
              "block w-5 h-px bg-current transition-transform duration-300",
              open && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out border-t border-border/0",
          open ? "max-h-64 border-border/100" : "max-h-0"
        )}
      >
        <nav className="max-w-content mx-auto px-6 py-6 flex flex-col gap-5">

          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-base",
                isActive ? "text-accent" : "text-foreground"
              )
            }
          >
            About
          </NavLink>

          {/* Mobile Projects */}
          <div className="flex flex-col gap-4">

            <p className="text-base text-foreground">
              Projects
            </p>

            <div className="flex flex-col gap-4 pl-5">

              <Link
                to="/architecture"
                className="text-[13px] tracking-wide text-foreground hover:text-accent transition-colors duration-300"
              >
                Architecture
              </Link>

              <Link
                to="/installations"
                className="text-[13px] tracking-wide text-foreground hover:text-accent transition-colors duration-300"
              >
                Installations
              </Link>

              <Link
                to="/festival-spaces"
                className="text-[13px] tracking-wide text-foreground hover:text-accent transition-colors duration-300"
              >
                Festival Spaces
              </Link>

            </div>
          </div>

          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={handleGetInTouch}
            className="text-base text-foreground"
          >
            Get in touch
          </a>

        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;