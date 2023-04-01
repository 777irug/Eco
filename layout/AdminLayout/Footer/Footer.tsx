import React from 'react'

export default function Footer() {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        <a className="text-decoration-none" href="#">ECO UI </a>
        <a className="text-decoration-none" href="#">
         Admin
        
        </a>
        {' '}
        © 2023
        Gursimranjit.
      </div>
      <div className="ms-md-auto">
        Powered by&nbsp;
        <a
          className="text-decoration-none"
          href="#"
        >
          ECO-UI
        </a>
      </div>
    </footer>
  )
}
