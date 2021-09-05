import { useState } from "react";
import { Container } from "semantic-ui-react";
import { EventDashboard } from "../../features/events/eventDashboard/EventDashboard";
import { NavBar } from "../../features/nav/NavBar";

function App() {

    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleSelectEvent(event)  {
        setSelectedEvent(event);
        setFormOpen(true);
    }
   
    const handleCreateFormOpen = () => {
        setSelectedEvent(null);
        setFormOpen(true);
    }

    return (
        <>
            <NavBar setFormOpen={handleCreateFormOpen}></NavBar>
            <Container className='main'>
                <EventDashboard 
                    setFormOpen={setFormOpen} 
                    formOpen={formOpen} 
                    selectedEvent={selectedEvent} 
                    selectEvent={handleSelectEvent}   /> 
            </Container>
        </>
    );
}

export default App;
 