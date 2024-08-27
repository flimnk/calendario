import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state/atom';
import useAtualizaEvento from '../../../state/hooks/useAtualizaEvento';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento}) => {
  const listaDeEventos = useRecoilValue<IEvento[]>(listaDeEventosState);
  const atualizaEvento = useAtualizaEvento()

 
  const atualizarStatus = () =>{
    const novoEvento={
      ...evento
    }


    novoEvento.completo = !novoEvento.completo
    atualizaEvento(novoEvento)
    
  }
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={atualizarStatus} ></i>)
}

export default EventoCheckbox