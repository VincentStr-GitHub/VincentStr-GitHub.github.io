import React from "react";

function D3JS_Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      viewBox="-10 -10 116 111"
    >
      <clipPath id="clip">
        <path d="M0 0h7.75a45.5 45.5 0 110 91H0V71h7.75a25.5 25.5 0 100-51H0zm36.251 0h32a27.75 27.75 0 0121.331 45.5A27.75 27.75 0 0168.251 91h-32a53.69 53.69 0 0018.746-20H68.25a7.75 7.75 0 100-15.5H60.5a53.69 53.69 0 000-20h7.75a7.75 7.75 0 100-15.5H54.997A53.69 53.69 0 0036.251 0z"></path>
      </clipPath>
      <linearGradient
        id="gradient-1"
        x1="7"
        x2="50"
        y1="64"
        y2="107"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f9a03c"></stop>
        <stop offset="1" stopColor="#f7974e"></stop>
      </linearGradient>
      <linearGradient
        id="gradient-2"
        x1="2"
        x2="87"
        y1="-2"
        y2="84"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f26d58"></stop>
        <stop offset="1" stopColor="#f9a03c"></stop>
      </linearGradient>
      <linearGradient
        id="gradient-3"
        x1="45"
        x2="108"
        y1="-10"
        y2="53"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#b84e51"></stop>
        <stop offset="1" stopColor="#f68e48"></stop>
      </linearGradient>
      <g clipPath="url(#clip)">
        <path fill="url(#gradient-1)" d="M-128-102v300h300z"></path>
        <path fill="url(#gradient-3)" d="M-72-102h300v300z"></path>
        <path
          fill="none"
          stroke="url(#gradient-2)"
          strokeWidth="40"
          d="M-100-102l300 300"
        ></path>
      </g>
    </svg>
  );
}

export default D3JS_Icon;
