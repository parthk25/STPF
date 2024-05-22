import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <>
            <div className='w-1140'>
                <div className='text-center'>
                    <p>E-mail : photofactory@shivays.com</p>
                    <p>You can draft an email to us on the above mentioned address, <br />
                        or can send us the details by filling the form below. </p>
                    <p>Thank you!</p> 
                </div>
                <div className='fq p-5 m-5'>
                    <h3 className='text-center mb-4'>For enquiry fill the form ..</h3>
                    <Form action='https://formspree.io/f/xbjnegwl' method='POST'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type="text" name='name' autoComplete='off' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type="email" name='email' autoComplete='off' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone number <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type="number" name='number' autoComplete='off' required />
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDetails">
                            <Form.Label>Tell us more about your wedding - event flow, venues. <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type='text' name='tellMore' autoComplete='off' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label>Location of the wedding <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type="text" name='location' autoComplete='off' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Event Dates <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Control type="text" name='date' autoComplete='off' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>What services are you looking for ? <span className='text-muted fs-6'>(required)</span></Form.Label>
                            <Form.Check type="checkbox" name='photography' autoComplete='off' label="Photography" />
                            <Form.Check type="checkbox" name='films' autoComplete='off' label="Films" />
                            <Form.Check type="checkbox" name='both photography and films' autoComplete='off' label="Both Photography And Films" />
                        </Form.Group>
                        <Button type="submit" className='button text-dark align-items-center'>
                            Submit
                        </Button>
                    </Form>
                </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.27692172872!2d72.76999827530412!3d21.14137508053619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05300620ccdcd%3A0x7381d362d18cae5!2sShivay%20the%20photo%20factory%20(STPF)!5e0!3m2!1sen!2sin!4v1716356898959!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </>
    )
}

export default Contact
