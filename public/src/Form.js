import React, { useState } from "react";

function Form() {
  const [from, setFrom] = useState(""); // this is the input for name
  const [text, setText] = useState(""); // this is the textarea for message
  //console.log({ handleUserName, handleMessage, handleSubmit, from, text });

  async function handleSubmit(event) {
    event.preventDefault();
    const post = { from, text };

    //console.log(post);

    await fetch("https://teniolao-cyf-chat-server.glitch.me/messages", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    console.log("new post added");
    //.then(() => console.log("new post added"));
  }

  function handleUserName(event) {
    //console.log(event.target.value, "handleUserName");
    setFrom(event.target.value);
  }

  function handleMessage(event) {
    // console.log(event.target.value, "handleMessage");
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* action="/message" method="post" */}
      <label>
        Name:
        <input
          type="text"
          value={from}
          name="from"
          onChange={handleUserName}
          placeholder="Your Name"
          required
        />
      </label>
      <label>
        Message:
        <textarea
          type="text"
          value={text}
          name="text"
          onChange={handleMessage}
          placeholder="Your message..."
          required
        ></textarea>
      </label>
      <button>Post</button>
    </form>
  );
}

export default Form;
