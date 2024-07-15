import contactImg from '../assets/img/contact-img.svg';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setSatus] = useState({});

    const onFormUbpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http/localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charet=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setSatus({ success: true, message: 'Message Send Successfuly'})
        } else {
            setSatus({ success: false, message: "Somthing went wrong, please try again later"})
        };

    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='First Name' value={formDetails.firstName} onChange={(e) => onFormUbpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='Last Name' value={formDetails.lastName} onChange={(e) => onFormUbpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' placeholder='Email' value={formDetails.email} onChange={(e) => onFormUbpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' placeholder='Phone Num' value={formDetails.phone} onChange={(e) => onFormUbpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" placeholder='Message' value={formDetails.message} onChange={(e) => onFormUbpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}