import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import { Toaster } from "react-hot-toast";
const Contact = () => {
  const { Contact } = content;
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  // function onsubmit((result) => {
  //   console.log(result.text);
  //   form.current.reset();
  //   toast.success("Email send Successfully");

  // })
      };
  return (
    <section id="contact" className="bg-dark_primary text-white">
      <Toaster />
      <div className="md:container px-5 pt-14">
        <h2 data-aos="fade-down" className="title text-white">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10">
          <form
            data-aos="fade-up"
            action="https://formspree.io/f/mbjeoabo"
            className="flex flex-col gap-5 flex-1"
            method="POST"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded "
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              required
              className="border border-slate-600 p-3 rounded "
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button  type="submit" className="btn bg-white text-dark_primary self-start pointer" onClick={()=>{ toast.success("Email send Successfully");
}}>
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 400}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a href={content.link} className="font-Poppins" target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
