import user1 from "../assets/photos/user1.jpg";
import user2 from "../assets/photos/15d7211204149d93adda6dfafb5d81f2.jpg";
import user3 from "../assets/photos/c3ac7682e52df2e10d0a36ec3f243a44.jpg";
import user4 from "../assets/photos/siddrath.jpg";

import background1 from "../assets/photos/nature.jpg";
import background2 from "../assets/photos/wood.jpg";
import background3 from "../assets/photos/car.jpg";

import recGroup1 from "../assets/photos/recGroup1.jpg";
import recGroup2 from "../assets/photos/recGroup2.jpg";
import recGroup3 from "../assets/photos/recGroup3.jpg";
import recGroup4 from "../assets/photos/recGroup4.jpg";

export const postsData = [
  {
    id: 1,
    image: background1,
    heading: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    user: user1,
    name: "Sarthak Kamra",
    views: "1.4k",
  },
  {
    id: 2,
    image: background2,
    heading: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    user: user2,
    name: "Sarah West",
    views: "1.4k",
  },
  {
    id: 3,
    image: background3,
    heading: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    link: { background: "#E56135", text: "Visit WebSite", to: "#" },
    user: user3,
    name: "Ronal Jones",
    views: "1.4k",
  },
  {
    id: 4,
    heading: "💼️ Job",
    title: "Software Developer",
    company: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    link: { background: "#02B875", text: "Apply on Timejobs", to: "#" },
    user: user4,
    name: "Joseph Gray",
    views: "1.4k",
  },
];

export const groupData = [
  { id: 1, img: recGroup1, name: "Leisure" },
  { id: 2, img: recGroup2, name: "Activism" },
  { id: 3, img: recGroup3, name: "MBA" },
  { id: 4, img: recGroup4, name: "Philosophy" },
];
