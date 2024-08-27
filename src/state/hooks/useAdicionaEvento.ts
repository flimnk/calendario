import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { error } from "console";
import { ObterId } from "../../uteis/obterId";

const useAdicionaEvento = ()=>{
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento:IEvento)=>{
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error('Data deve ser futura');
        }
        evento.id = ObterId();
        return setListaDeEventos(listaAntiga => [...listaAntiga,evento])  
    }

}
export default useAdicionaEvento;