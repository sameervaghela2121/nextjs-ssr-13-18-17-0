import axios from "axios";
import { useState } from "react";

const getRandomImage = async () => {
  const response = await axios.get('https://source.unsplash.com/random');
  return response.request.res.responseUrl;
};

export async function getServerSideProps({ req, res }) {
  const imageUrl = await getRandomImage();

  return {
    props: {
      imageUrl,
    },
  };
}

export default function Home({ imageUrl }) {

  const handleBtn = (e) => {
    const randomWidth = Math.floor(Math.random() * (window.innerWidth - 1)) + 1;
    const randomHeight = Math.floor(Math.random() * (window.innerHeight - 1)) + 1;
    e.target.style.top = randomHeight + "px";
    e.target.style.left = randomWidth + "px";
  };


  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center relative">
      <div>
        <h1>Random Image from Unsplash</h1>
        <div className="card w-[500px] h-[600px]">
          <img src={imageUrl} alt="Random Unsplash" />
        </div>
      </div>
      <div className="text-xl font-bold text-white">
        <div>Hey! Nerd You Have Successfully Deployed NexJs SSR Build :XD</div>
      </div>
      <div>
        <button className="text-xl font-bold text-white border bg-cyan-600 rounded-md border-cyan-300 absolute" placeholder="Click Me" onMouseEnter={(e) => handleBtn(e)} onClick={(e) => alert("You're Nerd!")}>Catch Me If you can 🥳!</button>
      </div>
    </section>
  );
}
