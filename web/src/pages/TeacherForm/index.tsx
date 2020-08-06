import React , { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';


import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const[ scheduleItems , setScheduleItems] = useState([
    { week_day : 0 , from: '' , to: ''}
  ]);
 

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      { week_day : 0 , from: '' , to: ''}
    ]);
    
    
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return {...scheduleItem, [field] : value};
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
      
  }
  
  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('/classes' , {
      name,
      avatar, 
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Registo feito com sucesso!');
      
      history.push('/');
    }).catch(() => {
      alert('Erro no registo!');
    })

    
  }


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrivel que você que dar aulas"
      description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>

       
          <fieldset>
              <legend>Dados do Proffy</legend>
              <Input 
                name="name" 
                label="Nome Completo" 
                value={name} 
                onChange={(event) => {
                  setName(event.target.value)
                }} 
              />
              <Input 
                name="avatar" 
                label="Foto de Perfil"
                value={avatar} 
                onChange={(event) => {
                  setAvatar(event.target.value)
                }} 
              />
              <Input 
                name="whatsapp"  
                label="WhatsApp"
                value={whatsapp} 
                onChange={(event) => {
                  setWhatsapp(event.target.value)
                }} 
              />
              <Textarea 
                name="bio" 
                label="Biografia"
                value={bio} 
                onChange={(event) => {
                  setBio(event.target.value)
                }} 
              />
          </fieldset>

          <fieldset>
              <legend>Sobre a aula</legend>
              
              <Select 
                    name="subject" 
                    label="Disciplina" 
                    value={subject}
                    onChange={(event) => {
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

              <Input 
                name="cost" 
                label="Custo da aula por hora"
                value={cost}
                    onChange={(event) => {
                      setCost(event.target.value)
                    }}
              />

          </fieldset>

          <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
                </legend>
              {scheduleItems.map((scheduleItem , index )=> {
                return (
                  <div key={scheduleItem.week_day} className="schedule-item">
                   <Select 
                            name="week_day" 
                            label="Dia da semana" 
                            value={scheduleItem.week_day}
                            onChange={event => setScheduleItemValue(index, 'week_day' , event.target.value)}
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
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={event => setScheduleItemValue(index, 'from' , event.target.value)}
                   />
                   <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={event => setScheduleItemValue(index, 'to' , event.target.value)}
                   />
              </div> 
                )
              })}


             
          </fieldset>



          <footer>
            <p>
            <img src={warningIcon} alt="Atenção"/>
            Importante  <br/>
            É obrigatório preencher todos os items do formulário
            </p>

            <button type="submit">Registar</button>
          </footer>

          </form>
      </main>
    </div>
  )
}

export default TeacherForm;
