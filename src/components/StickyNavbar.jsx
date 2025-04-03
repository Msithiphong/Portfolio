import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 font-normal text-[#FAFAFA]" // Updated text color
      >
        <a href="#home" className="flex items-center hover-expand-effect">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 font-normal text-[#FAFAFA]" // Updated text color
      >
        <a href="#projects" className="flex items-center hover-expand-effect">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 font-normal text-[#FAFAFA]" // Updated text color
      >
        <a href="#contact" className="flex items-center hover-expand-effect">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 font-normal text-[#FAFAFA]"
      >
        <a
          href="/links/maxwell_sithiphong_resume.PDF" // Ensure the file exists in public/links
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Improves security
          className="flex items-center hover-expand-effect"
        >
          Resume
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="w-full pt-4"> 
      <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-transparent">
        <div className="relative flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4"> {/* Added container for image and text */}
            <img
              src="/images/headshot.png" // Ensure the file exists in public/images
              alt="Profile"
              className="flex w-20 h-20 rounded-full object-cover hover-expand-effect" // Added zoom effect
            />
            <Typography
              as="a"
              href="#"
              color="blue"
              className="cursor-pointer py-1.5 font-medium text-[#FAFAFA] hover-expand-effect" // Updated text color
            >
              Maxwell Sithiphong
            </Typography>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">{navList}</div> {/* Centered navList */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;