import { useRecoilValue, useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IfiltroDeEventos} from "../../interfaces/Ifiltro";

const useFiltraListaDeEventos = () => {


    const filtro = useRecoilValue<IfiltroDeEventos>(filtroDeEventos);
    const eventos = useRecoilValue<IEvento[]>(listaDeEventosState);
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    if (filtro.date) {
        console.log(filtro.date)
    }
    return () => {
        var filtrados = eventos
        if (filtro) {
            console.log(filtro.date)
            console.log(eventos)
            filtrados = !filtro
                ? eventos
                : eventos.filter((evento) =>
                    filtro.date!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
                );
        }

        return setListaDeEventos(filtrados);

    }

}
export default useFiltraListaDeEventos;