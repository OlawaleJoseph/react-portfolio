import React, { useState, Fragment, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Toast from './Toast';

const Contact = ({ data }) => {
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [success, setSuccess] = useState(true);
   const [error, setError] = useState(true);
   const [toastText, setToastText] = useState('');

   useEffect(() => {
      setSuccess(false);
      setError(false)
   }, [success])

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('gmail', process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_JS_USER_ID)
      .then(result => {
         console.log('Success')
         setToastText('Thanks for reaching out.');
         setSuccess(true);
         setError(false)
      },
      error => {
         console.log('Failed')
         setToastText(error.message);
         setSuccess(false)
         setError(true)
      })
      e.target.reset();
    }
    

    return (
      <Fragment>
         <Toast success={success} error={error} text={toastText} />
         <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" onSubmit={handleSubmit} name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input value={name} type="text" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit' className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
                     {data?.email}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
      </Fragment>
    );
}

export default Contact;
