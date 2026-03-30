"use client";
import React from "react";

const HomeButton = () => {
  return (
    <>
      <style>{`
        .neo-home-btn {
          outline: none;
          cursor: pointer;
          border: none;
          padding: 0.9rem 2rem;
          margin: 0;
          font-family: inherit;
          position: relative;
          display: inline-block;
          letter-spacing: 0.05rem;
          font-weight: 700;
          font-size: 17px;
          border-radius: 500px;
          overflow: hidden;
          background: #000;
          color: #fff;
        }
        .neo-home-btn span {
          position: relative;
          z-index: 10;
          transition: color 0.4s;
        }
        .neo-home-btn:hover span {
          color: #000;
        }
        .neo-home-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -10%;
          width: 120%;
          height: 100%;
          z-index: 0;
          background: #6244e7;
          transform: skew(30deg) translate3d(-100%, 0, 0);
          transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
        }
        .neo-home-btn:hover::before {
          transform: skew(30deg) translate3d(0%, 0, 0);
        }
      `}</style>
      <button className="neo-home-btn">
        <span>Neo Wealth</span>
      </button>
    </>
  );
};

export default HomeButton;
