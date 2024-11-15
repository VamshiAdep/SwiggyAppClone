
import React from 'react';
import '../Stylecomponents/footer.css';

const Footer = () => {
const currYear = new Date().getFullYear();

  return (
    <div>
        <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>VamshiAdep</strong>
      </p>
    </footer>
    </div>
  )
}

export default Footer

