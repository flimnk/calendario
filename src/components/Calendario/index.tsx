
import React from 'react'
import { IEvento } from '../../interfaces/IEvento';
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { listaDeEventosState } from '../../state/atom';
import { CalendarEvent,OnEventDragFinish } from 'kalend';
import { useSetRecoilState } from 'recoil';
import useAtualizaEvento from '../../state/hooks/useAtualizaEvento';
interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useRecoilValue(listaDeEventosState)
  const atualizaEvento = useAtualizaEvento()

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10) //20024-02-15
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
   
    } 
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'purple'
    })
  })

  const onEventDragFinish: OnEventDragFinish = (  
    kallendEentInetaraldo: CalendarEvent,
    kallendEentAletaraldo: CalendarEvent

    ) => {
      const evento = eventos.find(evento => evento.descricao=== kallendEentAletaraldo.summary)
      if(evento){
       const newEvento={
        ...evento
       }
        newEvento.inicio = new Date(kallendEentAletaraldo.startAt)
        newEvento.fim = new Date(kallendEentAletaraldo.endAt)
        atualizaEvento(newEvento)
      }
    };


  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario