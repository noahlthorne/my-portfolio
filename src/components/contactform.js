import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xayqnwnv",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thank you for your message!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>

      <form id="contact" onSubmit={handleOnSubmit} method="POST">

      <div className="contact-form">

        <div>
          <input id="name" placeholder="Your name" name="name" type="text" tabindex="1" required autofocus/>
        </div>

        <div>
          <input id="email" type="email" placeholder="Email" name="email" required />
        </div>

        <div>
          <textarea id="message" placeholder="Message" name="message"></textarea>
        </div>

        <div>
          <button type="submit" disabled={serverState.submitting}>
            Send Message
          </button>
        </div>

      </div>

        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>

    </div>
  );
};

export default MyForm;
