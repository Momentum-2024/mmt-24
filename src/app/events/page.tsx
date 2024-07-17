'use client'

import EventsSearchBar from "@/components/EventsSearchBar";
import Image from "next/image";
// import { getEvents } from "lib/eventList";
// import EventCard from "@/components/newUI/eventCard";
// import PageWrapper from "@/components/PageWrapper";
import { useRef, useState } from "react";

export default function Events({ }) {
  const [eventFilter, setEventFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Music",
    "Dance",
    "Entertainment",
    "Quizzing",
    "Fun Activities",
    "Fashion",
    "Culinary",
    "Sports",
    "Esports",
    "Technical",
    "Non Technical",
    "Creative",
    "Comic",
    "Finance",
    "Literary",
  ];
  return (
    <div className="h-full min-h-screen bg-[#030919] text-white px-10 ">
      <EventsSearchBar/>
      <div className="h-full mt-5 overflow-y-scroll grid grid-flow-col justify-around">  
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
        <Image src="/event-poster.png" height={200} width={200} alt='p1'/>
      </div>
    </div>
  );
}