import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

emailjs.init(import.meta.env.VITE_SOME_KEY);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmData, setConfirmData] = useState([]);

  const validateData = (username, useremail) => {
    let error = "";
    if (!/^[a-zA-Z]{3,}$/.test(username)) {
      error = [
        "The username must have at least 3 letters or only contain letters.",
        "error",
      ];
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(useremail)) {
      error = ["The email must be from Gmail or end with '.com'.", "error"];
    } else {
      return { username, useremail };
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = validateData(name, email);
    if (data[1] == "error") {
      console.log(data[0]);
      setConfirmData(data[0], data[1]);
    } else {
      emailjs
        .send(import.meta.env.VITE_SOME_SERVICE, import.meta.env.VITE_SOME_TEMPLATE, {
          from_name: data.username,
          from_email: data.useremail,
          message: message,
        })
        .then(
          (response) => {
            console.log("Email sent successfully", response);
          },
          (error) => {
            console.error("Some error", error);
          }
        );
      setConfirmData("Email sent successfully");
    }
  };

  useEffect(() => {
    if (confirmData) {
      setTimeout(() => {
        setConfirmData("");
      }, 5000);
    }
  }, [confirmData]);

  return (
    <div className="h-auto dark:bg-zinc-950  flex flex-col justify-center items-center py-52">
      <h2 className="text-teal-500 font-bold text-5xl text-center py-10">
        Contact
      </h2>

      <form
        className="flex flex-col p-16 shadow-xl shadow-teal-500/100  dark:bg-zinc-950 rounded-md max-w-md border-2 border-teal-500"
        onSubmit={handleSubmit}
      >
        {confirmData.length > 25 ? (
          <span className="text-red-600 p-5 font-bold ">{confirmData}</span>
        ) : (
          <span className="text-green-600 p-5 font-bold">{confirmData}</span>
        )}

        <div className="py-2">
          <label className="dark:text-white font-bold" htmlFor="name">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            autoFocus
            className="outline-none border-2 border-teal-500 w-full rounded-md p-2 dark:bg-zinc-900 text-teal-500"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="py-2">
          <label className="dark:text-white font-bold" htmlFor="email">
            Your Email:
          </label>
          <input
            type="email"
            value={email}
            id="email"
            className="outline-none border-2 border-teal-500 w-full rounded-md p-2 dark:bg-zinc-900 text-teal-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="py-2">
          <label className="dark:text-white font-bold" htmlFor="message">
            Your Message:
          </label>
          <textarea
            value={message}
            id="message"
            className="resize-none border-2 border-teal-500 outline-none mb-3 w-full rounded-md pb-10 dark:bg-zinc-900 text-teal-500"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-green-600 hover:to-teal-600 py-2 px-4 text-white rounded-md w-52"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
