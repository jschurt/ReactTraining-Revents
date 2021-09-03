import { EventListItem } from "./EventListItem";

export const EventList = (props) => {
    return(
        <>
            {props.events.map((event) => {
                return <EventListItem event={event} key={event.id}></EventListItem>
            })}
        </>
    );
}