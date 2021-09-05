import { Grid } from "semantic-ui-react";
import { EventForm } from "../eventForm/EventForm";
import { EventList } from "./EventList";
import {sampleData} from '../../../app/api/sampleData.js'
import { useState } from "react";

export const EventDashboard = ({formOpen, setFormOpen, selectedEvent, selectEvent }) => {

    const [events, setEvents] = useState(sampleData);

    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    } 

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map( evt => evt.id === updatedEvent.id ? updatedEvent : evt ));
        selectEvent(null);
    };

    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter( evt => evt.id !== eventId ));
        selectEvent(null);
        setFormOpen(false);
    };
   

    /* Grid is a semantic-ui-react component with 16 columns */
    return(
        <Grid>
           <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
            </Grid.Column>
           <Grid.Column width={6}>
               {formOpen && 
                    <EventForm 
                        setFormOpen={setFormOpen} 
                        setEvents={setEvents} 
                        createEvent={handleCreateEvent}
                        updateEvent={handleUpdateEvent}
                        selectedEvent={selectedEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                    >
                    </EventForm>}
            </Grid.Column>

        </Grid>
    );
}  