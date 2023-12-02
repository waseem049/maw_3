import React from "react";
import "./speakers.css";
import { AiFillLinkedin } from "react-icons/ai";

function Speakers() {
  const speakers = [
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    {
      imageUrl:
        "https://www.kuppingercole.com/pictures/400/croppedImg_202001081133.jpg",
      imageUr2:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "DR. STEFAN EBENER",
      job: "Head of Customer Engineering",
    },
    // Add more speaker objects here as needed
  ];

  return (
    <div className="futurex_speakers">
      <div className="futurex_speakers-card_heading section__padding">
        <h1>Our Speakers</h1>
      </div>

      <div className="futurex_speakers_">
      {speakers.map((speaker, index) => (
        <div key={index} className="futurex_speakers-card">
          <div className="futurex_speakers-card_speaker">
            <div className="futurex_speakers-card_speaker-img">
              <img src={speaker.imageUrl} alt={speaker.name} />
            </div>
            <div className="futurex_speakers-card_speaker-profilelink">
              <AiFillLinkedin fontWeight={900} />
            </div>
            <div className="futurex_speakers-card_speaker-company">
              <img
                src={speaker.imageUr2}
                alt={speaker.name}
                width="400px"
                height="85px"
              />
            </div>
          </div>
          <div className="futurex_speakers-card-name">{speaker.name}</div>
          <div className="futurex_speakers-card-job">{speaker.job}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Speakers;
