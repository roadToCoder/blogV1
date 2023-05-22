import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();

  // const success = <p>thank you for sending us a message</p>;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.APP_SERVICE_ID,
        process.env.APP_TEMPLATE_ID,
        formRef.current,
        process.env.APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message envoyé");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section className='p-6'>
      <div className='bg-slate-100 container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid'>
        <h1 className='text-sky-900 w-full text-xl sm:text-3xl font-bold leading-tight'>Contactez-moi</h1>
        <form className='cf bg-slate-100  w-full max-w-xl mx-auto space-y-6 ng-untouched ng-pristine ng-valid' ref={formRef} onSubmit={sendEmail} >
            <div>
                <label htmlFor="name" className="block mb-1 ml-1">Nom</label>
                <input id="name" type='text' placeholder='Votre nom' name='user_name' autoComplete="on" className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400'/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                <input id="email" type='email' placeholder='Votre email' name='user_email' autoComplete="on" className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400'/>
            </div>
            <div>
                <label htmlFor="text" className="block mb-1 ml-1">Message</label>
                <textarea id="text" name='message' placeholder='Message...' className='block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400'></textarea>
            </div>
            <input type='submit' value='Envoyer' id='input-submit' className='bg-slate-200 w-full px-4 py-2 font-bold text-sky-800 rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 focus:ring-blue-500 hover:ring-blue-500 hover:text-indigo-700'/>
        </form>
      </div>
    </section>
  );
};