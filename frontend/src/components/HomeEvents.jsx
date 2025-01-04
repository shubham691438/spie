import { HoverEffect } from "./ui/card-hover-effect";

export function HomeEvents() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Chain-Zenith",
    description:
      "This event is designed as an immersive supply-chain case study competition tailored for students interested in pursuing careers in logistics, supply chain, operations, and consultancy sectors",
    link: "",
  },
  {
    title: "Metal Masterpiece",
    description:
      "It is an exciting competition that brings together students with a passion for machining, design and precision craftsmanship.",
    link: "",
  },
  {
    title: "Pratyush",
    description:
      "This event provides an opportunity for the designers to showcase the optimal design solutions for the industrial parts in question using CATIA V5 software only.",
    link: "",
  },
  {
    title: "Machina Mystique",
    description:
      "Machina Mystique is to assess participants’ mechanical reasoning skills through a series of quiz questions",
    link: "",
  },
  {
    title: "Mini Shark Tank",
    description:
      "This event is designed to provide a platform for students to showcase their entrepreneurial skills and innovative ideas.",
    link: "",
  },
  {
    title: "DataHackon",
    description:
      "This event is dedicated to build the basics of data analytics and data science, which is a growing field in the industry.",
    link: "",
  },
];
