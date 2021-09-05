import cuid from "cuid";
import { useEffect, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react"

export const EventForm = ({setFormOpen, setEvents, createEvent, updateEvent, selectedEvent}) => {


    //1.create useState for each field or
    //2.gereric way
    const initialValues = selectedEvent ?? {
        title: '',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:'',
    }

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        console.log('====== Montei Form. Nao vou mais executar ========');
    }, []);

    /*
    useEffect(() => {
        console.log('====== useEffect ========');
        console.log(initialValues)
        setValues(() => initialValues);
    }, [initialValues]);
*/
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleFormSubmit = () => {
        
        selectedEvent 
            ? updateEvent({...selectedEvent, ...values}) 
            : createEvent({...values, id: cuid(), hostedBy: 'Julio', attendees: [], hostPhotoURL: '/assets/user.png'});

        setFormOpen(false);
    };


    return(

        //console.log('====== Render ========')

        <Segment clearing style={{position: "fixed", top: '100px', width: '35%'}}>
            <Header content={selectedEvent?'Edit event':'Create new event'} style={{color: "red"}} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder='Event title' value={values.title} name='title' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category' value={values.category} name='category' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' value={values.description} name='description' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City' value={values.city} name='city' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue' value={values.venue} name='venue' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date' value={values.date} name='date' onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' /> 
                <Button type='submit' floated='right' content='Cancel' onClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    );
}