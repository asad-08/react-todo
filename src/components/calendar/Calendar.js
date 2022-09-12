import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography } from "@mui/material";
import EventDialog from "./EventDialog";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/task/taskSlice";

function Calendar() {
  const events = useSelector(getAllTasks);
  const dispatch = useDispatch();
  const calendarRef = useRef();
  const [isClickedEvent, setIsClickedEvent] = useState(false);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(false);
  //const [events, setEvents] = useState([]);
  const [isAdd, setIsAdd] = useState(true);

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
  const handleEventClickClose = () => {
    setIsClickedEvent(false);
    // dispatch(openEditEventDialog(clickInfo));
  };

  function renderEventContent(eventInfo) {
    console.log("e: ", eventInfo);
    return (
      <Box
        sx={
          {
            // backgroundColor: label?.color,
            // color: label && theme.palette.getContrastText(label?.color),
          }
        }
        className={
          "flex items-center justify-start w-full rounded-4 px-1 py-1 h-22 text-white"
        }
      >
        <Typography className="!text-[12px] !font-semibold">
          {moment(eventInfo.selectedDateTime).format("HH:mm")}
        </Typography>
        <Typography className="!text-[12px] px-1 truncate !font-semibold">
          {"- "}
          {eventInfo.title}
        </Typography>
      </Box>
    );
  }

  const handleDates = (rangeInfo) => {
    // setCurrentDate(rangeInfo);
  };

  const handleEventAdd = (addInfo) => {
    const list = [...events];
    list.push(addInfo);
    // setEvents(list);
  };

  const handleCloseModal = () => {
    setIsClickedEvent(false);
  };
  const handleEventChange = (changeInfo) => {};

  const handleEventRemove = (removeInfo) => {};

  function clearClickedEvent() {
    setClickedEvent(null);
  }
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
        events={events}
        // eventContent={renderEventContent}
        eventClick={function (arg) {
          setIsClickedEvent(true);
          setIsAdd(false);
          setClickedEvent(arg);
        }}
        eventColor="#9333EA"
        dateClick={(arg) => {
          const obj = {
            selectedDate: moment(arg.date).format("YYYY-MM-DD"),
            selectedDateStr: arg.dateStr,
          };
          setSelectedDate(obj.selectedDate);
          setIsClickedEvent(true);
          setIsAdd(true);
        }}
        // eventAdd={handleEventAdd}
        // eventChange={handleEventChange}
        // eventRemove={handleEventRemove}
        // eventDrop={handleEventDrop}
        initialDate={new Date()}
        ref={calendarRef}
      />
      {isClickedEvent ? (
        <EventDialog
          handleEventClickClose={handleEventClickClose}
          isOpen={isClickedEvent}
          selectedDate={selectedDate}
          // handleEventAdd={handleEventAdd}
          setIsClickedEvent={setIsClickedEvent}
          isAdd={isAdd}
          clickedEvent={clickedEvent}
          clearClickedEvent={clearClickedEvent}
          total={events && events.length}
        />
      ) : null}
    </div>
  );
}

export default Calendar;
