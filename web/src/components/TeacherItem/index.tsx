import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
const TeacherItem: React.FC = () => {
  return (

    <article className="teacher-item">
          <header>
              <img src="https://avatars3.githubusercontent.com/u/60653037?s=460&u=0aaa23f929dcd8f4dea0236d669de55c31c4203a&v=4" alt="joao Gomes"/>
              <div>
                <strong>João Gomes</strong>
                <span>Programação</span>

              </div>
          </header>

          <p>
            Xesquedele

            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>20€</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Contacto"/>
              Entrar em contacto
            </button>
          </footer>
  </article>

  );
}

export default TeacherItem;