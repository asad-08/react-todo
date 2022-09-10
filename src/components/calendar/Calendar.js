import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography } from "@mui/material";
import EventDialog from "./EventDialog";

function Calendar() {
  const calendarRef = useRef();
  const [clickedEvent, setClickedEvent] = useState(false);

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    // dispatch(openNewEventDialog(selectInfo));
  };

  const handleEventDrop = (eventDropInfo) => {
    const { id, title, allDay, start, end, extendedProps } =
      eventDropInfo.event;
    // dispatch(
    //   updateEvent({
    //     id,
    //     title,
    //     allDay,
    //     start,
    //     end,
    //     extendedProps,
    //   })
    // );
  };
  function toggle(eventClickInfo) {
    setClickedEvent((prevState) => ({
      clickedEvent: !prevState.clickedEvent,
    }));
  }
  const handleEventClickClose = () => {
    setClickedEvent(false);
    // dispatch(openEditEventDialog(clickInfo));
  };

  function renderEventContent(eventInfo) {
    const labelId = eventInfo.event.extendedProps.label;
    // const label = _.find(labels, { id: labelId });

    return (
      <label>asad</label>
      // <Box
      //   sx={
      //     {
      //       // backgroundColor: label?.color,
      //       // color: label && theme.palette.getContrastText(label?.color),
      //     }
      //   }
      //   className={clsx(
      //     "flex items-center w-full rounded-4 px-8 py-2 h-22 text-white"
      //   )}
      // >
      //   <Typography className="text-12 font-semibold">
      //     {eventInfo.timeText}
      //   </Typography>
      //   <Typography className="text-12 px-4 truncate">
      //     {eventInfo.event.title}
      //   </Typography>
      // </Box>
    );
  }

  const handleDates = (rangeInfo) => {
    // setCurrentDate(rangeInfo);
  };

  const handleEventAdd = (addInfo) => {};

  const handleEventChange = (changeInfo) => {};

  const handleEventRemove = (removeInfo) => {};
  return (
    <div className="mt-[60px] p-4 w-full dark:text-slate-100">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends
        datesSet={handleDates}
        select={handleDateSelect}
        events={[]}
        eventContent={renderEventContent}
        eventClick={function (arg) {
          alert(arg.event.title);
        }}
        dateClick={() => setClickedEvent(true)}
        eventAdd={handleEventAdd}
        eventChange={handleEventChange}
        eventRemove={handleEventRemove}
        eventDrop={handleEventDrop}
        initialDate={new Date()}
        ref={calendarRef}
      />
      {clickedEvent ? (
        <EventDialog handleEventClickClose={handleEventClickClose} />
      ) : null}
    </div>
  );
}

export default Calendar;
