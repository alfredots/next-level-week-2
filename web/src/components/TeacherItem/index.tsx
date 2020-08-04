import React from "react";

import "./styles.css";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/8798027?s=400&u=9dfe78c98a6fdf4d5814f1ebf1ee5c19bd7277a9&v=4"
          alt=""
        />
        <div>
          <strong>Angela Bauer</strong>
          <span>Flutter Developer</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Facere est officiis voluptate molestias quia animi accusamus aspernatur
        amet fugit corrupti. Asperiores saepe, quia perspiciatis voluptatum
        recusandae quasi voluptatem aut consectetur.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button>
          <img src={whatsAppIcon} alt="entrar em contato" />
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
