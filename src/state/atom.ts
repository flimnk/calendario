import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IfiltroDeEventos } from "../interfaces/Ifiltro";
import { eventosAsync } from "./selectors";

export const listaDeEventosState = atom<IEvento[]>({
    key:'listaDeEventosState',
    default: eventosAsync
})


export const filtroDeEventos = atom<IfiltroDeEventos>({
    key:'filtroDeEventos',
    default: {}
        
})

