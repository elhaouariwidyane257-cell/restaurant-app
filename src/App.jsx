import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css/mousewheel";

import "swiper/css";

import "./index.css";

/* 🔊 sound */
const playSound = (sound) => {
  const audio = new Audio(`/sounds/${sound}.mp3`);
  audio.play();
};

/* ⭐ Component */
function ReviewPage({ title }) {

  const [comment, setComment] = useState("");
  const [emoji, setEmoji] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {

    if(comment === "" || emoji === "") {
      alert("Choisissez emoji et commentaire");
      return;
    }

    setMessage(`✅ Merci pour votre avis ${emoji}`);

    setComment("");
  };

  return (
    <div className="page">

      <h2>{title}</h2>

      {/* emojis */}
      <div className="emojiBox">

        <span
          className="emoji"
          onClick={() => {
            setEmoji("😍");
            playSound("happy");
          }}
        >
          😍
        </span>

        <span
          className="emoji"
          onClick={() => {
            setEmoji("😊");
            playSound("normal");
          }}
        >
          😊
        </span>

        <span
          className="emoji"
          onClick={() => {
            setEmoji("😡");
            playSound("sad");
          }}
        >
          😡
        </span>

      </div>

      {/* input */}
      <textarea
        className="input"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* button */}
      <button className="btn" onClick={handleSend}>
        Send 🚀
      </button>

      {/* result */}
      <p className="message">
        {message}
      </p>

    </div>
  );
}

/* 🌟 APP */
export default function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setShowWelcome(false);
    }, 2500);

  }, []);

  return (

    <div>

      {/* welcome */}
      {showWelcome && (
        <div className="welcome">
          <h1>🍽️ Bienvenue</h1>
          <p>Welcome to our Restaurant</p>
        </div>
      )}

      {/* swiper */}
      <Swiper
  direction={"horizontal"}
  mousewheel={true}
  modules={[Mousewheel]}
  speed={1000}
  className="swiper"
>
        {/* service */}
        <SwiperSlide>
          <ReviewPage title="⭐ Service" />
        </SwiperSlide>

        {/* cuisine */}
        <SwiperSlide>
          <ReviewPage title="🍳 Qualité de Cuisine" />
        </SwiperSlide>

        {/* ambiance */}
        <SwiperSlide>
          <ReviewPage title="🛋️ Ambiance et Confort" />
        </SwiperSlide>

      </Swiper>

    </div>
  );
}