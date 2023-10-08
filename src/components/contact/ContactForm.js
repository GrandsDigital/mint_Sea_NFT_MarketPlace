import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

function ContactForm({ gridWidth }) {
    // const [state, handleSubmit] = useForm('xnqwjgvp');
    // console.log("state", state);

    const onFinish = async(values) => {
        console.log('Success:', values);
        let res= await axios.post("https://sanjhavehra.womenempowerment.online/Contact_Email_send",{
            Name:values.username,
            subject:values.subject,
            email:values.email,
            msg:values.message
        })
        console.log("Res_Mail",res);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // useEffect(() => {
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.querySelectorAll('.needs-validation');

    //     // Loop over them and prevent submission
    //     Array.prototype.slice.call(forms).forEach(function (form) {

    //         console.log("form", form);
    //         form.addEventListener(
    //             'submit',
    //             function (event) {
    //                 if (!form.checkValidity()) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }

    //                 form.classList.add('was-validated');
    //             },
    //             true
    //         );
    //     });
    // }, []);
    // if (state.succeeded) {
    //     return (
    //         <div className={`${gridWidth} text-center`}>
    //             <p className='mb-0 fw-bold mt-5 mb-0'>
    //                 <i
    //                     className='las la-grin-beam'
    //                     style={{ fontSize: '10rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
    //                 ></i>
    //             </p>

    //             <h1 className='h2'>Thanks for contacting us.</h1>
    //             <p className='text-muted'>We'll reply back as soon as possible.</p>
    //             <Link to='/' className='btn btn-gradient-primary'>
    //                 Return Home
    //             </Link>
    //         </div>
    //     );
    // }

    return (
        <div className={gridWidth}>
            <div className='card'>
                <div className='card-body p-4 p-lg-5'>
                    <div className='d-flex align-items-center mb-4'>
                        <div className='icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white'>
                            <i className='las la-pen-alt'></i>
                        </div>
                        <h2 className='h5 mb-0'>Drop us your query</h2>
                    </div>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='contact-form needs-validation' >
                        <div className='row gy-3'>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='fullname'>
                                    Full name
                                </label>


                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your full name',
                                        },
                                    ]}
                                >
                                    <div className='input-icon'>

                                        <div className='input-icon-text'>
                                            <i className='text-primary las la-user'></i>
                                        </div>
                                        <Input className='form-control shadow-0' placeholder='Enter your full name' id='fullname' />
                                    </div>
                                </Form.Item>
                                {/* <input
                                        className='form-control shadow-0'
                                        type='text'
                                        autoComplete='off'
                                        name='fullname'
                                        id='fullname'
                                        required={true}
                                        placeholder='Enter your full name'
                                    /> */}
                                <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                    Please enter your full name
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label' htmlFor='email'>
                                    Email address
                                </label>

                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your emaill address',
                                        },
                                    ]}
                                >
                                    <div className='input-icon'>

                                        <div className='input-icon-text'>
                                            <i className='text-primary las la-envelope'></i>
                                        </div>
                                        <Input className='form-control shadow-0' placeholder='Enter your email address' id='fullname' />
                                    </div>
                                </Form.Item>

                                {/* <div className='input-icon'>
                                    <div className='input-icon-text'>
                                        <i className='text-primary las la-envelope'></i>
                                    </div>
                                    <input
                                        className='form-control shadow-0'
                                        type='email'
                                        autoComplete='off'
                                        name='email'
                                        id='email'
                                        required={true}
                                        placeholder='Enter your email address'
                                    />
                                    <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                        Please enter your emaill address
                                    </div>
                                </div> */}
                            </div>
                            <div className='col-lg-12'>
                                <label className='form-label' htmlFor='subject'>
                                    Subject
                                </label>
                                <Form.Item
                                    name="subject"
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <div className='input-icon'>

                                        <div className='input-icon-text'>
                                            <i className='text-primary las la-file-alt'></i>
                                        </div>
                                        <Input className='form-control shadow-0' placeholder='Enter your subject' id='fullname' />
                                    </div>
                                </Form.Item>
                                {/* <div className='input-icon'>
                                    <div className='input-icon-text'>
                                        <i className='text-primary las la-file-alt'></i>
                                    </div>
                                    <input
                                        className='form-control shadow-0'
                                        type='text'
                                        autoComplete='off'
                                        name='subject'
                                        id='subject'
                                        placeholder='Enter your subject'
                                    />
                                </div> */}
                            </div>

                            <div className='col-lg-12'>
                                <label className='form-label' htmlFor='message'>
                                    Message
                                </label>
                                <Form.Item
                                    name="message"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your message',
                                        },
                                    ]}
                                >
                                    <div className='input-icon'>

                                        {/* <div className='input-icon-text'>
                                            <i className='text-primary las la-file-alt'></i>
                                        </div> */}
                                        <Input.TextArea className='form-control shadow-0' placeholder='How can we help you' id='fullname' />
                                    </div>
                                </Form.Item>
                                {/* <textarea
                                    className='form-control shadow-0'
                                    rows='4'
                                    name='message'
                                    id='message'
                                    placeholder='How can we help you'
                                    required={true}
                                ></textarea>
                                <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                    Please enter your message
                                </div> */}
                            </div>

                            <div className='col-lg-12'>
                                <Button className='btn btn-primary w-100 pb-2' type='submit' htmlType="submit">
                                    <i className='las la-paper-plane me-2'></i>Send your message
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
