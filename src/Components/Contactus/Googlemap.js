// IFrameComponent.js
import React from 'react';

const IFrameComponent = () => {
  return (
    <div>
      <iframe
      style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"40px 140px"}}
        title="External Content"
        width="100%"
        height="400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.174662254902!2d78.11630348616808!3d9.926684760699839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58f8da053f3%3A0xa71e778a1a26c696!2sSimmakkal%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704881703454!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IFrameComponent;
