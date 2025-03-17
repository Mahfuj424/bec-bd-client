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
        path: "/about/history-of-bec",
      },
      {
        label: "Message Of President",
        path: "/about/message-of-president",
      },
      {
        label: "Message Of General Secretary",
        path: "/about/message-of-general-secretary",
      },
      {
        label: "Message Of ICT Secretary",
        path: "/about/message-of-ict-secretary",
      },
      {
        label: "BEC Advisor",
        path: "/about/bec-advisor",
      },
      {
        label: "Constitution",
        path: "/about/constitution",
      },
      {
        label: "Mission & Vision",
        path: "/about/mission-vision",
      },
      {
        label: "Certification",
        path: "/about/certification",
      },
    ],
  },
  {
    label: "Membership",
    path: "/membership",
    children: [
      {
        label: "BEC Member",
        path: "/membership/bec-member",
      },
      {
        label: "Membership Process",
        path: "/membership/membership-process",
      },
      {
        label: "Membership Registration Form",
        path: "/membership/membership-registration-form",
      },
      {
        label: "Member Welfare Fund",
        path: "/membership/member-welfare-fund",
      },
      {
        label: "Become A Member",
        path: "/membership/become-a-member",
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
        path: "/gallery/photo-gallery",
      },
      {
        label: "Video Gallery",
        path: "/gallery/video-gallery",
      },
      {
        label: "Publication",
        path: "/gallery/publication",
      },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];
