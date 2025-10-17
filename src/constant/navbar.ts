export interface NavbarItem {
  label: string;
  path?: string;
  children?: {
    label: string;
    path: string;
  }[];
}

export const navbarItems: NavbarItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    children: [
      {
        label: "History of BEC",
        path: "/to-do",
      },
      {
        label: "Message Of President",
        path: "/to-do",
      },
      {
        label: "Message Of General Secretary",
        path: "/to-do",
      },
      {
        label: "Message Of ICT Secretary",
        path: "/to-do",
      },
      {
        label: "BEC Advisor",
        path: "/to-do",
      },
      {
        label: "Constitution",
        path: "/to-do",
      },
      {
        label: "Mission & Vision",
        path: "/to-do",
      },
      {
        label: "Certification",
        path: "/to-do",
      },
    ],
  },
  {
    label: "Membership",
    path: "/membership",
    children: [
      {
        label: "BEC Member",
        path: "/to-do",
      },
      {
        label: "Membership Process",
        path: "/to-do",
      },
      {
        label: "Membership Registration Form",
        path: "/to-do",
      },
      {
        label: "Member Welfare Fund",
        path: "/to-do",
      },
      {
        label: "Become A Member",
        path: "/to-do",
      },
    ],
  },
  {
    label: "News & Events",
    path: "/news-events",
  },
  {
    label: "Gallery",
    path: "/gallery",
    children: [
      {
        label: "Photo Gallery",
        path: "/to-do",
      },
      {
        label: "Video Gallery",
        path: "/to-do",
      },
      {
        label: "Publication",
        path: "/to-do",
      },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];
