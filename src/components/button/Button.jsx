import React from 'react'
import pdf from '../assets/cv updated.pdf';

const Button = () => {
  return (
    <>
      <a
        className="border-4 px-4 py-3 mt-4 font-bold text-xl rounded-2xl hover:text-white hover:border-yellow-400  "
        href={pdf}
        download
      >
        My Resume
      </a>
    </>
  );
}

export default Button