import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { useEffect } from "react";
import { Console } from "console";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',

    get: ({ get }) => {

        const filtro = get(filtroDeEventos);
        const todosEventos = get(listaDeEventosState);


        let eventos = todosEventos.filter(evt => {
            if (!filtro.date) {
                return true; // Retorna todos os eventos se não houver filtro de data
            } else {
                const ehOMesmoDia = evt.inicio.toISOString().slice(0, 10) === filtro.date.toISOString().slice(0, 10);
                return ehOMesmoDia;
            }
        });
        console.log("Eventos Sem modificação")
        console.log(eventos);





        if (filtro.status === 'completos') {


            eventos = eventos.filter(evt => evt.completo)
            console.log("Eventos completos")
            console.log(eventos)


        }
        if (filtro.status === 'incompletos') {
            console.log("Eventos imcompletos")
            console.log(eventos)
        }

        return eventos;
    }


});


export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaApi =  await fetch('http://localhost:8080/eventos')
        const eventos:IEvento[] = await  respostaApi.json();
        return eventos.map(evento =>({
            ...evento,
            inicio:new Date(evento.inicio),
            fim: new Date(evento.fim)
        })

        )
    }
})