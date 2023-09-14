import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className='feedback flex flex-row  container mx-auto mt-24 pt-20 pb-8 text-[#FFFFFF80]'>
        <div className="newsletter px-4 w-2/5">
          <p className='text-[1.6rem] font-semibold mb-2'>Newslleter</p>
          <p className='text-[1.1rem] font-normal '>
            Get news about articles and updates <br/> in your inbox.
          </p>{" "}
        </div>

        <div className='    '>
          <div className='mb-6'>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='NAME'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
              required
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name}</p>
            )}
          </div>
          <div className='mb-6'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='EMAIL'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}
          </div>
          <div className='mb-6'>
            <input
              type='text'
              id='message'
              placeholder='MESSAGE'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                errors.message ? "border-red-500" : ""
              }`}
              rows='4'
              required
            ></input>
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message}</p>
            )}
          </div>
         
        </div>
      </div>

      <div className='flex container mx-auto'>
        <div className='text-white text-[8.4rem] font-extrabold leading-[6.5rem]'>
            <p>GET</p>
            <p>IN TOUCH</p>
        </div>
            <button
              type='submit'
              className='submit-button mb-8  '
            >
              SEND
            </button>
          </div>
    </form>
  );
}

export default ContactForm;
