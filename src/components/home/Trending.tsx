import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import axios from "../../utils/middleware";
import { useStore } from "../../hooks/useStore";
import EventCardSkeleton from "../EventCardSkeleton";
import { API } from "@/api";
import { useQuery } from "@tanstack/react-query";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Loader2, MapPin } from "lucide-react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface Category {
  categoryId: string;
  categoryName: string;
}

const fetchCategories = async () => {
  const response = await axios.get(API.categories.getAllCategories);
  return response.data.data as Category[];
};

function Trending() {
  const {
    root: { event },
  } = useStore();
  const fetchEvents = async (location: string) => {
    return await event.fetchEvents(location);
  };

  const { data: categories } = useQuery({
    queryKey: ["categoriesQuery"],
    queryFn: fetchCategories,
  });
  const [temp, setTemp] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [completionsOpen, setCompletionsOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const { data, isLoading: loading } = useQuery({
    queryKey: ["homepage", selectedLocation, "fetchAllEvents"],
    queryFn: () => fetchEvents(selectedLocation),
  });

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "AIzaSyCEJYl0JjVBnPxlOZgvNkJ69PyLOSVzAmY",
  });

  useEffect(() => {
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        () => setCompletionsOpen(true)
      );
  }, [placePredictions]);
  const clear = () => {
    if (temp) {
      setSelectedLocation("");
      setTemp(false);
    }
  };
  useOnClickOutside(locationRef, () => setCompletionsOpen(false));

  return (
    <div className="lg:px-[8%] px-[8vw] mt-[2vh] flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-4 overflow-x-hidden">
          {categories &&
            categories.map((category: Category) => (
              <a
                key={category.categoryId}
                href={`/categories/${category.categoryId}`}
                className="text-center whitespace-nowrap w-full h-10 py-2 px-4 rounded-full font-medium border-2 bg-[#EBEBEBB2] text-gray-800 transition-colors duration-200 hover:bg-[#60769D] hover:text-white max-w-[280px]"
              >
                {category.categoryName}
              </a>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] flex gap-2 items-center">
            <Link to="/filter">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M14.6663 3.8335H7.16634M9.66634 12.1668H2.16634M9.66634 12.1668C9.66634 13.5475 10.7856 14.6668 12.1663 14.6668C13.5471 14.6668 14.6663 13.5475 14.6663 12.1668C14.6663 10.7861 13.5471 9.66683 12.1663 9.66683C10.7856 9.66683 9.66634 10.7861 9.66634 12.1668ZM6.33301 3.8335C6.33301 5.21421 5.21372 6.3335 3.83301 6.3335C2.4523 6.3335 1.33301 5.21421 1.33301 3.8335C1.33301 2.45278 2.4523 1.3335 3.83301 1.3335C5.21372 1.3335 6.33301 2.45278 6.33301 3.8335Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
            Events in{" "}
            <label htmlFor="location" className="relative w-60">
              <MapPin className="absolute top-1 left-1 min-w-6 w-6 h-6 text-gray-600 group-hover:fill-red-300 group-hover:text-red-500" />
              <input
                id="location"
                className="w-full !px-8 bg-transparent border border-gray-800 rounded-md shadow-sm focus:outline-none lg:text-[1rem] text-[0.7rem]  font-medium text-blue-700"
                value={selectedLocation}
                placeholder="Search for a city"
                onClick={clear}
                onChange={(e) => {
                  getPlacePredictions({ input: e.target.value });
                  setSelectedLocation(e.target.value);
                }}
              />
              {completionsOpen && (
                <div
                  ref={locationRef}
                  className="absolute w-72 bg-white z-10 flex flex-col top-10 left-0 border-2 rounded text-sm"
                >
                  {isPlacePredictionsLoading && (
                    <p className="w-full flex justify-center">
                      <Loader2 className="size-4 text-gray-600 animate-spin" />
                    </p>
                  )}
                  <div className="flex flex-col w-full">
                    {placePredictions.map((item) => (
                      <p
                        key={item.place_id}
                        className="px-4 py-2 w-full hover:bg-gray-100 text-[0.9rem]"
                      >
                        <span
                          className="line-clamp-1"
                          onClick={() => {
                            setSelectedLocation(item.description);
                            setCompletionsOpen(false);
                          }}
                        >
                          {item.description}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </label>
          </div>
          <div className="hover:font-medium hover:underline">
            <Link to={`/events/${selectedLocation}`}>See More</Link>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 justify-between md:hidden gap-2"> */}
        {/*   {loading && [...Array(2)].map((_) => <EventCardSkeleton />)} */}
        {/*   {!loading && */}
        {/*     event.liveEvents */}
        {/*       .slice(0, 2) */}
        {/*       .map((card, index) => <EventCard key={index} {...card} />)} */}
        {/*   {!loading && */}
        {/*     event.upcomingEvents */}
        {/*       .slice(0, 2) */}
        {/*       .map((card, index) => <EventCard key={index} {...card} />)} */}
        {/* </div> */}
        {/* <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2"> */}
        {/*   {loading && [...Array(3)].map((_) => <EventCardSkeleton />)} */}
        {/*   {!loading && */}
        {/*     event.liveEvents */}
        {/*       .slice(0, 3) */}
        {/*       .map((card, index) => <EventCard key={index} {...card} />)} */}
        {/*   {!loading && */}
        {/*     event.upcomingEvents */}
        {/*       .slice(0, 3) */}
        {/*       .map((card, index) => <EventCard key={index} {...card} />)} */}
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 justify-between gap-4">
          {loading && [...Array(5)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            data &&
            data.liveEvents
              .slice(0, 5)
              .map((card, index) => <EventCard key={index} {...card} />)}
          {!loading &&
            data &&
            data.upcomingEvents.map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 pb-10"> */}
      {/*   <div className="flex justify-between mt-4"> */}
      {/*     <div className="font-medium lg:text-[1.4rem] text-[0.9rem]"> */}
      {/*       Upcoming Events */}
      {/*     </div> */}
      {/*     <div className="hover:font-medium hover:underline"> */}
      {/*       <Link to={`/upcoming-events/${selectedLocation}`}>See More</Link> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="grid grid-cols-2 justify-between md:hidden gap-2"> */}
      {/*     {loading && [...Array(2)].map((_) => <EventCardSkeleton />)} */}
      {/*     {!loading && */}
      {/*       event.upcomingEvents */}
      {/*         .slice(0, 2) */}
      {/*         .map((card, index) => <EventCard key={index} {...card} />)} */}
      {/*   </div> */}
      {/*   <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2"> */}
      {/*     {loading && [...Array(3)].map((_) => <EventCardSkeleton />)} */}
      {/*     {!loading && */}
      {/*       event.upcomingEvents */}
      {/*         .slice(0, 3) */}
      {/*         .map((card, index) => <EventCard key={index} {...card} />)} */}
      {/*   </div> */}
      {/*   <div className="justify-between hidden lg:grid lg:grid-cols-5 gap-2"> */}
      {/*     {loading && [...Array(5)].map((_) => <EventCardSkeleton />)} */}
      {/*     {!loading && */}
      {/*       event.upcomingEvents */}
      {/*         .slice(0, 5) */}
      {/*         .map((card, index) => <EventCard key={index} {...card} />)} */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

export default Trending;
