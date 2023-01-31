import React, { useState } from "react";
//import { Link } from "react-router-dom";

function Message() {
  const [data, setData] = useState([]);

  async function handleClick() {
    const response = await fetch(
      "https://teniolao-cyf-chat-server.glitch.me/messages",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const result = await response.json();
    //console.log('result is:', JSON.stringify(result, null, 4));

    setData(result);
  }

  return (
    <div className="body-wrapper">
      <h2>Hello World</h2>
      <button onClick={handleClick}>Fetch Data</button>
      {data.map((property) => {
        const { id, from, text } = property;
        return (
          <div key={id}>
            <p>Name: {from}</p>
            <p>Message: {text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Message;
