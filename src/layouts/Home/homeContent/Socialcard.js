import React from "react";
import SocialStat from "./SocialCard/SocialStat";

export default function Socialcard() {
  const socialStat = [
    {
      title: "facebook",
      icon: "https://louisville.edu/mcconnellcenter/images/facebook_logos_PNG19748.png/image",
      bgColor: "#3d5b99",
      left: {
        value: "89K",
        title: "Friends",
      },
      right: {
        value: "459",
        title: "feeds",
      },
    },
    {
      title: "twitter",
      icon: "https://i.pinimg.com/originals/9b/6e/cc/9b6ecceab5738b648bd9066f7e8de905.png",
      bgColor: "#408fcc",
      left: {
        value: "973k",
        title: "followers",
      },
      right: {
        value: "1,792",
        title: "tweets",
      },
    },
    {
      title: "linkedin",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png",
      bgColor: "#0967c2",
      left: {
        value: "500+",
        title: "contacts",
      },
      right: {
        value: "292",
        title: "feeds",
      },
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundColor: "",
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        marginTop: "50px",
        marginLeft:'12px'
      }}
    >
      {socialStat.map((val, key) => {
        return (
          <div
            key={key}
            style={{
              padding: "20px",
              width: "300px",
              border: "1px solid gray",
            }}
          >
            <SocialStat data={val} />
          </div>
        );
      })}
    </div>
  );
}
