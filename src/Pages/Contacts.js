import React, {useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

function Contacts() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [formValid, setFormValid] = useState(false);
    useEffect ( () => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError])

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const feedbackHandler = (e) => {
        setFeedback(e.target.value);
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Form style={{ marginTop: '50px' }}>
                    <Form.Group controlId="fromBasicEmail" className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                        <Form.Control onChange={e => emailHandler(e)} name="email"
                                      value={email} onBlur={e => blurHandler(e)} type="email"
                                      placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="fromBasicFeedback" className="mb-3">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control name="feedback" value={feedback} type="textarea"
                                      placeholder="Enter your feedback"
                                      onChange={e => feedbackHandler(e)}>
                        </Form.Control>
                    </Form.Group>

                    <Button disabled={!formValid} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Contacts;