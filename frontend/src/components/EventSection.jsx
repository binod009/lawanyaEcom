import React, { useEffect } from "react";
import EventsCard from "./Reusable/EventsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventDataAsync } from "../slice/event";
import program_svc from "../pages/service.Service";
import event_svc from "../pages/EventService";
const EventSection = () => {
  const { eventdata } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventDataAsync());
  }, []);
  return (
    <>
      <div className="bg-white pb-20 h-auto w-full lg:pb-12">
        <div className="text-center">
          <h5 className="text-4xl text-slate-900 font-bold p-5">Our Events</h5>
        </div>
        <div className="lg:max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {eventdata ? (
              eventdata.map((item) => (
                <EventsCard
                  time={item.time}
                  date={event_svc.convertDateFormat(item.eventdate)}
                  description={program_svc.trimmer(item.description)}
                  image={item.eventimage}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;

/* <div className="flex flex-col justify-center items-center lg:max-w-7xl mx-auto">
          <div className="h-[26rem] w-[20rem] bg-[#ffffff] flex flex-col items-center justify-center rounded-3xl ">
            <div className="h-44 w-full flex items-center justify-center ">
              <img
                className="object-cover h-full rounded-2xl p-1.5 "
                src="https://www.pcma.org/wp-content/uploads/2021/06/CL2021-Singapore.jpg"
                alt="event-pic"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-start pl-5">
              <h4 className="text-xl text-orange-400 font-semibold ">
                Effective Communication
              </h4>
              <div className="text-pink-800 font-bold text-lg">
                26 december 2024
              </div>

              <div className="text-pink-950 font-base text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam sequi cumque odit maxime perferendis adipisci
                officiis, omnis quidem ab reiciendis?
              </div>
            </div>
          </div>
        </div> */
