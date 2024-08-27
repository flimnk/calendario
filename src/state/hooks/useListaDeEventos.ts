import { useRecoilValue, useSetRecoilState } from "recoil";
import { eventosFiltradosState } from "../selectors";


const useListaDeEventos = ()=>{
    const ListaDeEventos = useRecoilValue( eventosFiltradosState )
    return ListaDeEventos;
    

}
export default useListaDeEventos;