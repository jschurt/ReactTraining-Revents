import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import { EventListAttendee } from "./EventListAttendee";

export const EventListItem = ({event, selectEvent, deleteEvent}) => {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                            {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees && event.attendees.map(attendee => (
                        <EventListAttendee key={attendee.id} attendee={attendee}></EventListAttendee>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={() => selectEvent(event)} color='teal' floated='right' content='View' />
                <Button onClick={() => deleteEvent(event.id)} color='red' floated='right' content='Delete' />
            </Segment>
        </Segment.Group>
    );
}