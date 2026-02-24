// export interface GalleryImage {
//   id: number;
//   src: string;
//   title: string;
//   category: "events" | "sports" | "celebrations" | "science" | "arts";
// }

// const placeholder = (seed: string) =>
//   `https://picsum.photos/seed/${seed}/800/600`;

// export const galleryImages: GalleryImage[] = [
//   {
//     id: 1,
//     src: placeholder("sports1"),
//     title: "School Sports Day",
//     category: "sports",
//   },
//   {
//     id: 2,
//     src: placeholder("graduation"),
//     title: "Graduation Ceremony 2024",
//     category: "celebrations",
//   },
//   {
//     id: 3,
//     src: placeholder("science1"),
//     title: "Science Fair Exhibition",
//     category: "science",
//   },
//   {
//     id: 4,
//     src: placeholder("culture1"),
//     title: "Cultural Performance",
//     category: "events",
//   },
//   {
//     id: 5,
//     src: placeholder("art1"),
//     title: "Student Art Exhibition",
//     category: "arts",
//   },
//   {
//     id: 6,
//     src: placeholder("library1"),
//     title: "Library Reading Day",
//     category: "events",
//   },
//   {
//     id: 7,
//     src: placeholder("football"),
//     title: "Football Championship",
//     category: "sports",
//   },
//   {
//     id: 8,
//     src: placeholder("award"),
//     title: "Award Ceremony",
//     category: "celebrations",
//   },
//   {
//     id: 9,
//     src: placeholder("robotics"),
//     title: "Robotics Workshop",
//     category: "science",
//   },
//   {
//     id: 10,
//     src: placeholder("national"),
//     title: "National Holiday Celebration",
//     category: "events",
//   },
//   {
//     id: 11,
//     src: placeholder("painting"),
//     title: "Painting Competition",
//     category: "arts",
//   },
//   {
//     id: 12,
//     src: placeholder("math"),
//     title: "Math Olympiad",
//     category: "science",
//   },
// ];
// Image imports
import maktab1 from "../assets/maktab1.jpg";
import maktab2 from "../assets/maktab2.jpg";
import maktab3 from "../assets/maktab3.jpg";
import maktab4 from "../assets/maktab4.jpg";
import maktab5 from "../assets/maktab5.jpg";
import maktab6 from "../assets/maktab6.jpg";
import maktab7 from "../assets/maktab7.jpg";
import maktab8 from "../assets/maktab8.jpg";
import maktab9 from "../assets/maktab9.jpg";
import maktab10 from "../assets/maktab10.jpg";
import maktab11 from "../assets/maktab11.jpg";

// Type
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "events" | "sports" | "celebrations" | "science" | "arts";
}

// Data
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: maktab8,
    title: "School Sports Day",
    category: "sports",
  },
  {
    id: 2,
    src: maktab2,
    title: "Graduation Ceremony 2024",
    category: "celebrations",
  },
  {
    id: 3,
    src: maktab3,
    title: "Science Fair Exhibition",
    category: "science",
  },
  {
    id: 4,
    src: maktab4,
    title: "Cultural Performance",
    category: "events",
  },
  {
    id: 5,
    src: maktab5,
    title: "Student Art Exhibition",
    category: "arts",
  },
  {
    id: 6,
    src: maktab6,
    title: "Library Reading Day",
    category: "events",
  },
  {
    id: 7,
    src: maktab7,
    title: "Football Championship",
    category: "sports",
  },
  {
    id: 8,
    src: maktab1,
    title: "Award Ceremony",
    category: "celebrations",
  },
  {
    id: 9,
    src: maktab9,
    title: "Robotics Workshop",
    category: "science",
  },
  {
    id: 10,
    src: maktab10,
    title: "National Holiday Celebration",
    category: "events",
  },
  {
    id: 11,
    src: maktab11,
    title: "Painting Competition",
    category: "arts",
  },
];
