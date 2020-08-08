import React from "react";

import "./styles.css";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  subject: string;
  bio: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createConnection}
        >
          <img src={whatsAppIcon} alt="entrar em contato" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
