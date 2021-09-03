import { Grid } from "semantic-ui-react";
import { EventForm } from "../eventForm/EventForm";
import { EventList } from "./EventList";
import {sampleData} from '../../../app/api/sampleData.js'
import { useState } from "react";

export const EventDashboard = ({formOpen, setFormOpen}) => {

    const [events, setEvents] = useState(sampleData);

    /* Grid is a semantic-ui-react component with 16 columns */
    return(
        <Grid>
           <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
           <Grid.Column width={6}>
               {formOpen && <EventForm setFormOpen={setFormOpen}></EventForm>}
            </Grid.Column>

        </Grid>
    );
}  