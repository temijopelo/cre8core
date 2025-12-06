"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";
import { CiCalendar, CiFilter, CiGlobe } from "react-icons/ci";
import { ImTrophy } from "react-icons/im";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiMagnifyingGlassLight } from "react-icons/pi";

interface iEventProps {
  type?: string;
  title?: string;
  text?: string;
  globe?: string;
  date?: string;
  reward?: string;
  user?: string;
  id?: number;
}

const data = [
  {
    id: 1,
    type: "Hackathon",
    title: "Base Builder Hackathon",
    text: "Build the next generation of DeFi applications on Base. 72 hours of intensive development with mentorship from industry experts and access to cutting-edge tools.",
    globe: "July 15 - July 18, 2024",
    date: "Online",
    reward: "$50,000 in total prizes, mentorship opportunities, and more",
    user: "User1",
  },
  {
    id: 2,
    type: "Summit",
    title: "Base Summit 2024",
    text: "Join us for a two-day event featuring keynote speakers, panel discussions, and networking opportunities with leading figures in the Web3 space.",
    globe: "August 10 - August 11, 2024",
    date: "San Francisco, CA",
    reward: "Access to exclusive content, swag bags, and networking events",
    user: "User2",
  },
  {
    id: 3,
    type: "Workshop",
    title: "Smart Contract Development Workshop",
    text: "Learn the fundamentals of smart contract development on Base with hands-on coding sessions and real-world examples.",
    globe: "September 5, 2024",
    date: "New York, NY",
    reward:
      "Certificate of completion, coding resources, and mentorship opportunities",
    user: "User3",
  },
  {
    id: 4,
    type: "Hackathon",
    title: "Base NFT Hackathon",
    text: "Create innovative NFT projects on Base with support from industry experts and access to exclusive tools and resources.",
    globe: "October 12 - October 15, 2024",
    date: "Online",
    reward: "$30,000 in total prizes, mentorship opportunities, and more",
    user: "User4",
  },
];

const EventPage = () => {
  const router = useRouter();

  const EventCard = ({
    type,
    title,
    text,
    globe,
    date,
    reward,
    user,
    id,
  }: iEventProps) => {
    return (
      <div className=" flex flex-col justify-around min-h-[400px] rounded-2xl bg-white p-6 shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-full flex justify-between gap-2 mb-3 text-sm  font-montserrat">
          <span className="bg-[#E4B95C66] px-4 py-2 rounded-full">{type}</span>
          <span className="bg-[#3E800729] rounded-full px-4 py-2">
            Registration Openx
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm font-montserrat text-gray-600 mb-4">{text}</p>
        </div>
        <ul className="flex flex-col gap-2 mb-3">
          <li className="text-sm text-gray-500  flex gap-2 font-montserrat">
            <CiGlobe /> Date: {globe}
          </li>
          <li className="text-sm text-gray-500  flex gap-2 font-montserrat">
            <CiCalendar /> Location: {date}
          </li>
          <li className="text-sm text-gray-500 flex gap-2 font-montserrat">
            <ImTrophy /> Prizes:{reward}
          </li>
        </ul>
        <div className="flex justify-between items-center  text-sm text-gray-500 font-montserrat">
          <Button
            onClick={() => router.push(`/events/${id}`)}
            className="bg-[#E4B95C] hover:bg-[#d1b16a] text-white px-6 py-2 rounded-full font-montserrat "
          >
            Register
          </Button>
          <Button className="bg-[#EFEFEF] hover:bg-[#d1b16a] text-black px-6 py-2 rounded-full font-montserrat ">
            Learn More
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-[80%] mx-auto mt-10">
      <div className="mb-5 flex items-center gap-3 text-[#666666]">
        <IoIosArrowRoundBack size={24} />
        <p>Home</p>
      </div>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-3">All Events</h2>
        <p className="font-montserrat text-sm">
          Discover hackathons, summits, workshops and more in the Web3
          ecosystem. Filter by type, location, and date to find the perfect
          events for your interests and skills.
        </p>
      </div>

      <div className="bg-white mt-10 px-3 py-6 font-montserrat rounded-2xl shadow  border-gray-200">
        <div className="flex gap-2 items-center border rounded-md px-4  ">
          <PiMagnifyingGlassLight />
          <input
            className="p-2 flex-1 focus:outline-none"
            type="search"
            name=""
            id=""
            placeholder="Search events by location, name, or description"
          />
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-3">
            <Button className="bg-[#E4B95C] hover:bg-[#d1b16a] text-white px-8 py-4 rounded-sm font-montserrat ">
              All events
            </Button>
            <Button className="bg-transparent hover:bg-[#d1b16a]/10 border border-[#E4B95C] text-black px-8 py-4 rounded-sm font-montserrat ">
              Hackathons
            </Button>
            <Button className="bg-transparent hover:bg-[#d1b16a]/10 border border-[#E4B95C] text-black px-8 py-4 rounded-sm font-montserrat ">
              Submit
            </Button>
            <Button className="bg-transparent hover:bg-[#d1b16a]/10 border border-[#E4B95C] text-black px-8 py-4 rounded-sm font-montserrat ">
              Workshop
            </Button>
          </div>
          <div className="flex gap-3 items-center">
            <Select>
              <SelectTrigger className="flex-1 w-full border bg-transparent  focus:outline-none active:bg-transparent px-8 py-4 focus:bg-transparent autofill:bg-transparent">
                <SelectValue placeholder="All dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="uiux_designer">UI/UX designer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
            <Select>
              <SelectTrigger className="flex-1 w-full border bg-transparent  focus:outline-none active:bg-transparent px-8 py-4 focus:bg-transparent autofill:bg-transparent">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="uiux_designer">UI/UX designer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
            <span className="flex items-center text-sm gap-2">
              Clear filters <CiFilter />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-20">
        {data.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      <div className="bg-white p-6 text-[#666666] text-sm font-montserrat mb-6 rounded-md">
        <div className="flex gap-4 items-center">
          <p>Show</p>
          <Select>
            <SelectTrigger className=" border bg-transparent  focus:outline-none active:bg-transparent px-8 py-4 focus:bg-transparent autofill:bg-transparent">
              <SelectValue placeholder="9 per pages" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p>Showing 1 - 9 entries of 47 events</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EventPage;
