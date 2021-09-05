import { EventListItem } from "./EventListItem";

export const EventList = ({events, selectEvent, deleteEvent}) => {
    return(
        <>
            {events.map((event) => {
                return <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent}></EventListItem>
            })}
        </>
    );
}