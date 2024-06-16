import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between border-t border-gray-200">
      <div>
        <h1 className="text-blue-500 text-3xl py-2">MORENT</h1>
        <p className="opacity-60 text-sm py-4 w-80">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-1/2">
        <div>
          <h3 className="text-black font-semibold opacity-100">About</h3>
          <ul className="text-sm leading-7 opacity-60">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-semibold opacity-100">Socials</h3>
          <ul className="text-sm leading-7 opacity-60">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-semibold opacity-100">Community</h3>
          <ul className="text-sm leading-7 opacity-60">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
