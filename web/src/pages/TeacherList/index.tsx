import React, { useState, FormEvent , useEffect} from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { Link } from 'react-router-dom';


import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList() {

  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  
  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

   const response = await  api.get('/classes' , {
      params: {
        subject,
        week_day,
        time
      }
    })
    const filtedTeachers = response.data;

    setTeachers(filtedTeachers);
    
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Proffys disponiveis">
        <form  id="search-teachers" onSubmit={searchTeachers}>
            <Select 
                    name="subject" 
                    label="Disciplina" 
                    value={subject}
                    onChange={event => {
                      setSubject(event.target.value)
                    }}
                    options={[
                      { value: 'Artes' , label: 'Artes' },
                      { value: 'Biologia' , label: 'Biologia' },
                      { value: 'Ciências' , label: 'Ciências' },
                      { value: 'Geografia' , label: 'Geografia' },
                      { value: 'Português' , label: 'Português' },
                      { value: 'Matemática' , label: 'Matemática' },
                      { value: 'Fisica e Quimica' , label: 'Fisica e Quimica' },
                      { value: 'Educação Fisica' , label: 'Educação Fisica' },
                      { value: 'História' , label: 'História' },
                      { value: 'Programação' , label: 'Programação' },
                      { value: 'Eletrônica' , label: 'Eletrônica' },
                      { value: 'Economia' , label: 'Economia' },
                      { value: 'Direito' , label: 'Direito' },
                      { value: 'Design' , label: 'Design' },
                    ]}
            />
            <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day} 
                    onChange={event => {
                      setWeek_day(event.target.value)
                    }}
                    options={[
                      { value: '0' , label: 'Domingo' },
                      { value: '1' , label: 'Segunda-Feira' },
                      { value: '2' , label: 'Terça-Feira' },
                      { value: '3' , label: 'Quarta-Feira' },
                      { value: '4' , label: 'Quinta-Feira' },
                      { value: '5' , label: 'Sexta-Feira' },
                      { value: '6' , label: 'Sábado' },
                    ]}  
            />
          <Input 
            name="time" 
            type="time" 
            label="Hora"
            value={time}
            onChange={event => {
              setTime(event.target.value)
            }}
          />

          <button type="submit">Filtrar</button> 
           
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher : Teacher) => {
         return <TeacherItem  key={teacher.id} teacher={teacher} />
        })}
        
        
      </main>
    </div>
  )
}

export default TeacherList;
