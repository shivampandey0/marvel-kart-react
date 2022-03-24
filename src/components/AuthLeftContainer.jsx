import React from 'react'

export const AuthLeftContainer = () => {
  return (
    <section className="left-container">
      <div className="flex-column flex-center px-2">
        <p className="txt-lg fw-exb txt-center">Welcome to Marvel Kart</p>
        <p className="txt-md txt-center">
          Your one stop destinataion to shop all things Marvel!
        </p>
      </div>

      <img
        className="img-responsive"
        src={`https://marvel-kart.stdcdn.com/deadpool.webp`}
        alt="Deadpool"
      />
    </section>
  );
}

